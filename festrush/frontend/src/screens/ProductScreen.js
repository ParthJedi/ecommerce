import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { detailsOfProduct } from '../actions/productActions';

function ProductScreen(props) {   

    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(detailsOfProduct(props.match.params.id));
        return () => {
            //
        }
    }, [])

    const eventHendlerForAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
    }

    return <div>
                <div className="go-back-link">
                    <Link to="/">&lt;&lt; Go Back</Link>
                </div>
                {
                    loading ? <div>In progress...</div> :
                    error ? <div>{error}</div> :
                    (<div className="product-details">
                    <div className="pd-image">
                        <Link to={'/product/' + product._id}>
                            <img src={product.image} alt="product" />
                        </Link>
                    </div>      
                    <div className="pd-info">
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            <li>
                                {product.rating} Stars (from {product.reviewsCount} reviews)
                            </li>
                            <li>
                                Price: <b>${product.price}</b>
                            </li>
                            <li>
                                Description:
                                <div>
                                    Brand: {product.brand} <br />
                                    Details: {product.description}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="pd-action">
                        <ul>
                            <li>
                                Price: {product.price}
                            </li>
                            <li>
                                Status: {product.leftInStock > 0 ? "In stock" : "Out of stock"}
                            </li>
                            <li>                                
                                Quantity: {product.leftInStock > 0 ? 
                                <select value={qty} onChange={(e) => setQty(e.target.value) }>
                                    {
                                    [...Array(product.leftInStock).keys()].map(i => 
                                        <option key={i+1} value={i+1}>{i+1}</option>)
                                    }
                                </select>
                                : "Unavailable"}                             
                            </li>
                            <li>
                                { product.leftInStock>0 && <button onClick={eventHendlerForAddToCart} className="pd-button primary">Add to Cart</button> }                                
                            </li>
                        </ul>
                    </div>
                </div>)
                }                
            </div>
        
}
export default ProductScreen;