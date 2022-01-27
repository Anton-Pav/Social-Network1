import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {ProfileType, setUserProfile} from "../../redux/ProfileReducer";
import {Dispatch} from "redux";
import ProfileComponent from "./ProfileComponent";

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
}

export type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }

}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setProfile: (profile: ProfileType) => {
            dispatch(setUserProfile(profile))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

export default ProfileContainer;
