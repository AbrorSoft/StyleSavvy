import './cart-item.styles.scss'
const CartItem = ({CartItem})=>{
    const {name, imageUrl, quantity, price } = CartItem
    return(
        <div className='cart-item-container'>
            <img className='img' src={imageUrl} alt={name}/>
            <div className='item-details'>
            <span className='name'> {name} </span>
            <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
}
export default CartItem