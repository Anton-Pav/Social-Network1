import ProfileReducer, {AddPostACType} from "./ProfileReducer";
import DialogsReducer, { SendMessageACType} from "./DioalogsReducer";

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
    newMessageText: string

}
export type AppStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: AppStateType,
    _rerenderEntireTree: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => AppStateType,
    newPostText: (newText: string) => void,
    addPost: () => void,
    dispatch: (action: ActionType) => void,
}

export type ActionType = AddPostACType | SendMessageACType
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: '',
//             posts: [
//                 {id: 1, message: 'Hi! How are you?', likesCount: 2},
//                 {id: 2, message: 'Hey! It is my first post!', likesCount: 23}
//             ],
//
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hello my friend!'},
//                 {id: 2, message: 'Hey! How are you?'},
//                 {id: 3, message: 'Hey! How are you?'},
//                 {id: 4, message: 'Call me please'},
//                 {id: 5, message: 'OMG'},
//             ],
//             dialogs: [
//                 {id: 1, name: 'Andrey'},
//                 {id: 2, name: 'Anton'},
//                 {id: 3, name: 'Alex'},
//                 {id: 4, name: 'Ivan'},
//                 {id: 5, name: 'Vladimir'},
//             ],
//             newMessageText: ''
//         },
//
//
//     },
//     _rerenderEntireTree() {
//         console.log('state changed')
//     },
//     newPostText(newText: string) {
//         this._state.profilePage.newPostText = newText;
//         this._rerenderEntireTree()
//     },
//     addPost() {
//         const newPost: PostType = {
//             id: 5,
//             message: this._state.profilePage.newPostText,
//             likesCount: 0
//         }
//         this._state.profilePage.posts.push(newPost);
//         this._state.profilePage.newPostText = '';
//         this._rerenderEntireTree();
//     },
//     subscribe(observer) {
//         this._rerenderEntireTree = observer;
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = ProfileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
//         this._rerenderEntireTree()
//     }
// }
// export default store