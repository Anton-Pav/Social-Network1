import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {MapStateToPropsType} from "./ProfileContainer";

function Profile (props: MapStateToPropsType) {
    return (
        <div className={'content'}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;