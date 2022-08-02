import React from "react";
import "./app.css";

import { Navbar } from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./sections/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./sections/UserList/UserList";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <div className="appBody">
            <Sidebar />
            <div className="cont">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
              </Routes>
              {/* <Home /> */}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
