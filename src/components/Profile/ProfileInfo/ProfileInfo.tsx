import React from 'react';
import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={'http://cdn.simplesite.com/i/5a/74/285697109462381658/i285697114384413204._szw1280h1280_.jpg'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo