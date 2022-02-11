import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/ProfileReducer";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo = (props:PropsType) => {
    if (!props.profile.photos){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                Name: {props.profile.fullName}
            </div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src={'http://cdn.simplesite.com/i/5a/74/285697109462381658/i285697114384413204._szw1280h1280_.jpg'}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updatesStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo