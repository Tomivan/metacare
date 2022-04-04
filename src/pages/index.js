import React from "react";
import { Router } from "@reach/router";
import Dashboard from "./dashboard/dashboard.component";

const Pages = () => {
    return(
        <Router>
            <Dashboard path="/" />
        </Router>
    )
}

export default Pages;