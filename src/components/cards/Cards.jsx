import React from "react";
import MiniCard from "../miniCard/MiniCard";
import { cardsData } from "../../Data/data";
import "./Cards.css"

const Cards = () => {
    return(
        <div className="cards">
            {cardsData.map((element => 
                <div className="containerCards" key={element.id}>
                    <MiniCard
                        title={element.title}
                        color={element.color}
                        barValue={element.barValue}
                        value={element.value}
                        png={element.png}
                        series={element.series}
                    />
                </div>
            ))}
        </div>
    )
}

export default Cards 