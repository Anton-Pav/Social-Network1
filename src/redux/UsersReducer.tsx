import React from 'react';
import {NewMessageTextACType, SendMessageACType} from "./DioalogsReducer";

export type locationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    fullName: string
    status: string
    photoUrl: string
    followed: boolean
    location: locationType
}
const initialState = {
    users: [
    ] as Array<UsersType>
}
type InitialStateType = typeof initialState
const UsersReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType => {
    debugger
    switch (action.type) {
        case "FOLLOW":
           return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return  {...state, users: [...state.users, ...action.payload.users]}
        default :
            return state
    }
};

export type ActionType = followACType | unfollowACType | setUsersACType
export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        payload:{
            userId
        }
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId
        }
    } as const
}
export const setUsersAC = (users:Array<UsersType> ) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}
export default UsersReducer;