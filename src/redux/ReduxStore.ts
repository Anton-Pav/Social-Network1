import DialogsReducer, {DialogsActionType} from "./DioalogsReducer";
import ProfileReducer, {ProfileActionType} from "./ProfileReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import UsersReducer from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import  thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {ThunkAction} from "redux-thunk/es/types";

let rootReducers = combineReducers({
    profilePage : ProfileReducer,
    dialogsPage : DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
});

export type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>
export const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export type AppActionsType = DialogsActionType | ProfileActionType
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export default store;
