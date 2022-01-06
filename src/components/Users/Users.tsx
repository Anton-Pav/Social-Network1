import React from 'react';
import styles from './users.module.css';
import {UsersContainerType} from "./UsersContainer";
import {UsersType} from "../../redux/UsersReducer";

const Users = (props: UsersContainerType) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvernissage365.com%2Fru%2Fgrafika%2Frealizm%2Fportret%2Fznamenitosti%2Fid4433&psig=AOvVaw1OiZOU48ZAWkN0M3j50MrT&ust=1641408616686000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJC28t_hmPUCFQAAAAAdAAAAABAP',
                    followed: false,
                    fullName: 'Anton',
                    status: 'Hello!',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.ign.com%2Fstar-wars-tv-series%2F92853%2Fnews%2Fvyshel-shutochnyi-treiler-vtorogo-sezona-seriala-mandalorets&psig=AOvVaw0E_qvKGeCquY_Bt_PTSaAM&ust=1641408099508000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjW9-vfmPUCFQAAAAAdAAAAABAD',
                    followed: true,
                    fullName: 'Andrey',
                    status: 'Hello!',
                    location: {city: 'Kotlas', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.ign.com%2Fstar-wars-tv-series%2F92853%2Fnews%2Fvyshel-shutochnyi-treiler-vtorogo-sezona-seriala-mandalorets&psig=AOvVaw0E_qvKGeCquY_Bt_PTSaAM&ust=1641408099508000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjW9-vfmPUCFQAAAAAdAAAAABAD',
                    followed: true,
                    fullName: 'Ivan',
                    status: 'Hello!',
                    location: {city: 'Saint-Petersburg', country: 'Russia'}
                },

            ]
        )
    }
    return <div>
        {
            props.users.map(u=> <div key={u.id}>
                <span>
                   <div>
                       <img src={u.photoUrl} className={styles.userPhoto}/>
                   </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;