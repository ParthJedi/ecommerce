import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRouter from './routes/userRoute';
import productRouter from './routes/productRoute';
import bodyParser from 'body-parser';
dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("MogoDB connected")).catch(error => console.log(error));

const app = express();
app.use(bodyParser.json());

// routes to handle
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});