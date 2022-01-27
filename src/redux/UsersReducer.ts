import React from 'react';
import {NewMessageTextACType, SendMessageACType} from "./DioalogsReducer";

export type locationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    name: string
    status: string
    photos: {
        small: null,
        large: null
    }
    followed: boolean
    location: locationType
}
const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
export type InitialStatePropsType = {
    users: Array<UsersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}
export type ActionType = followACType |
    unfollowACType |
    setUsersACType |
    setCurrentPagesACType |
    setTotalUsersCountACType |
    toggleIsFetchingACType |
    setIsFollowingProgressACType
export type followACType = ReturnType<typeof follow>
export type unfollowACType = ReturnType<typeof unfollow>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPagesACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof setIsFetching>
export type setIsFollowingProgressACType = ReturnType<typeof toggleIsFollowingProgress>

const UsersReducer = (state: InitialStatePropsType = initialState, action: ActionType): InitialStatePropsType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.payload.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET-USERS":
            return {...state, users: action.payload.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.count}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "TOGGLE-IS-FOLLOWING":
            return {...state,followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress,action.payload.id]
                    : state.followingInProgress.filter(id=> id !== action.payload.id)}
        default :
            return state
    }
};

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        payload: {
            userId
        }
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId
        }
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {
            currentPage
        }
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: {

            count: totalUsersCount
        }
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {
            isFetching
        }
    } as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, id:number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING",
        payload: {
            isFetching,
            id
        }
    } as const
}
export default UsersReducer;