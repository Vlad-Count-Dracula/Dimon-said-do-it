import React from "react";
import s from './Profile.module.css';
import mainPhoto from '../img/Photo.jpg';


const Profile = () => {
    return (
        <div className={s.Profile}>
          <div className={s.mainPhoto}>
            <img src={mainPhoto}></img>
          </div>
          <div>ava + description</div>
        </div>
    )
}

export default Profile ;