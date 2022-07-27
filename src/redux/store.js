import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/lib/persistStore";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persist = persistStore(store);