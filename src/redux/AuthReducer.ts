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
                ...action.data,
                isAuth: true,
            }
        default:
                return state
    }

}
export type ActionType = setUserDataType
export type setUserDataType = ReturnType<typeof setUserData >

export const  setUserData = (userId: number, email:string, login:string) => {
    return {
        type: "SET-USER-DATA",
        data: {userId, email, login},
    } as const
}