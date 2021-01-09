import React, {useEffect, lazy, Suspense} from 'react';
import { GlobalStyle } from './global.styles';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(()=> import('./pages/homepage/homepage.component'));
const ShopPage = lazy(()=> import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(()=> import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(()=> import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession,currentUser }) => {
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

  return (
    <div>
      <GlobalStyle/>
        {/* placing outside of the Switch, cause it will be always rendered besides what component Switch decides 
        to render */}
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signIn' render={()=> currentUser?(<Redirect to='/'/>): (<SignInAndSignUp/>)}/>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
