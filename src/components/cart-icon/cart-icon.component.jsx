
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {ShoppingIcon, CartIconContainer, ItemCount}  from './cart-icon.styles.jsx'
const CartIcon = ()=>{
    const {setCartIsOpen , isCartOpen,cartCount} = useContext(CartContext)
    const toggleIsCartopen = ()=> setCartIsOpen(!isCartOpen)
    return(
        <CartIconContainer onClick={toggleIsCartopen } >
            <ShoppingIcon/>
            <ItemCount >{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon