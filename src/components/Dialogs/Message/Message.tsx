import s from "./../Dialogs.module.css";
import React from "react";
import {MessagesType} from "../../../redux/state";

const Message = (props: MessagesType) => {
    return (
        <div className={s.message}>
           {props.message}
        </div>
    )
}
export default Message;