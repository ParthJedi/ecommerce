import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true

    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0    
    },
    rating: {
        type: String,        
        default: 0
    },
    reviewsCount: {
        type: Number,
        default: 0
    },
    leftInStock: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    }
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;