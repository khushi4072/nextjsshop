import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

const razorpay = new Razorpay({
  key_id: 'zp_test_OmCfFJhnp3Fztn', // Store Razorpay key ID in environment variable
  key_secret: 'wyTuLIkM1pDzjPnYg9E3NV6E', // Store Razorpay key secret in environment variable
});

export async function POST(req) {
  try {
    const { amount } = await req.json(); // Receive the amount (in paise, 100 = 1 INR)
    
    // Create Razorpay order
    const options = {
      amount: 900 * 100, // Convert to paise
      currency: 'INR',
      receipt: 'order_receipt_' + new Date().getTime(),
      payment_capture: 1, // Automatically capture the payment after authorization
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      return NextResponse.json({ message: 'Error creating order' }, { status: 500 });
    }

    return NextResponse.json({ orderId: order.id }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: 'Error creating Razorpay order', error: error.message }, { status: 500 });
  }
}
