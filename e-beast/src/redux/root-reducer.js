import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

//localStorage access
import  storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

const persistConfig = {
    key: 'root',
    storage,
    //the only reducer we want to persist
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
