import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    interface ContactFormData {
      name: string;
      establishment: string;
      email: string;
      phone: string;
      message: string;
    }
    
    // Extraction des données du formulaire (components/sections/Contact.tsx)
    const { name, establishment, email, phone, message } = await request.json() as ContactFormData;

    const data = await resend.emails.send({
      from: 'Terrascape <contact@terrascape06.com>',
      to: ['terrascape06@gmail.com'],
      replyTo: email,
      subject: `Nouveau Contact : ${establishment} (Page d'accueil)`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #A67C52;">Nouveau message via Terrascape.fr</h1>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong>👤 Nom :</strong> ${name}</p>
            <p><strong>🏢 Établissement :</strong> ${establishment}</p>
            <p><strong>✉️ Email :</strong> ${email}</p>
            <p><strong>📞 Téléphone :</strong> ${phone}</p>
          </div>
          <br />
          <p><strong>Message :</strong></p>
          <div style="border-left: 4px solid #A67C52; padding-left: 10px; margin-left: 5px;">
            <p>${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Erreur API Contact:', error);
    return NextResponse.json({ success: false, error });
  }
}
