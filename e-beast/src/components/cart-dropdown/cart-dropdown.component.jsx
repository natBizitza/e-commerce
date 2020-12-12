import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';



const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length?
                cartItems.map(cartItem =>
                <CartItem key={cartItem.id} item={cartItem}/>):
                <span className='empty-message'>Your cart is empty</span>}
        </div>
        <CustomButton onClick={()=> {history.push('/checkout');
            dispatch(toggleCartHidden())}}>
            GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProsp = createStructuredSelector({
    //our cart-ddn comp-t won't get rerendered unnecessary
    cartItems: selectCartItems
});

//withRouter passes the match, history and location objs into the comp that being wrapped
export default withRouter(connect(mapStateToProsp)(CartDropdown));
