import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {PostType} from "../../../redux/state";
import Post from "./Post/Post";

export type PropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: (text: string) => void,
    text: string;
}

function MyPosts(props: PropsType) {

    let postsElements = props.posts.map((p) =>
        <Post likesCount={p.likesCount} id={p.id} message={p.message}/>)
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostText(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.text}/>
                </div>
                <div>
                    <button onClick={props.addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;