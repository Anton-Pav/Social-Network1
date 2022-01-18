import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void

}

let Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(m => {
                return <span
                    className={props.currentPage === m ? styles.selectedPage : ''}
                    onClick={(e) => {
                        props.onPageChanged(m)
                    }}>{m}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                   <div>
                       <NavLink to={`/profile/${u.id}`}>
                       <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                       </NavLink>
                       </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;