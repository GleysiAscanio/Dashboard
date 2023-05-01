import React, {useState} from "react";
import { motion, AnimateSharedLayout } from  "framer-motion/dist/framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import {UilTimes} from "@iconscout/react-unicons"
import Chart from "react-apexcharts"
import {chartData} from "../../Data/data"
import "react-circular-progressbar/dist/styles.css"
import "./MiniCard.css"

const MiniCard = ({title,color,barValue,value,png,series}) => {
    const [expanded, setExpanded] = useState(false)
    return(
        <AnimateSharedLayout>
            {expanded ?
             <ExpandedCard setExpanded={setExpanded} color={color} title={title} series={series}/>
            :
            <CompactCard png={png} value={value} barValue={barValue} color={color} title={title} setExpanded={setExpanded}/>}
        </AnimateSharedLayout>
    )
}


//CompactCard
const CompactCard = ({png,value,barValue,color,title,setExpanded}) => {
    const Png = png
    return(
        <motion.div className="compactCard" style={{background: color.backGround, boxShadow: color.boxShadow}} onClick={()=>setExpanded(true)} layoutId="expandableCard">
            <div className="radialBar">
                <CircularProgressbar value={barValue} text={`${barValue}%`}/>
                <span>{title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}

//ExpandedCard
const ExpandedCard = ({setExpanded,title,color,series}) => {
    return(
        <motion.div className="expandedCard"  style={{background: color.backGround, boxShadow: color.boxShadow}} layoutId="expandableCard">
            <div style={{alignSelf:"flex-end", cursor:"pointer", color:"white"}} >
                <UilTimes  onClick={()=>setExpanded(false)} />
            </div>
            <span>{title}</span>
            <div className="chartContainer">
                <Chart options={chartData.options} series={series} type="area"/>
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}



export default MiniCard