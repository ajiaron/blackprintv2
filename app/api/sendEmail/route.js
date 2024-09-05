// app/api/sendEmail/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { fullName, email, budget } = await request.json();

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  // Set email options
  let mailOptions = {
    from: `"Blackprint" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
    to: 'aaronjiang2001@gmail.com',
    subject: 'Form Submission',
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Budget: ${budget}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
