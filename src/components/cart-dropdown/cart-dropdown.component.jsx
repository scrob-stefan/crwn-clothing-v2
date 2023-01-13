
import Button from '../button/button.component';
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';

const CartDrowpdown = () => {
const {cartItems} = useContext(CartContext);
const navigate = useNavigate();

const goToCheckoutHandler = () => {
  navigate('/checkout');
}

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>
      <Button buttonType='invert' onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDrowpdown;