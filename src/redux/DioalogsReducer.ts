import React from 'react';
import {AddPostACType} from "./ProfileReducer";

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

}
type InitialStateType = typeof initialState


const DialogsReducer = (state: InitialStateType = initialState, action: DialogsActionType) : InitialStateType => {
    switch (action.type) {
        case "SEND MESSAGE":
            let body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
};

export type DialogsActionType = AddPostACType  | SendMessageACType
export type SendMessageACType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (newMessageText: string) => {
    return {
        type: "SEND MESSAGE",
        newMessageText
    } as const

}

export default DialogsReducer;