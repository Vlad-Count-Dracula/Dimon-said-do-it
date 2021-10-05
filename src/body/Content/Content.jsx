import React from "react";
import mainPhoto from './img/Photo.jpg';
import s from './Content.module.css' ;
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return (
        <div className={s.content}>
          <Profile />
          <MyPosts />
        </div>
    )
};

export default Content ;