import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDrowpdown from "../../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart-context";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import './navigation.styles.scss'
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <div><CrwnLogo /></div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                {' '}SIGN OUT{' '}</span>
            ) :
              (<Link className="nav-link" to='/auth'>
                SIGN IN
              </Link>)
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDrowpdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation