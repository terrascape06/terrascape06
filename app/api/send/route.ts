import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. On récupère les noms EXACTS que ton formulaire envoie
    interface ContactFormData {
      name: string;
      establishment: string;
      phone: string;
      serviceType: string;
      message: string;
      email: string;
    }
    const { name, establishment, phone, serviceType, message, email } = await request.json() as ContactFormData;

    // 2. On envoie l'email
    const data = await resend.emails.send({
      from: 'Terrascape <contact@terrascape06.com>',
      to: ['terrascape06@gmail.com'], 
      replyTo: email, // Permet de répondre direct au client si l'email est fourni
      subject: `Nouveau Lead : ${establishment} (${serviceType})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #A67C52;">Nouveau contact via Terrascape.fr</h1>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong>👤 Nom :</strong> ${name}</p>
            <p><strong>🏢 Établissement :</strong> ${establishment}</p>
            <p><strong>📞 Téléphone :</strong> ${phone}</p>
            <p><strong>✉️ Email :</strong> ${email || 'Non renseigné'}</p>
            <p><strong>🛠️ Service :</strong> ${serviceType}</p>
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
    console.error('Erreur API Resend:', error); // Pour voir l'erreur dans ton terminal VS Code
    return NextResponse.json({ success: false, error });
  }
}