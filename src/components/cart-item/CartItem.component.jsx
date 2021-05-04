import './CartItem.style.scss';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    console.log(imageUrl);
    return(
        <div className="cart-item">
            <img scr={imageUrl} alt='item' />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} X &#8377; {price}</span>
            </div>
        </div>
    )
}

export default CartItem;