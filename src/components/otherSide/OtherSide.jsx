import React from "react";
import { UpDates } from "../upDates/UpDates";
import "./OtherSide.css"
import { CustomerReview } from "../customerReview/CustomerReview";

export const OtherSide = () => {
    return(
        <div className="otherSide">
            <div>
                <h3>Updates</h3>
                <UpDates/>
            </div>
            <div>
                <h3>Customer Review</h3>
                <CustomerReview/>
            </div>
        </div>
    )
}