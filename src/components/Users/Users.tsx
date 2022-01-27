import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/UsersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, id: number) => void
    followingInProgress: Array<number>
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
                            ? <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '02966c83-5746-408b-bcc9-587459491eff'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false,u.id)
                                    })

                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id=>id==u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '02966c83-5746-408b-bcc9-587459491eff'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false,u.id)
                                    })
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