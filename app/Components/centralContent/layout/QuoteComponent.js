import React from "react";

export const QuoteComponent = ({message= ""}) => {

    return <div className="central-content">
        <h1>{message}</h1>
    </div>
};