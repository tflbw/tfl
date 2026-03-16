import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    if (name.length > 100) {
    return NextResponse.json({ error: 'Name is too long.' }, { status: 400 });
    }

    if (message.length > 2000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
    }

  const { error } = await resend.emails.send({
    from: 'TFL Contact Form <onboarding@resend.dev>',
    to: 'info@tfl.co.bw',
    replyTo: email,
    subject: `New enquiry from ${name} — ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}