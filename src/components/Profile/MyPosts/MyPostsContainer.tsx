import React from 'react';
import {addPost, newPostText, PostType} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/ReduxStore";
import {Dispatch} from "redux";


type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type MapStateToPropsType = {
    profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type MyPostsContainerType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string)  => {
            dispatch(newPostText(text))
        },
        addPost: () => {
            dispatch(addPost())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)

export default MyPostsContainer;