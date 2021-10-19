import axios from "axios";
import React from "react";
import s from "./FriendsContent.module.css";



const FriendsContent = (props) => {

  let getContacts = () => {
    if (props.friendsPage.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items);
      });
    }
  }


  if (props.friendsPage.length === 0) {
    return (
      <div >
        <button onClick={getContacts}>Get Contact</button>
      </div>
    )
  } else {
    return (
      <div >
        {
          props.friendsPage[0].map(info => <div key={info.id}>
            <div className={s.friendWrappper}>
            <div className={s.friendBox}>
                <div className={s.friendAva}>
                    <div className={s.friendLogo}>
                    </div>
                    <div className={s.friendTitle}>
                        {info.name}
                    </div>
                    <div className={s.friendFollow}>
                        {info.followed ? <button onClick={ () => {props.unfollow(info.id)} } >Unfollow</button> : <button onClick={ () => {props.follow(info.id)} } >Follow</button>}
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
          </div>
          )
        }
      </div>
    )
  } 
};

  export default FriendsContent;