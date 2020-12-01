import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {saveProduct} from '../actions/productActions';

function CreateProductScreen(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [rating, setRating] = useState('');
    const [reviewsCount, setReviewsCount] = useState('');
    const [leftInStock, setLeftInStock] = useState('');
    const [description, setDescription] = useState('');

    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        }
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct(name, price, image, brand, rating, reviewsCount, leftInStock, description))
    };

    return <div className="form">
        <form onSubmit={onSubmitHandler}>            
            <ul className="form-container">
                <li>
                    <h2>Create Product</h2>
                </li>
                <li>
                    {loadingSave && <div>Loading..</div>}
                    {errorSave && <div>{errorSave.message}</div>}
                </li>
                <li>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="name">
                        Brand
                    </label>
                    <input type="text" name="brand" id="brand" onChange={(e) => setBrand(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="price">
                        Price
                    </label>
                    <input type="text" name="price" id="price" onChange={(e) => setPrice(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="image">
                        Image
                    </label>
                    <input type="text" name="image" id="image" onChange={(e) => setImage(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="rating">
                        Rating
                    </label>
                    <input type="text" name="rating" id="rating" onChange={(e) => setRating(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="review">
                        Review
                    </label>
                    <input type="text" name="review" id="review" onChange={(e) => setReviewsCount(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="stockCount">
                        Stock Quantity
                    </label>
                    <input type="text" name="stockCount" id="stockCount" onChange={(e) => setLeftInStock(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="description">
                        Description
                    </label>
                    <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)}></textarea>
                </li>
                <li>
                    <button className="pd-button full-width primary">Create</button>
                </li>
            </ul>
        </form>
    </div>
        
}

export default CreateProductScreen;