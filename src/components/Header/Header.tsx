import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderContainerType} from "./HeaderContainer";


function Header(props: HeaderContainerType) {
    return (
        <header className={s.header}>
            <img
                src='https://avatars.mds.yandex.net/i?id=4c30b231c89a626e85235146a8be8afd-4034238-images-thumbs&ref=rim&n=33&w=145&h=150'/>
                <div className={s.loginBlock}>
                    {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>
    )
}
export default Header;
