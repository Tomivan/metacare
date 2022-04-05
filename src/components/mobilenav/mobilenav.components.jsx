import React from "react";
import Admin from "../../assets/images/admin.png";
import Train from "../../assets/images/train.png";
import Agent from "../../assets/images/inbox.png";
import Help from "../../assets/images/help.png";
import Analytics from "../../assets/images/analytics.png";
import "./mobilenav.styles.css";

const Mobilenav = () => {
    return(
        <div className="mobilenav">
            <div className="metacare">
                <p><strong>Metacare</strong></p>
                <p>adeyinka@metacare.app</p>
            </div>
            <div className="routes">
                <ul>
                    <li><img src={Admin} alt="" className="nav-icon" /></li>
                    <li><img src={Train} alt="" className="nav-icon" /></li>
                    <li><img src={Train} alt="" className="nav-icon" /></li>
                    <li><img src={Agent} alt="" className="nav-icon" /></li>
                    <li><img src={Help} alt="" className="nav-icon" /></li>
                    <li><img src={Analytics} alt="" className="nav-icon" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Mobilenav;