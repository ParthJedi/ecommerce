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

productRouter.put('/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if(product) {
        {
            product.name = req.body.name;
            product.brand = req.body.brand;
            product.image = req.body.image;
            product.price = req.body.brand;
            product.rating = req.body.rating;
            product.reviewsCount = req.body.reviewsCount;
            product.leftInStock = req.body.leftInStock;
            product.description = req.body.descriptio;
            
            const updatedProduct = await product.save();
            if(updatedProduct){
                return res.status(200).send({ message: "Product Updated.", data: updatedProduct });
            }
            return res.status(500).send({message: "Error in Updating Product."})
        }
    } 
});

productRouter.delete('/:id', async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
        await deletedProduct.remove();
        res.send({message: "Product Deleted."})
    } else {
        res.send("Error in Deletion.");
    }    
});

export default productRouter;