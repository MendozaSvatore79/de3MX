import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configurar nodemailer con Gmail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  comments: string;
  services: string;
  budget: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();
    
    const { name, email, phone, company, comments, services, budget } = formData;

    // Validar campos requeridos
    if (!name || !email || !comments) {
      return NextResponse.json(
        { error: 'Nombre, email y comentarios son requeridos' },
        { status: 400 }
      );
    }

    // 1. Guardar en Strapi
    try {
      const strapiResponse = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
        body: JSON.stringify({
          data: {
            name,
            email,
            phone: phone || '', // Enviar string vacío si no hay teléfono
            company: company || '',
            comments,
            services: services || '',
            budget: budget || '',
            submittedAt: new Date().toISOString(),
          },
        }),
      });

      if (!strapiResponse.ok) {
        const errorText = await strapiResponse.text();
        console.error('Error al guardar en Strapi:', errorText);
        // Si Strapi falla, aún intentamos enviar los emails
      } else {
        console.log('✅ Datos guardados en Strapi exitosamente');
      }
    } catch (strapiError) {
      console.error('Error al conectar con Strapi:', strapiError);
      // Continuamos aunque falle Strapi
    }

    // 2. Preparar emails
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'noreply@de3.mx';
    const contactEmail = process.env.CONTACT_EMAIL || 'contacto@de3.mx';

    // Email para De3
    const emailToDe3 = {
      from: fromEmail,
      to: contactEmail,
      subject: `Nuevo contacto de ${name} - De3 Website`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #00DA6B; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2B2B2C; }
            .value { color: #555; margin-left: 10px; }
            .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuevo Formulario de Contacto</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nombre:</span>
                <span class="value">${name}</span>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              <div class="field">
                <span class="label">Teléfono:</span>
                <span class="value">${phone || 'No proporcionado'}</span>
              </div>
              <div class="field">
                <span class="label">Empresa:</span>
                <span class="value">${company || 'No proporcionado'}</span>
              </div>
              <div class="field">
                <span class="label">Servicios:</span>
                <span class="value">${services || 'No especificado'}</span>
              </div>
              <div class="field">
                <span class="label">Presupuesto:</span>
                <span class="value">${budget || 'No especificado'}</span>
              </div>
              <div class="field">
                <span class="label">Comentarios:</span>
                <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${comments}</div>
              </div>
            </div>
            <div class="footer">
              <p>Este email fue enviado desde el formulario de contacto de De3.mx</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email de confirmación para el cliente
    const emailToClient = {
      from: fromEmail,
      to: email,
      subject: 'Gracias por contactarnos - De3 Digital Agency',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #00DA6B; color: white; padding: 30px; text-align: center; }
            .content { background-color: #ffffff; padding: 30px; margin-top: 20px; }
            .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #999; padding: 20px; }
            h2 { color: #2B2B2C; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>¡Gracias por contactarnos!</h1>
            </div>
            <div class="content">
              <h2>Hola ${name},</h2>
              <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
              <p>Nuestro equipo revisará tu solicitud y te responderá en breve.</p>
              <p><strong>Resumen de tu solicitud:</strong></p>
              <ul>
                <li><strong>Servicios:</strong> ${services || 'No especificado'}</li>
                <li><strong>Presupuesto:</strong> ${budget || 'No especificado'}</li>
              </ul>
              <p>Si tienes alguna pregunta adicional, no dudes en responder a este email.</p>
              <p>Saludos,<br><strong>Equipo De3</strong></p>
            </div>
            <div class="footer">
              <p>De3 Digital Agency</p>
              <p>contacto@de3.mx</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 3. Enviar emails
    try {
      await Promise.all([
        transporter.sendMail(emailToDe3),
        transporter.sendMail(emailToClient),
      ]);

      return NextResponse.json({
        success: true,
        message: 'Formulario enviado exitosamente',
      });
    } catch (emailError: any) {
      console.error('Error al enviar emails:', emailError);
      return NextResponse.json(
        { 
          error: 'Error al enviar emails', 
          details: emailError.message,
          // Si los emails fallan pero se guardó en Strapi, aún es parcialmente exitoso
          partialSuccess: true 
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error en el formulario de contacto:', error);
    return NextResponse.json(
      { error: 'Error al procesar el formulario', details: error.message },
      { status: 500 }
    );
  }
}
