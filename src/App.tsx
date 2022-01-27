import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                    <Route path={'/profile/:id'} element={<ProfileContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                    <Route path={'/'} element={<ProfileContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
