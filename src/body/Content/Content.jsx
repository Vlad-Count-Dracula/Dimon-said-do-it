import React from "react";
import mainPhoto from './img/Photo.jpg';
import s from './Content.module.css' ;
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";
import { BrowserRouter , Route } from "react-router-dom";
import Messages from "./Messages/Messages";
import News from "./News/News";
import Settings from "./Settings/Settings";
import Music from "./Music/Music";
import SideBar from './SideBar/SideBar.jsx';

const Content = (props) => {
    return (
      <BrowserRouter>
      <SideBar />
      <div className={s.content}>
        <Route path='/profile' render={ () => <Profile /> }/>
        <Route path='/profile' render={ () => <MyPosts state={props.state.profilePage} /> }/>
        <Route path='/messages' render={ () => <Messages state={props.state.messagePage}/> }/>
        <Route path='/news' render={ () =>  <Music /> }/>
        <Route path='/music' render={ () => <News /> }/>
        <Route path='/settings' render={ () =>  <Settings /> }/>
        </div>
      </BrowserRouter>
    )
};

export default Content ;