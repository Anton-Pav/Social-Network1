import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {newPostText, ProfilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

export type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    newPostText: (text: string) => void
    text: string
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost={props.addPost}
                     newPostText={newPostText}
                     text={props.text}
            />
        </div>

    )
}

export default Profile;