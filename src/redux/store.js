import { createStore,applyMiddleware } from "redux";
import rootReducer from './root-reducer';
import logger from "redux-logger";

const middleWares = [logger];

// create a redux store using the root reducer which gives out the final state
const store = createStore(rootReducer,applyMiddleware(...middleWares));

export default store;