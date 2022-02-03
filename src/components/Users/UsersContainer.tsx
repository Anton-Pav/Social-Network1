import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {
    setCurrentPage,
    UsersType, getUsers, unfollowTC, followTC,
} from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                followingInProgress={this.props.followingInProgress}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.followTC}
                unfollow={this.props.unfollowTC}
            />
        </>
    }

}

export type MapStateToPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unfollowTC: (id: number) => void
    followTC: (id: number) => void
}

export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect (mapStateToProps, {
    followTC,
    unfollowTC,
    setCurrentPage,
    getUsers,
})
)(UsersContainer)