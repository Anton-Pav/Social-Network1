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
import store, {ActionsType, StoreType} from "./redux/state";

export type AppType = {
    store: StoreType,
    dispatch: (action: ActionsType) => void
}

function App(props: AppType) {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs'} element={<Dialogs state={state.dialogsPage}/>}/>
                        <Route path={'/profile'} element={<Profile dispatch={props.store.dispatch.bind(store)}
                                                                   text={state.profilePage.newPostText}
                                                                   profilePage={state.profilePage}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs state={props.store._state.dialogsPage}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>)
}

export default App;
