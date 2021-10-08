import React from "react";
import { actionCreatorAddMessage, actionCreatorCarrentText } from "../../../redax/State";
import MessageUser from "./ConstMessageUser/ConstMessageUser";
import MessageUserText from "./ConstUserText/ConstUserText";
import s from './Messages.module.css';



const Messages = (props) => {

  let mapMessageUser = props.state.dataMessageUser.map( user => <MessageUser name={user.name} id={user.id} /> );

  let mapMessageText = props.state.dataMessageText.map( text => <MessageUserText text={text.text} />);

  let newMessage = React.createRef();

  let onChangeClick = () => {
      let text = newMessage.current.value;
      props.dispatch(actionCreatorCarrentText(text));
  }

  let addPost = () => {
    props.dispatch(actionCreatorAddMessage());
    newMessage.current.value = '';
  };

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
              <div className={s.textareaWrapper}>
              <div className={s.textarea}>
                <textarea cols='87' rows='4' ref={newMessage} onChange={onChangeClick} value={props.newDataMessageText}></textarea>
              </div>
              <div className={s.button}>
                <button onClick={addPost}>Add Message</button>
              </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Messages ;