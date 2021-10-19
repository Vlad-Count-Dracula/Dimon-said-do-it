import React from "react";
import s from './Friend.module.css';


const Friend = (props) => {



    return (
        <div className={s.friendWrappper}>
            {/* <button onClick={props.getContacts()}>Get Contacts</button> */}
            <div className={s.friendBox}>
                <div className={s.friendAva}>
                    <div className={s.friendLogo}>
                    </div>
                    <div className={s.friendTitle}>
                        {props.name}
                    </div>
                    <div className={s.friendFollow}>
                        {/* {props.followed ? <button onClick={ () => {props.unfollow(props.id)} } >Unfollow</button> : <button onClick={ () => {props.follow(props.id)} } >Follow</button>} */}
                    </div>
                </div>
                <div className={s.friendInfoBox}>
                    <div className={s.friendStatus}>
                        
                    </div>
                    <div className={s.friendLocation}>
                        <div className={s.friendCountry}></div>
                        <div className={s.friendCity} ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default Friend;