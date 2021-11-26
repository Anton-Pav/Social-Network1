import React from "react";
import s from './Dialogs.module.css';
import {DialogsPageType} from "../../redux/state";
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";

export type DialogsPropsType = {
    state: DialogsPageType
}
const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messages.map((messageEl) => <Message message={messageEl.message} id={messageEl.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;