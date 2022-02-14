import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunkType} from "./ReduxStore";

export type InitialStatePropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: InitialStatePropsType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const AuthReducer = (state:InitialStatePropsType = initialState, action:ActionType):InitialStatePropsType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data
            }
        default:
                return state
    }

}
export type ActionType = setUserDataType
export type setUserDataType = ReturnType<typeof setUserData >

export const  setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        data: {userId, email, login, isAuth},
    } as const
}
export const  getAuthUserData = () => (dispatch: Dispatch) => {
    return  authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true))
            }
        })
}
export const  login = (email: string, password: string, rememberMe: boolean): AppThunkType => (dispatch) => {
    return  authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}
export const  logout = (): AppThunkType => (dispatch:any) => {
    return  authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null,null, false))
            }
        })
}

