import product from '../../../../database/model/Products'
import {MONGODB_URI} from '../../../../database/connection'
import mongoose from 'mongoose';
import {NextResponse} from'next/server'

export async function GET() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Fetching products');
        const products = await product.find({});
        console.log(product,'ooooo')
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching products', error }, { status: 500 });
    }
}

// const app = express();


// app.use('/api', router);


