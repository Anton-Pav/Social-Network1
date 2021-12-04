import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

export type ProfilePropsType = {
    state: ProfilePageType
    addPost: (text: string) => void
}
function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>

    )
}

export default Profile;