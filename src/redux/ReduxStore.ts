
import DialogsReducer from "./DioalogsReducer";
import ProfileReducer from "./ProfileReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import UsersReducer from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import  thunkMiddleware from 'redux-thunk';

let rootReducers = combineReducers({
    profilePage : ProfileReducer,
    dialogsPage : DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
});

export type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>
export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;