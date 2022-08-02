import React from "react";
import "./navbar.css";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-sub">
        <div className="logoContainer">
          <p>volka<span>Panel</span></p>
        </div>
        <div className="navItemsContainer">
          <div className="notifIconContainer">
            <NotificationsNoneIcon className="notifIcon"/>
            <span className="notifCounter">2</span>
          </div>
          <div className="notifIconContainer">
            <LanguageIcon className="notifIcon" />
          </div>
          <div className="notifIconContainer">
            <SettingsIcon className="notifIcon" />
          </div>
          <div className="notifIconContainer">
            <img className="avatarImg" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
