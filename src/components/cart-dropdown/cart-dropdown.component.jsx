import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import  {CartDropdownContainer, EmptyMessage, CartItems}  from'./cart-dropdown.style'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
const CartDropdown = ()=>{
    const  {cartItems, setCartIsOpen} =  useContext(CartContext)
    const navigate = useNavigate()
    const goToCheckoutHandler = ()=>{
        navigate('/checkout')
        setCartIsOpen(false)
    }
    const content =  cartItems.length ? cartItems.map(item =>{
        return <div key={item.id}>
                <CartItem  CartItem={item}/>
        </div>
    }) : (<EmptyMessage>Your cart is empty ):</EmptyMessage>)
    return(
        <CartDropdownContainer>
            <CartItems >
               { content}
            </CartItems>
            <Button onClick = {goToCheckoutHandler} >CHECKOUT</Button>
        </CartDropdownContainer>
    )
}
export default CartDropdown