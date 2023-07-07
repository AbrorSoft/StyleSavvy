import { Fragment, useContext } from "react"
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"
import { Outlet, Link } from "react-router-dom"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import {ReactComponent as LadyLogo} from '../../assets/Logo.svg'
import { signOutUser } from "../../utils/firebase/firebase.util"
import {NavigationComponent, NavLinks, NavLink, LogoContainer, Logo} from './navigation.styles.jsx'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

const Navigation = ()=>{
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

    return (
      <Fragment>
      <NavigationComponent>
        <LogoContainer  to='/'>
          <Logo/>
             <p> Style Savvy </p>
        </LogoContainer>
        <NavLinks >
        <NavLink to="/shop">SHOP</NavLink>
        {
          currentUser
          ? (<NavLink  as='span' onClick={signOutUser}>
            {' '}
            SIGN OUT {''}
            </NavLink >)
          : (<NavLink to="/auth">SIGN IN</NavLink>)
        }
          <CartIcon/>
        </NavLinks >
        { isCartOpen &&   <CartDropdown/>}
      </NavigationComponent>
        <Outlet/>
      </Fragment>
    )

  }
  export default Navigation