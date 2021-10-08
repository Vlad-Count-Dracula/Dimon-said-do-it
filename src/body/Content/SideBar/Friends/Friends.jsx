import React from "react";
import s from './Friends.module.css';


const Friends = (props) => {
    return (
            <div className={s.friend}>
              <div className={s.friend__subTitle}>
              <div className={s.friend__logo}> </div>
                  {props.name}
              </div>
            </div>
    );
  };


  export default Friends;