import React, {useState} from "react";
import {UilSignOutAlt} from "@iconscout/react-unicons"
import { sidebarData } from "../../Data/data";
import Logo from "../../imgs/logo.png"
import "./Sidebar.css"


const Sidebar = () => {
    const [selected, setSelected] = useState("001")

    return(
        <div className="sidebar">
            <div className="logo">
                <img src={Logo} alt="Logo_Shop"/>
                <span>Shop <span>Anywhere</span></span>
            </div>
            <div className="menu">
                {sidebarData.map((element) => 
                    <div className={selected === element.id ? "menuItem active": "menuItem"} key={element.id} onClick={()=>setSelected(element.id)}>
                        <div>
                            <element.icon/>
                        </div>
                        <span>{element.name}</span>
                    </div>
                )}
                <div className="menuItem">
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar