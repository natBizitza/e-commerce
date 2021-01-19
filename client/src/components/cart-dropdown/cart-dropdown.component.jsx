import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { CartDropdownContainer, CartEmptyMessage, CartItemsContainer } from './cart-dropdown.styles.jsx';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length?
                cartItems.map(cartItem =>
                <CartItem key={cartItem.id} item={cartItem}/>):
                <CartEmptyMessage>Your cart is empty</CartEmptyMessage>}
        </CartItemsContainer>
        <CustomButton onClick={()=> {history.push('/checkout');
            dispatch(toggleCartHidden())}}>
            GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
);

const mapStateToProsp = createStructuredSelector({
    //our cart-ddn comp-t won't get rerendered unnecessary
    cartItems: selectCartItems
});

//withRouter passes the match, history and location objs into the comp that being wrapped
export default withRouter(connect(mapStateToProsp)(CartDropdown));
