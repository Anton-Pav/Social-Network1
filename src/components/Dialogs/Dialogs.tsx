import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./Dialogitem/DialogItem";
import Message from "./Message/Message";
import {DialogsContainerType} from "./DialogsContainer";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type FormMessagesType = {
    newMessageText: string
}
const Dialogs = (props: DialogsContainerType) => {
    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map((messageEl) => <Message message={messageEl.message}
                                                                                  id={messageEl.id}/>)

    let addNewMessage = (values: FormMessagesType) => {
        props.sendMessage(values.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const maxLength = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<FormMessagesType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[required, maxLength]}
                   name={"newMessageText"}
                   placeholder="Enter your message"/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm<FormMessagesType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;