import React, {RefObject, useRef} from 'react';
import s from './MyPosts.module.css';
import {PostType} from "../../../redux/state";
import Post from "./Post/Post";

export type PropsType = {
    posts: Array<PostType>
    addPost: (text: string) => void
}
function MyPosts(props: PropsType) {
    let postsElements = props.posts.map((p) => <Post likesCount={p.likesCount} id={p.id} message={p.message} />)
    let newPostElement = useRef<HTMLTextAreaElement>(null);
    let addPost = () => {
        let text = newPostElement.current ? newPostElement.current?.value : ''
        props.addPost(text)
        if (newPostElement.current) {
            newPostElement.current.value = ''
        }
    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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