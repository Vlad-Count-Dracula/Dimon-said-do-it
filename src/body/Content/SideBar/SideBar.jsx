import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from './SideBar.module.css';



const SideBar = (props) => {

  let mapSideBarLinks =  props.state.sideBarLinks.map( link => <NavLink to={link.link} activeClassName={s.activeLink} > {link.title} </NavLink> );

  let mapFriends = props.state.dataFriends.map( name => <Friends name={name.name} /> )

    return (
      <nav className={s.nav}>

        <div className={s.nav__link}>
          {mapSideBarLinks}
        </div>

        <div className={s.title}>Friends</div>
        
        <div className={s.friends}>
          {mapFriends}
        </div>

      </nav>
    )
};

export default SideBar;