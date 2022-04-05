import React from "react";
import "./dashboard.styles.css";
import Heading from "../../components/heading/heading.component";
import Sidenav from "../../components/sidenav/sidenav.component";
import Subnav from "../../components/subnav/subnav.component";
import Topnav from "../../components/topnav/topnav.component";
import ResponseTimeGraph from "../../components/response-graph/response-graph.component";
import RepliesResolutionGraph from "../../components/replies-graph/replies-graph.component";
import ResolutionTimeGraph from "../../components/resolution-graph/resolution-graph.component";
import FirstContactResolutionGraph from "../../components/first-contact-graph/first-contact-graph.component";
import Mobilenav from "../../components/mobilenav/mobilenav.components";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <Sidenav />
            <div className="right">
                <Mobilenav />
                <Topnav />
                <Subnav />
                <Heading />
                <ResponseTimeGraph />
                <RepliesResolutionGraph />
                <ResolutionTimeGraph />
                <FirstContactResolutionGraph />
            </div>
        </div>
    )
}

export default Dashboard;