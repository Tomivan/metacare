import React from "react";
import Search from "../../assets/images/search.png";
import Down from "../../assets/images/down.png";
import "./heading.styles.css";

const Heading = () => {
    return(
        <div className="heading">
            <p><strong>Efficiency Analytics</strong></p>
            <div className="heading-right">
                <div className="search">
                    <img src={Search} alt="" className="icon-search" />
                    <input type="search" placeholder="Search" className="search-input"/>
                </div>
                <div className="filter">
                    <select>
                        <option>Filter Options</option>
                        <img src={Down} alt="" className="down" />
                    </select>
                </div>
                <button className="export">Export</button>
            </div>
        </div>
    )
}

export default Heading;