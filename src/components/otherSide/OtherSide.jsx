import React from "react";
import { UpDates } from "../upDates/UpDates";
import "./OtherSide.css"

export const OtherSide = () => {
    return(
        <div className="otherSide">
            <div>
                <h3>Updates</h3>
                <UpDates/>
            </div>
        </div>
    )
}