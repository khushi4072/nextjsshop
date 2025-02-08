import Razorpay from "razorpay";
import { connectDB } from '../../../../../database/connection'
import mongoose from 'mongoose';
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    await connectDB(); // Ensure DB is connected
    const { amount } = await req.json();

    if (!amount) {
      return NextResponse.json({ message: "Amount is required" }, {
        status: 400,
      });
    }

    const razorpay = new Razorpay({
      key_id: 'rzp_test_OmCfFJhnp3Fztn',
      key_secret: 'wyTuLIkM1pDzjPnYg9E3NV6E',
    });

    const options = {
      amount: Number(amount * 100), // Convert amount to paisa
      currency: "INR",
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({ success: true, order }, {
      status: 200,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ success: false, error: "Error creating order" }, {
      status: 500,
    });
  }
}
