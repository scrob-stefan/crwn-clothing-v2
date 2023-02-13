import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDrowpdown from "../../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart-context";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <div><CrwnLogo /></div>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                {' '}SIGN OUT{' '}</NavLink>
            ) :
              (<NavLink to='/auth'>
                SIGN IN
              </NavLink>)
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDrowpdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation