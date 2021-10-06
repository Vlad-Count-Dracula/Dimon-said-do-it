import React from "react";
import { NavLink } from "react-router-dom";
import s from './SideBar.module.css';

let sideBarLinks = [
  {link : '/profile' , title : 'Profile'},
  {link : '/messages' , title : 'Messages'},
  {link : '/news' , title : 'News'},
  {link : '/music' , title : 'Music'},
  {link : '/settings' , title : 'Settings'},
];

const SideBar = () => {

  let mapSideBarLinks =  sideBarLinks.map( link => <NavLink to={link.link} activeClassName={s.activeLink} > {link.title} </NavLink> );

    return (
      <nav className={s.nav}>

        <div className={s.nav__link}>
          {mapSideBarLinks}
        </div>

        {/* <div className={s.nav__link}>
          <NavLink to='/messages' activeClassName={s.activeLink} >Messages</NavLink>
        </div>

        <div className={s.nav__link}>
          <NavLink to='/news' activeClassName={s.activeLink} >News</NavLink>
        </div>

        <div className={s.nav__link}>
          <NavLink to='/music' activeClassName={s.activeLink} >Music</NavLink>
        </div>

        <div className={s.nav__link}>
          <NavLink to='/settings' activeClassName={s.activeLink} >Settings</NavLink>
        </div> */}
        
      </nav>
    )
};

export default SideBar;