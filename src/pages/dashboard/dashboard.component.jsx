import React from "react";
import "./dashboard.styles.css";
import Heading from "../../components/heading/heading.component";
import Sidenav from "../../components/sidenav/sidenav.component";
import Subnav from "../../components/subnav/subnav.component";
import Topnav from "../../components/topnav/topnav.component";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <Sidenav />
            <div className="right">
                <Topnav />
                <Subnav />
                <Heading />
            </div>
        </div>
    )
}

export default Dashboard;