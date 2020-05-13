import React from "react";

export const LandingComponent = ({message = ""}) => {

    return <div className="central-content">
        <h1>{message}</h1>
    </div>
};