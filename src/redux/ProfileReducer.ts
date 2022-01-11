import React from 'react';
import {NewMessageTextACType, SendMessageACType} from "./DioalogsReducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
const initialState = {
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 2},
        {id: 2, message: 'Hey! It is my first post!', likesCount: 23},
    ] as Array<PostType>,
    newPostText: ''
}
type InitialStateType = typeof initialState
const ProfileReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType => {
    debugger
    switch (action.type) {
        case "ADD POST": {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return  {
                ...state,
                posts: [...state.posts,newPost],
                newPostText: ''
            }
        }
        case "NEW POST TEXT": {
            return {
                ...state,
                newPostText:action.newText
            }
        }
        default :
            return state
    }
};

export type ActionType = AddPostACType | NewPostTextACType | SendMessageACType | NewMessageTextACType
export type AddPostACType = ReturnType<typeof addPostAC>
export type NewPostTextACType = ReturnType<typeof newPostTextAC>

export const addPostAC = () => {
    return {
        type: "ADD POST"
    } as const
}
export const newPostTextAC = (newText: string) => {
    return {
        type: "NEW POST TEXT",
        newText: newText
    } as const
}
export default ProfileReducer;