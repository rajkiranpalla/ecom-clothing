import { createStore,applyMiddleware } from "redux";
import {rootReducer,persistedReducer} from './root-reducer';
import logger from "redux-logger";
import { persistStore } from 'redux-persist'

const middleWares = [logger];

// create a redux store using the root reducer which gives out the final state
export const store = createStore(persistedReducer,applyMiddleware(...middleWares));
export const persistor = persistStore(store);
export default store;