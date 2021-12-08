import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {ActionsType, PostType} from "../../../redux/state";
import Post from "./Post/Post";

export type PropsType = {
    posts: Array<PostType>
    text: string
    dispatch: (action: ActionsType) => void
}

function MyPosts(props: PropsType) {
    let postsElements = props.posts.map((p) =>
        <Post likesCount={p.likesCount} id={p.id} message={p.message}/>)
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch({type:"NEW POST TEXT", newText: text})
    }
    let addPost = () => {
        props.dispatch({type: "ADD POST"})
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
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;