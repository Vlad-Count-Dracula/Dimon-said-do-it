import React from "react";
import MessageUser from "./ConstMessageUser/ConstMessageUser";
import MessageUserText from "./ConstUserText/ConstUserText";
import s from './Messages.module.css';



const Messages = (props) => {

  let mapMessageUser = props.state.dataMessageUser.map( user => <MessageUser name={user.name} id={user.id} /> );

  let mapMessageText = props.state.dataMessageText.map( text => <MessageUserText text={text.text} />);

    return (
        <div className={s.messages}>
          <div className={s.messages__users}>
            { mapMessageUser }
          </div>
          <div className={s.messages__texta}>
            <div className={s.messages__wrapper}>
              <div className={s.message__wrapper}>
                {mapMessageText}
              </div>
            </div>
          </div>
        </div>
    )
}

export default Messages ;