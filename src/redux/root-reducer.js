import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';

const persistConfig = {
    key: 'rental-management',
    storage,
    whiteList: ['user']
}

const rootReducer = combineReducers({
    user: UserReducer,
})
export default persistReducer(persistConfig, rootReducer);