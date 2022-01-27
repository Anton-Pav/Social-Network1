import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {setUserData} from "../../redux/AuthReducer";


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
export type HeaderContainerType = MapStateToPropsType & MapDispatchPropsType
export type MapStateToPropsType = {
    login: string | null,
    isAuth: boolean
}
export type MapDispatchPropsType = {
    setUserData: (userId: number, email: string, login: string)=> void
}
const mapStateToProps = (state:AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }

}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);
