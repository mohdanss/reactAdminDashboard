import { Visibility } from "@mui/icons-material";
import React from "react";
import { newUsers } from "../../../Data/DummyData";
import "./widgetsm.css";

const UserCard = (props) => {
  return (
    <div className="userCardCont">
        <div className="avatarCont">
        <img src={props.user.imgUrl} alt="avatar" className="avatar"/>
        </div>
        <div className="centerItems">
          <p className="username">{props.user.name}</p>
          <p className="title">{props.user.title}</p>
        </div>
        <div className="displayIconCont">
            <div className="displayIconContSub">
            <Visibility className="displayIcon" sx={{height:"18px",}}/>
            <span>Display</span>
            </div>
        </div>
    </div>
  );
};

const Widgetsm = () => {
  const users = newUsers;
  return (
    <div className="widgetsmCont">
      <div className="widgetsmSub">
        <div className="titleCont">
          <p>Newly Joined Members</p>
        </div>
        <div className="userCardsCont">
          {newUsers.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Widgetsm;
