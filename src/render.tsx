import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, AppStateType, newPostText} from "./redux/state";


export let rerenderEntireTree = (props: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} newPostText={newPostText} text={props.profilePage.newPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
