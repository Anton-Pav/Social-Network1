import React from 'react';
import {AddPostACType, NewPostTextACType} from "./ProfileReducer";

export type MessagesType = {
    id: number
    message: string

}
export type DialogsType = {
    id: number
    name: string
}
const initialState = {
    messages: [
        {id: 1, message: 'Hello my friend!'},
        {id: 2, message: 'Hey! How are you?'},
        {id: 3, message: 'Hey! How are you?'},
        {id: 4, message: 'Call me please'},
        {id: 5, message: 'OMG'},
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Vladimir'},
    ] as Array<DialogsType>,
    newMessageText: '' as string
}
type InitialStateType = typeof initialState


const DialogsReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType => {
    switch (action.type) {
        case "NEW MESSAGE BODY":
            return {
                ...state,
                newMessageText: action.body
            };
        case "SEND MESSAGE":
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText:'',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
};

export type ActionType = AddPostACType | NewPostTextACType | SendMessageACType | NewMessageTextACType
export type SendMessageACType = ReturnType<typeof sendMessageAC>
export type NewMessageTextACType = ReturnType<typeof newMessageTextAC>

export const sendMessageAC = () => {
    return {
        type: "SEND MESSAGE"
    } as const

}
export const newMessageTextAC = (body: string) => {
    return {
        type: "NEW MESSAGE BODY",
        body: body
    } as const
}
export default DialogsReducer;