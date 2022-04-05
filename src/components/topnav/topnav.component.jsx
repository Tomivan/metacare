import React from "react";
import Search from "../../assets/images/search.png";
import Notification from "../../assets/images/notification.png";
import Circle from "../../assets/images/circle.png";
import Down from "../../assets/images/down.png";
import "./topnav.styles.css";

const Topnav = () => {
    return(
        <div className="topnav">
            <div className="input">
                <input type="search" placeholder="Ask us any question" />
                <img src={Search} alt="" className="search-icon" />
            </div>
            <div className="topnav-right">
                <img src={Notification} alt="" className="notification" />
                <hr />
                <img src={Circle} alt="" className="circle" />
                <img src={Down} alt="" className="down" />
            </div>
        </div>
    )
}

export default Topnav;