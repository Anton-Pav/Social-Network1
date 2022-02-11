import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github":  string,
        "mainLink":  string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": undefined| string,
        "large": undefined| string
    }

}
const initialState = {
    profile:{} as ProfileType,
    posts: [
        {id: 1, message: 'Hi! How are you?', likesCount: 2},
        {id: 2, message: 'Hey! It is my first post!', likesCount: 23},
    ] as Array<PostType>,
    newPostText: '' as string,
    status: '' as string

}
type InitialStateType = typeof initialState
const ProfileReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType => {
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
        case "SET-USER-PROFILE": {
            return {
                ...state,profile: action.profile
            }
        }
        case "SET-STATUS":{
            return {
                ...state,status: action.status
            }
        }
        default :
            return state
    }
};

export type ActionType = AddPostACType | NewPostTextACType | SetUserProfileType | setStatusType
export type AddPostACType = ReturnType<typeof addPost>
export type NewPostTextACType = ReturnType<typeof newPostText>
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export type setStatusType = ReturnType<typeof setStatus>

export const addPost = () => {
    return {
        type: "ADD POST"
    } as const
}
export const newPostText = (newText: string) => {
    return {
        type: "NEW POST TEXT",
        newText: newText
    } as const
}
export const setUserProfile = (profile:ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export const setStatus = (status:string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    return usersAPI.getUserProfile(userId).then(data => {
        console.log(data)
        dispatch(setUserProfile(data))
    })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    return profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    return profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0){
            dispatch(setStatus(status))
        }
    })
}


export default ProfileReducer;