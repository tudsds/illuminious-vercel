import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import client from "@/lib/db";
import { getResend } from "@/lib/resend";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, company, phone, message, source } = result.data;

    // Save to database
    await client.execute({
      sql: `INSERT INTO contact_submissions (name, email, company, phone, message, source, status, createdAt, updatedAt) 
            VALUES (?, ?, ?, ?, ?, ?, 'new', datetime('now'), datetime('now'))`,
      args: [name, email, company || null, phone || null, message, source || null],
    });

    // Send email notification
    await getResend().emails.send({
      from: process.env.RESEND_FROM_EMAIL || "info@illuminious.com",
      to: "info@illuminious.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Source:</strong> ${source || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
