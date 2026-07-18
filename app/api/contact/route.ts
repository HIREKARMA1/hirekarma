import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  service?: string;
};

/** Human-readable labels for the service source tag (keep in sync with the form). */
const SERVICE_LABELS: Record<string, string> = {
  recruitment: "Recruitment (DISHA + SOLVIQ)",
  "skill-development": "Skill Development (CSR)",
  ppt: "Pre-Placement Training",
  "it-consulting": "IT Consulting",
  "open-source-dpi": "Open Source & DPI",
  "staff-augmentation": "Staff Augmentation",
  "services-overview": "Services (general enquiry)",
};

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_TO_EMAIL',
] as const;

function missingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const message = body.message?.trim();
    const service = body.service?.trim();
    const serviceLabel = service
      ? SERVICE_LABELS[service] ?? service
      : "";

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, mobile number, and message are required.' },
        { status: 400 }
      );
    }

    const missing = missingEnvVars();
    if (missing.length > 0) {
      console.error('Missing SMTP env vars:', missing.join(', '));
      return NextResponse.json(
        { error: 'Mail service is not configured.' },
        { status: 500 }
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');
    const safeService = serviceLabel ? escapeHtml(serviceLabel) : '';
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: serviceLabel
        ? `New ${serviceLabel} enquiry from ${name}`
        : `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}${
        serviceLabel ? `\nInterested in: ${serviceLabel} (service=${service})` : ''
      }\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Message</h2>
        ${
          safeService
            ? `<p><strong>Interested in:</strong> ${safeService} <code>(service=${escapeHtml(
                service ?? ''
              )})</code></p>`
            : ''
        }
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Mobile:</strong> ${safePhone}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact mail error:', error);
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
