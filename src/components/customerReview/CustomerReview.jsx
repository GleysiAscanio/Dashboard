import React from "react";
import Chart from "react-apexcharts"
import { data } from "../../Data/data";

export const CustomerReview = () => {
    return(
        <div className="customerReview">
            <Chart options={data.options} series={data.series} type="area"  />
        </div>
    )
}