import React, {useState} from "react";
import {UilSignOutAlt, UilBars} from "@iconscout/react-unicons"
import { motion } from  "framer-motion/dist/framer-motion";
import { sidebarData } from "../../Data/data";
import Logo from "../../imgs/logo.png"
import "./Sidebar.css"


const Sidebar = () => {
    const [selected, setSelected] = useState("001")
    const [expanded, setExpanded] = useState(false)


    const sidebarVariants = {
        true:{
            left:"0"
        },
        false:{
            left: "-60%"
        }
    }

    return(
        <>
            <div className="bars" style={expanded? {left:"60%"}:{left:"5%"}} onClick={()=>setExpanded(!expanded)}>
                <UilBars/>
            </div>
            <motion.div className="sidebar" variants={sidebarVariants} animate={window.innerWidth<=768?`${expanded}`:""}>
                <div className="logo">
                    <img src={Logo} alt="Logo_Shop"/>
                    <span>Fashion <span>Shop</span></span>
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
            </motion.div>
        </>
    )
}

export default Sidebar