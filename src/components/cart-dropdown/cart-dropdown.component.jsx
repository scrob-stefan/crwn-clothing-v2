
import Button, {BUTTON_TYPES_CLASSES} from '../button/button.component';
import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'
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
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)): (<EmptyMessage>Your card is empty</EmptyMessage>)
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDrowpdown;