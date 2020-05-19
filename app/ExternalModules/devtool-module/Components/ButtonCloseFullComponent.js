import React from "react";
import {ARROW_DX, ARROW_SX} from "../Core/Constants/GenericConstants";

export const ButtonCloseFullComponent = ({isCloseFull, toggleCloseFullSidebar}) => {

    return <div className={isCloseFull ? "devtool-hide-button-box close-button-full" : "devtool-hide-button-box"}
                onClick={() => toggleCloseFullSidebar()}>
        <div className="btn-close">{isCloseFull ? ARROW_SX : ARROW_DX}</div>
    </div>
};