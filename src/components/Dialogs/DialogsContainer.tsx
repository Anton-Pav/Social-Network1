import React from "react";
import {DialogsType, MessagesType, sendMessageAC} from "../../redux/DioalogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
}
type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
export type MapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
}

export type DialogsContainerType =  MapDispatchToPropsType & MapStateToPropsType

export const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageAC(newMessageText))
        }
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)


)(Dialogs)