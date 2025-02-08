
import crypto from "crypto";
// import nodemailer from "nodemailer";
import { connectDB } from '../../../../../database/connection'
import mongoose from 'mongoose';
import { NextResponse } from 'next/server'

// const client = new MongoClient(process.env.MONGODB_URI);
await connectDB();
// const db = client.db(); // Replace with your DB name if needed

export async function POST(req) {
  try {
    const { payment_id, order_id, signature, } = await req.json();

    if (!payment_id || !order_id || !signature) {
      return NextResponse.json({ message: "Missing required fields" }, {
        status: 400,
      });
    }

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${order_id}|${payment_id}`)
      .digest("hex");

    if (generatedSignature !== signature) {
      return NextResponse.json({ message: "Invalid payment signature" }, {
        status: 400,
      });
    }

    // Save form data to MongoDB
    // await db.collection("submissions").insertOne(formData);

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: formData.email,
    //   subject: "Payment Verified and Form Data Saved",
    //   text: `Hello ${formData.name},\n\nYour payment has been successfully verified and your form data has been saved.\n\nThank you for your submission!\n\nBest regards,\nYour Company Name`,
    // };

    // await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Payment verified, form data saved, and email sent" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error verifying payment:", error);
    NextResponse.json({ message: "Failed to process payment", error: error.message },
      { status: 500 }
    );
  }
}
