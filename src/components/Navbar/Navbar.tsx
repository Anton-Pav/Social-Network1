import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";

function NavBar() {

    let userId = useSelector<AppStateType, number | null>(state => state.auth.userId)
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={ (nData)=>nData.isActive? s.active: ''} to={`profile/${userId}`}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={ (nData)=>nData.isActive? s.active: ''} to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={ (nData)=>nData.isActive? s.active: ''} to={"/news"}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={ (nData)=>nData.isActive? s.active: ''} to={"/users"}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={ (nData)=>nData.isActive? s.active: ''} to={"/music"}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={ (nData)=>nData.isActive? s.active: ''} to={"/settings"}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;