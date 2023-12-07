import React, { useEffect, useState } from "react";
import "../Style/LayoutStyle.css";
import { adminMenu, userMenu } from "../Data/Data";
// import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Badge } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const LayoutHome = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [notificationCount, setNotificationCount] = useState();

  // Fetch user information
  const getUser = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8080/api/v1/user/current-user',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      console.log(res.data.data.isAdmin); // Assuming user data is in res.data

       setName(res.data.data.name)
       setIsAdmin(res.data.data.isAdmin)
       setNotificationCount(res.data.data.notification.length)



    } catch (error) {
      console.log(error);
    }
  };

const handleNotification = async()=>{

  navigate('/get-all-notification')
}



  useEffect(() => {
    getUser();
    
  }, []); // Fetch user information on component mount

  // Use the appropriate menu based on isAdmin
  const Menu = isAdmin ? adminMenu : userMenu;

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>Sport Management System</h6>
              <hr />
            </div>
            <div className="menu">
              {/* map the all data inside the data.js */}
              {Menu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div
                    className={`menu-item ${isActive && "active"}`}
                    key={menu.path}
                  >
                    <i className={menu.icon}></i>
                    <Link to={menu.path}>{menu.name}</Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="content">
            <div className="header">
               <div className="header-content">
              
                {
                isAdmin ? 
                <Badge count={notificationCount} className="header-content-badge-icon" onClick={handleNotification}>
                    <FontAwesomeIcon icon={faBell} />
                 </Badge> 
                 : 
                 " "
                 }

                <p> {name} </p>
                 </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutHome;
