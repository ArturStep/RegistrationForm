import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk';

import userInfo from "./reducer/userInfoReducer";

const reducers = combineReducers({
  userInfo
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare))
