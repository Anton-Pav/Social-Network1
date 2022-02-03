import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";
import {DialogsContainerType} from "./DialogsContainer";


const Dialogs = (props: DialogsContainerType) => {
    let dialogsElements =props.dialogsPage.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements =props.dialogsPage.messages.map((messageEl) => <Message message={messageEl.message} id={messageEl.id}/>)
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      let body =  e.currentTarget.value;
      props.newMessageText(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div className={s.newMessage}><textarea value={props.dialogsPage.newMessageText}
                                   onChange={onNewMessageChange}
                                   placeholder={"Enter your message"}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;