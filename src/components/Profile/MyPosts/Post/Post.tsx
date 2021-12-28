import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/Store";

function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img src={'https://klopik.com/uploads/posts/2019-11/1573389893_i-21.jpg'}/>
            {props.message}
            <div>
                <span> Likes {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;