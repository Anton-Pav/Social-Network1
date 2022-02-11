import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/ReduxStore";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

export const renderThree = () => {ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
}

renderThree();
store.subscribe(renderThree);
//@ts-ignore
window.store = store
reportWebVitals();