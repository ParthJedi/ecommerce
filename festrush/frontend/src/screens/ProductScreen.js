import React from 'react';
import data from '../data';
import { Link } from "react-router-dom";

function ProductScreen(props) {    
    const product = data.products.find(item => String(item._id) === props.match.params.id);
    return <div>
                <div className="go-back-link">
                    <Link to="/">&lt;&lt; Go Back</Link>
                </div>
                <div className="product-details">                        
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
                                Status: {product.status}
                            </li>
                            <li>
                                Quantity: 
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                            </li>
                            <li><button className="pd-button primary">Add to Cart</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        
}
export default ProductScreen;