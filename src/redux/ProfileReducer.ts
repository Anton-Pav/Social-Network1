
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    "aboutMe": null| string,
    "contacts": {
        "facebook": null| string,
        "website": null| string,
        "vk": null| string,
        "twitter": null| string,
        "instagram": null| string,
        "youtube": null| string,
        "github": null| string,
        "mainLink": null| string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": null| string,
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
    newPostText: '',

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
        default :
            return state
    }
};

export type ActionType = AddPostACType | NewPostTextACType | SetUserProfileType
export type AddPostACType = ReturnType<typeof addPost>
export type NewPostTextACType = ReturnType<typeof newPostText>
export type SetUserProfileType = ReturnType<typeof setUserProfile>

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
export default ProfileReducer;