import React, {ChangeEvent} from "react";

import {DialogsType, MessagesType, newMessageTextAC, sendMessageAC} from "../../redux/DioalogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/ReduxStore";
import {Dispatch} from "redux";

type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    newMessageText: (body: string) => void
    sendMessage: () => void
}

export type DialogsContainerType =  MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        newMessageText: (body: string) => {
            dispatch(newMessageTextAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;