import {rerenderEntireTree} from "../render";

export type MessagesType = {
    id: number
    message: string

}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>

}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: AppStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', likesCount: 2},
            {id: 2, message: 'Hey! It is my first post!', likesCount: 23}
        ],

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello my friend!'},
            {id: 2, message: 'Hey! How are you?'},
            {id: 3, message: 'Hey! How are you?'},
            {id: 4, message: 'Call me please'},
            {id: 5, message: 'OMG'},
        ],
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Ivan'},
            {id: 5, name: 'Vladimir'},
        ],
    },


}
export let addPost = (newMessage: string) => {
    let newPost = {
        id: 5,
        message: newMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)

}

export default state