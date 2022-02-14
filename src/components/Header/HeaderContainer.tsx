import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {getAuthUserData, logout} from "../../redux/AuthReducer";


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
export type HeaderContainerType = MapStateToPropsType & MapDispatchPropsType
export type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}
export type MapDispatchPropsType = {
    getAuthUserData:() => void
}
const mapStateToProps = (state:AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }

}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
