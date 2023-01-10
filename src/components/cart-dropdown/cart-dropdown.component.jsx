
import Button from '../button/button.component';
import './cart-dropdown.styles.scss'

const CartDrowpdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <Button buttonType='default'>GO TO CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDrowpdown;