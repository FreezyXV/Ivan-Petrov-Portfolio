// src/app/api/sendMail/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // DEBUG: Log env values
    console.log('MAIL_HOST =>', process.env.MAIL_HOST);
    console.log('MAIL_USER =>', process.env.MAIL_USER);
    console.log('MAIL_PASS =>', process.env.MAIL_PASS);

    // Parse the request body
    const body = await request.json();
    const { userName, userEmail, userOrg, userServices, userMessage } = body;

    // Quick validation
    if (!userName || !userEmail || !userMessage) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1) Create Nodemailer transporter (store in a variable!)
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,  // must be spelled exactly the same
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // 2) Setup mail data
    const mailOptions = {
      from: `"My Portfolio" <${process.env.MAIL_USER}>`,
      to: 'yohanpetrov@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${userName}
        Email: ${userEmail}
        Organization: ${userOrg || 'N/A'}
        Services: ${userServices || 'N/A'}
        Message:
        ${userMessage}
      `,
      // Or use HTML if you want
      // html: `<p><strong>Name:</strong> ${userName}</p> ...`,
    };

    // 3) Send the email with the transporter
    await transporter.sendMail(mailOptions);

    // Return success
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (err) {
    console.error('SendMail error:', err);
    return NextResponse.json({ error: 'Error sending email', details: err.message }, { status: 500 });
  }
}
