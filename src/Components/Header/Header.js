import React, { useState } from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom'

function Header() {
  const [inputSearch,setInputSearch]= useState('')
  const onChange=(e)=>{
    setInputSearch(e.target.value)
  }
    return (
      <div className="header">
        <div className="header__left">
          <MenuIcon />
          <Link to="/">
            <img
              className="header__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header__search">
          <input
            value={inputSearch}
            onChange={onChange}
            type="text"
            placeholder="Search"
          />
          <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__searchButton" />
          </Link>
        </div>
        <div className="header__iconsBlock">
          <VideoCallIcon className="header__icon" />
          <AppsIcon className="header__icon" />
          <NotificationsIcon className="header__icon" />
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14Gh2lw5_Un_7mo0ZAU85n31Gqm6T_UMJiy30S6heFg=s88-c-k-c0x00ffffff-no-rj-mo" />
        </div>
      </div>
    );
}

export default Header
