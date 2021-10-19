import React from "react";
import s from './Content.module.css';
import Profile from "./Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./News/News";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import MessagesContainer from "./Messages/MessagesContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import SideBarContainer from "./SideBar/SideBarContainer";
import FriendsContainer from "./Friends/FriendsContainer";



const Content = () => {
  return (
    <BrowserRouter>
      <SideBarContainer />
      <div className={s.content}>
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/profile' render={() => <MyPostsContainer />} />
        <Route path='/friends' render={() => <FriendsContainer />} />
        <Route path='/messages' render={() => <MessagesContainer />} />
        <Route path='/news' render={() => <Music />} />
        <Route path='/music' render={() => <News />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </BrowserRouter>
  )
};

export default Content;