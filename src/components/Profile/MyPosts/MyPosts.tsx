import React from 'react';
import s from './MyPosts.module.css';
import {PostType} from "../../../redux/state";
import Post from "./Post/Post";

type PropsType = {
    posts: Array<PostType>
}
function MyPosts(props: PropsType) {
    let postsElements = props.posts.map((p) => <Post likesCount={p.likesCount} id={p.id} message={p.message} />)
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;