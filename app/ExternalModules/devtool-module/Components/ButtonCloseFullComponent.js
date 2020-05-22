import React from "react";
import {ARROW_DX, ARROW_SX} from "../Core/Constants/GenericConstants";

export const ButtonCloseFullComponent = ({theme, isCloseFull, toggleCloseFullSidebar}) => {

    return <div className={ isCloseFull ?
        "devtool-hide-button-box"+theme+" close-button-full"+theme :
        "devtool-hide-button-box"+theme
    }

                onClick={() => toggleCloseFullSidebar()}>
        <div className={"btn-close"+theme}>{isCloseFull ? ARROW_SX : ARROW_DX}</div>
    </div>
};