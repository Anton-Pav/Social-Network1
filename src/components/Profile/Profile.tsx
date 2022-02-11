import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/ProfileReducer";

export type ProfilePropsType = {
    profile: ProfileType,
    status:string,
    updateStatus: (status: string) => void
}

function Profile (props: ProfilePropsType) {
    return (
        <div className={'content'}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;