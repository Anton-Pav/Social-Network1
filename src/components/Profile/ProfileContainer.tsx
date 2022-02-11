import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/ProfileReducer";
import {withRouter, WithRouterType} from "../common/WithRouter/WithRouter";
import Profile from "./Profile";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

export type MapStateToPropsType = {
    profile: ProfileType
    status: string
}

export type MapDispatchToPropsType = {
    getUserProfile: (param_id: string) => void,
    getStatus:(param_id: string) => void,
    updateStatus: (status: string) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType & WithRouterType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = '21606'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)