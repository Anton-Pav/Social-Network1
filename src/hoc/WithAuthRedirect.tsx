import {Navigate} from "react-router-dom";
import React, {Component} from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../redux/ReduxStore";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return{
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect  <T>(Component:React.ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}