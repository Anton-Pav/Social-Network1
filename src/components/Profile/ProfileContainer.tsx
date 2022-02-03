import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {getUserProfile, ProfileType} from "../../redux/ProfileReducer";
import {withRouter, WithRouterType} from "../common/WithRouter/WithRouter";
import Profile from "./Profile";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type MapStateToPropsType = {
    profile: ProfileType
}


export type MapDispatchToPropsType = {
    getUserProfile: (param_id: string) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType & WithRouterType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect,
    withRouter,

)(ProfileContainer)