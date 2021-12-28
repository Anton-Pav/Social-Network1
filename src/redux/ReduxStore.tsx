
import DialogsReducer from "./DioalogsReducer";
import ProfileReducer from "./ProfileReducer";
import {combineReducers, createStore} from "redux";

let rootReducers = combineReducers({
    profilePage : ProfileReducer,
    dialogsPage : DialogsReducer
});

export type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>
export const store = createStore(rootReducers);

export default store;