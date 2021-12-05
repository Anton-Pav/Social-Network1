import {strict} from "assert";

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
    newPostText: string
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
        newPostText: '',
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
let rerenderEntireTree = () => {
    console.log('hello')
}
export let addPost = () => {
    let newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree()

}
export const newPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}

export default state