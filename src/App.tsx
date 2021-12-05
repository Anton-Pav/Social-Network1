import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import state, {AppStateType, newPostText} from "./redux/state";

export type AppType = {
    state: AppStateType
    addPost: () => void
    newPostText: (text: string) => void
    text: string
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs state={state.dialogsPage}/>}/>
                        <Route path={'/profile'} element={<Profile newPostText={props.newPostText}
                                                                   text={props.text}
                                                                   addPost={props.addPost}
                                                                   state={state.profilePage}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs state={state.dialogsPage}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>)
}

export default App;
