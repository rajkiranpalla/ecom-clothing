import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export const rootReducer = combineReducers({
     user : userReducer,
     cart: cartReducer,
     directory: directoryReducer,
     shop: shopReducer
});

//configuration for react persist to use localstorgae as temporary database to save store data on reload
// WHITELIST
const persistConfig = {
     key: 'root',
     storage: storage,
     whitelist: ['cart'] // only cart will be persisted
};

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export default rootReducer;