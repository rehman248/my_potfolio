import { NextRequest, NextResponse } from "next/server";
import { saveMessage, getMessages } from "@/lib/db";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format in request body." },
        { status: 400 }
      );
    }

    const { name, email, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please enter a message (at least 5 characters)." },
        { status: 400 }
      );
    }

    // Capture IP
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "localhost";

    // 1. Save to local Database (Always saved for /inbox)
    const savedMessage = await saveMessage({
      name,
      email,
      message,
      ip,
    });

    // 2. Dispatch Email directly to Abdul Rehman (tomato040499@gmail.com)
    let emailSent = false;
    const recipientEmail = process.env.RECIPIENT_EMAIL || "tomato040499@gmail.com";
    const smtpHost = process.env.SMTP_HOST;
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    // A) If SMTP credentials (e.g. Gmail App Password) are set in .env.local, send via Nodemailer
    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost || "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${emailUser}>`,
          to: recipientEmail,
          replyTo: email.trim(),
          subject: `⚡ New Message from ${name.trim()} via Portfolio`,
          text: `Name: ${name}\nEmail: ${email}\nDate: ${new Date().toLocaleString()}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #080808; color: #ffffff;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #121212; border: 1px solid #333333; border-radius: 12px; padding: 25px;">
                <h2 style="color: #FACC15; margin-top: 0;">New Inquiry from ${name}</h2>
                <p style="color: #A1A1AA; font-size: 14px;">Received on: ${new Date().toLocaleString()}</p>
                <hr style="border: 0; border-top: 1px solid #27272A; margin: 20px 0;" />
                <p><strong>Sender:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #FACC15;">${email}</a></p>
                <div style="margin-top: 20px; padding: 15px; background-color: #1a1a1a; border-radius: 8px; border-left: 3px solid #FACC15;">
                  <p style="white-space: pre-wrap; margin: 0; color: #E4E4E7;">${message}</p>
                </div>
              </div>
            </div>
          `,
        });
        emailSent = true;
      } catch (err) {
        console.warn("SMTP email failed, attempting FormSubmit forwarding:", err);
      }
    }

    // B) Forward to tomato040499@gmail.com via FormSubmit service
    if (!emailSent) {
      try {
        const origin = req.headers.get("origin") || req.headers.get("referer") || "http://localhost:3000";
        const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Referer": origin,
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            _subject: `New Portfolio Message from ${name.trim()}`,
            _template: "table",
          }),
        });
        const formSubmitData = await formSubmitRes.json();
        if (formSubmitData.success === "true" || formSubmitData.success === true) {
          emailSent = true;
        }
      } catch (fErr) {
        console.warn("FormSubmit forward notification:", fErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent to your email and saved in your inbox!",
        data: {
          id: savedMessage.id,
          createdAt: savedMessage.createdAt,
          emailSent,
          recipient: recipientEmail,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await getMessages();
    return NextResponse.json({
      success: true,
      count: messages.length,
      messages,
    });
  } catch (error) {
    console.error("Error reading messages:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
