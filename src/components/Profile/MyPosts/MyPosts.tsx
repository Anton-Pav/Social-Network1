import React, {RefObject, useRef} from 'react';
import s from './MyPosts.module.css';
import {newPostText, PostType} from "../../../redux/state";
import Post from "./Post/Post";

export type PropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: (text: string) => void,
    text: string;
}

function MyPosts(props: PropsType) {

    let postsElements = props.posts.map((p) => <Post likesCount={p.likesCount} id={p.id} message={p.message}/>)
    let newPostElement = useRef<HTMLTextAreaElement>(null);

    let onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current?.value : ''
        props.newPostText(text)
    }


    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}
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