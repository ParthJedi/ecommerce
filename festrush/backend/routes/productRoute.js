import express from "express";
import Product from "../models/productModel";

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

productRouter.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        brand: req.body.brand,
        image: req.body.image,
        price: req.body.brand,
        rating: req.body.rating,
        reviewsCount: req.body.reviewsCount,
        leftInStock: req.body.leftInStock,
        description: req.body.description
    });
    
    const newProduct = await product.save();

    if(newProduct){
        return res.status(201).send({ message: "New Product Added.", data: newProduct });
    }
    return res.status(500).send({message: "Error in Creating Product."})
});

export default productRouter;