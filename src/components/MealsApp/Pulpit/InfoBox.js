import React, { useState } from "react";

import "../../../scss/components/MealsApp/Pulpit/InfoBox.scss";

const InfoBox = ({ color, icon, text, top }) => {
    const [displayValue, setDisplayValue] = useState ('')
   
    return(
        <div className="info_box" style={{ display: displayValue, top: top }}>
            <div>
                <p className="icon_sign"><i className={icon} style={{ color: color }}></i></p>
                <p style={{ color: color }}>{text}</p>
            </div>
            <div className="window_close_icon"><i className="fas fa-window-close" style={{ color: color }} onClick={() => setDisplayValue('none')}></i></div>
        </div>
    )
}

export default InfoBox;