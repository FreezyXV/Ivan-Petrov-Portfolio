// src/app/api/sendMail/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { userName, userEmail, userOrg, userServices, userMessage } = body;

    if (!userName || !userEmail || !userMessage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const recipient = process.env.MAIL_TO || process.env.MAIL_USER;
    const senderName = process.env.MAIL_FROM_NAME || "My Portfolio";

    const mailOptions = {
      from: `"${senderName}" <${process.env.MAIL_USER}>`,
      to: recipient,
      subject: "New Contact Form Submission",
      text: `
        Name: ${userName}
        Email: ${userEmail}
        Organization: ${userOrg || 'N/A'}
        Services: ${userServices || 'N/A'}
        Message:
        ${userMessage}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("SendMail error:", err);
    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    );
  }
}
