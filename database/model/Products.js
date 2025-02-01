import mongoose from 'mongoose';

const products = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
    },
    category: {
        type: String,
    },
    stock: {
        type: Number,  // Corrected to use only one `type`
        default: 0
    },
    image: {
        type: String,
    }
});

const product = mongoose.models.products|| mongoose.model("products", products);

export default product;
