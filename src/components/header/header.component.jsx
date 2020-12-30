import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo-container'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            { currentUser?(<OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>)
                :(<OptionLink to='/signin'>SIGN IN</OptionLink>)
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden? null:
            <CartDropdown/>
        }
    </HeaderContainer>
);

/* const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
}); 
HOWEVER... IF WE HAVE MANY OF THEM, WE ACTUALLY REPEAT THE SAME CODE. TO AVOID IT WE USE createStructuredSelector FROM RESELECT.
*/

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
}); 

export default connect(mapStateToProps)(Header);