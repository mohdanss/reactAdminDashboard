import React from "react";
import "./sidebar.css";
import {
  HomeOutlined,
  Timeline,
  TrendingUp,
  PersonOutline,
  StorefrontOutlined,
  AttachMoney,
  BarChart,
  MailOutline,
  FeedbackOutlined,
  MessageOutlined,
  WorkOutline,
  ReportOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarSub">
        <div className="dashboardSect sideBarHead">
          <h3>Dashboard</h3>
        </div>
        <div className="sbSubSect">
          <Link to="/" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <HomeOutlined className="sbMIIcon" />
              <span className="sbMIText">Home</span>
            </div>
          </Link>

          <Link to="/analytics" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <Timeline className="sbMIIcon" />
              <span className="sbMIText">Analytics</span>
            </div>
          </Link>

          <Link to="/sales" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <TrendingUp className="sbMIIcon" />
              <span className="sbMIText">Sales</span>
            </div>
          </Link>
        </div>

        <div className="quickMenuSect sideBarHead">
          <h3>Quick Menu</h3>
        </div>
        <div className="sbSubSect">
          <Link to="/users" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <PersonOutline className="sbMIIcon" />
              <span className="sbMIText">Users</span>
            </div>
          </Link>

          <Link to="/products" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <StorefrontOutlined className="sbMIIcon" />
              <span className="sbMIText">Products</span>
            </div>
          </Link>

          <Link to="/transactions" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <AttachMoney className="sbMIIcon" />
              <span className="sbMIText">Transactions</span>
            </div>
          </Link>

          <Link to="/reports" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <BarChart className="sbMIIcon" />
              <span className="sbMIText">Reports</span>
            </div>
          </Link>
        </div>

        <div className="notificationSect sideBarHead">
          <h3>Notifications</h3>
        </div>
        <div className="sbSubSect">
          <Link to="/mail" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <MailOutline className="sbMIIcon" />
              <span className="sbMIText">Mail</span>
            </div>
          </Link>
          <Link to="/feedback" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <FeedbackOutlined className="sbMIIcon" />
              <span className="sbMIText">Feedback</span>
            </div>
          </Link>
          <Link to="/messages" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <MessageOutlined className="sbMIIcon" />
              <span className="sbMIText">Messages</span>
            </div>
          </Link>
        </div>

        <div className="staffSect sideBarHead">
          <h3>Staff</h3>
        </div>
        <div className="sbSubSect">
          <Link to="/manage" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <WorkOutline className="sbMIIcon" />
              <span className="sbMIText">Manage</span>
            </div>
          </Link>
          <Link to="/analytics" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <Timeline className="sbMIIcon" />
              <span className="sbMIText">Analytics</span>
            </div>
          </Link>
          <Link to="/reports" className="sbMenuItemCont">
            <div className="sbMenuItem">
              <ReportOutlined className="sbMIIcon" />
              <span className="sbMIText">Reports</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
