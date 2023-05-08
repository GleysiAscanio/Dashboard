import React from "react";
import { UpdatesData } from "../../Data/data";
import "./UpDates.css"

export const UpDates = () => {
    return(
        <div className="containerUpDates">
            {UpdatesData.map((element) => (
                <div className="cardUpdate" key={element.id}>
                    <img src={element.img} alt={element.name} />
                    <div className="noti">
                        <div>
                            <span>{element.name}</span>
                            <span>{element.noti}</span>
                        </div>
                        <span>{element.time}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}