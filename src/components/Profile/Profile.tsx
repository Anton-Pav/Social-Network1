import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";

export type ProfilePropsType = {
    profilePage: ProfilePageType
    text: string
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     text={props.text}

            />
        </div>

    )
}

export default Profile;