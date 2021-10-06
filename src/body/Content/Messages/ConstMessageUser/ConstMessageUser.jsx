import React from "react";
import { NavLink } from "react-router-dom";
import s from './ConstMessageUser.module.css';

const MessageUser = (props) => {

    let path = '/messages/' + props.id
  
    return (
                <div className={s.messages__user}>
                <NavLink to={path} className={s.a} activeClassName={s.activeUser}>{props.name}</NavLink> 
                </div>
    );
  };

  export default MessageUser ;