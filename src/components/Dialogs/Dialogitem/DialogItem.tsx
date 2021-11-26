import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css";
import React from "react";
import {DialogsType} from "../../../redux/state";

const DialogItem = (props: DialogsType) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}
                     className={(nData) => nData.isActive ? s.active : ''}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;