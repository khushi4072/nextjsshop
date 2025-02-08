import product from '../../../../database/model/Products';
import { connectDB } from '../../../../database/connection';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await connectDB(); // Ensure DB is connected
        console.log('✅ Connected to MongoDB');
        
        const products = await product.find({});
        console.log('✅ Fetched products:', products);
        
        return NextResponse.json(products);
    } catch (error) {
        console.error('❌ Error fetching products:', error);
        return NextResponse.json({ message: 'Error fetching products', error: error.message }, { status: 500 });
    } 
}