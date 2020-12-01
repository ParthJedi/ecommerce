import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listProdcuts, saveProduct, deleteProduct} from '../actions/productActions';

function CreateProductScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [leftInStock, setLeftInStock] = useState('');
    const [description, setDescription] = useState('');
    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;
    const productSave = useSelector(state => state.productSave);
    const { loading: loadingSave, success: successSave, error: errorSave} = productSave;
    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete} = productDelete;
    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listProdcuts);
        return () => {
            //
        }
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setBrand(product.brand);
        setPrice(product.price);
        setImage(product.image);
        setLeftInStock(product.leftInStock);
        setDescription(product.description);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            _id: id,
            name, price, image, brand, leftInStock, description })
        )
    };

    const deleteHandler = (id) => {
        dispatch(deleteProduct(id));
    };

    return <div className="content content-margined">
                <div className="product-header">
                    <h3>Products</h3>
                    <button className="pd-button checkout-btn primary" onClick={()=>openModal({})}>Create Product</button>
                </div>
                { modalVisible && <div className="form">
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
                                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                            </li>
                            <li>
                                <label htmlFor="name">
                                    Brand
                                </label>
                                <input type="text" name="brand" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}></input>
                            </li>
                            <li>
                                <label htmlFor="price">
                                    Price
                                </label>
                                <input type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                            </li>
                            <li>
                                <label htmlFor="image">
                                    Image
                                </label>
                                <input type="text" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                            </li>                
                            <li>
                                <label htmlFor="stockCount">
                                    Stock Quantity
                                </label>
                                <input type="text" name="stockCount" id="stockCount" value={leftInStock} onChange={(e) => setLeftInStock(e.target.value)}></input>
                            </li>
                            <li>
                                <label htmlFor="description">
                                    Description
                                </label>
                                <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </li>
                            <li>
                                <button className="pd-button full-width primary">{id ? "Update" : "Create" }</button>
                            </li>
                            <li>
                                <button onClick={()=>setModalVisible(false)}className="pd-button full-width secondary">Cancel</button>
                            </li>
                        </ul>
                    </form>
                </div> }                
                <div className="product-list">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { products.map(product => {( <tr>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className="btn-pd" onClick={() => openModal({product})}>Edit</button>
                                        <button className="btn-pd" onClick={() => deleteHandler(product._id)}>Delete</button>
                                    </td>
                                </tr> )})}
                        </tbody>
                    </table>
                </div>
            </div>
}

export default CreateProductScreen;