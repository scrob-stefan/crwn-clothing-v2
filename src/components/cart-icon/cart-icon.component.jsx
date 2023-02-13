import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';

import {CartIconContainer, ShoppingIcon, CartCount} from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick= {toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <CartCount>{cartCount}</CartCount>
        </CartIconContainer>
    )
}

export default CartIcon;