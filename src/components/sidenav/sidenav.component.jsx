import React from "react";
import Admin from "../../assets/images/admin.png";
import Train from "../../assets/images/train.png";
import Agent from "../../assets/images/inbox.png";
import Help from "../../assets/images/help.png";
import Analytics from "../../assets/images/analytics.png";
import "./sidenav.styles.css";

const Sidenav = () => {
    return(
        <div className="sidenav">
            <div className="metacare">
                <p><strong>Metacare</strong></p>
                <p>adeyinka@metacare.app</p>
            </div>
            <div className="routes">
                <ul>
                    <li><img src={Admin} alt="" className="nav-icon" />Admin</li>
                    <li><img src={Train} alt="" className="nav-icon" />Knowledge Base</li>
                    <li><img src={Train} alt="" className="nav-icon" />Train SAM</li>
                    <li><img src={Agent} alt="" className="nav-icon" />Agent Inbox</li>
                    <li><img src={Help} alt="" className="nav-icon" />Help Center</li>
                    <li><img src={Analytics} alt="" className="nav-icon" />Analytics</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidenav;