import React from "react";
import Cards from "../cards/Cards";
import "./MainDash.css"
import {BasicTable} from "../table/Table";

const MainDash = () => {
    return(
        <div className="mainDash">
            <h1>Dashboard</h1>
            <Cards/>
            <BasicTable/>
        </div>
    )
}

export default MainDash