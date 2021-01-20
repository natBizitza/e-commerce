import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {CartIconContainer, ShoppingIconContainer,ItemCountSpan} from './cart-icon.styles.jsx';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer className='shopping-icon'/>
        <ItemCountSpan className='item-count'>{itemCount}</ItemCountSpan>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//selector
const maspStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
export default connect(maspStateToProps,mapDispatchToProps)(CartIcon);
