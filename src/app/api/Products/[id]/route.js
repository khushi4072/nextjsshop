import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Product from "../../../../../database/model/Products";
import { MONGODB_URI } from "../../../../../database/connection";

export async function GET(req, { params }) {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    const product = await Product.findById(params.id);
    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Server Error", error: error.message }, { status: 500 });
  }
}
