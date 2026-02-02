import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

// Get the preferred locale from the Accept-Language header
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    // Parse the Accept-Language header
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [locale, q = 'q=1'] = lang.trim().split(';');
        const quality = parseFloat(q.replace('q=', ''));
        return { locale: locale.split('-')[0], quality };
      })
      .sort((a, b) => b.quality - a.quality);
    
    // Find the first matching locale
    for (const lang of languages) {
      if (locales.includes(lang.locale)) {
        return lang.locale;
      }
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  // Redirect to locale-prefixed URL
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    '/((?!_next|api|.*\\.).*)',
  ],
};
