import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsContainerType} from "./MyPostsContainer";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


export type FormPostsType = {
    newPostText: string
}

function MyPosts(props: MyPostsContainerType) {
    let postsElements = props.profilePage.posts.map((p) =>
        <Post likesCount={p.likesCount} id={p.id} message={p.message}/>)
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
    }
    let onAddPost = (values: FormPostsType) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(10)
const AddNewPostForm: React.FC<InjectedFormProps<FormPostsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea}
                       placeholder={"Post message"}
                       validate={[required, maxLength]}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<FormPostsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;


