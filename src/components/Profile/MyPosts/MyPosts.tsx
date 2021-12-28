import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsContainerType} from "./MyPostsContainer";


function MyPosts(props: MyPostsContainerType) {
    let postsElements = props.profilePage.posts.map((p) =>
        <Post likesCount={p.likesCount} id={p.id} message={p.message}/>)
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text);
    }
    let onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;