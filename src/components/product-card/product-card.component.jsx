import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './product-card.styles.scss'
import Button, {BUTTON_TYPE_CLAESS} from '../button/button.component'
const ProductCatd = ({product})=>{
    const { name, price, imageUrl} = product
    const  {setCartIsOpen, addItemToCart} = useContext(CartContext)
    const  addProductToCart = ()=> {
        addItemToCart(product)
        setCartIsOpen(true)
    }
    return (
        <div className='product-card-container'>
            <img src={`${imageUrl}` } alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLAESS.inverted} onClick={addProductToCart}>Add to card</Button>
        </div>
    )
}
export default ProductCatd