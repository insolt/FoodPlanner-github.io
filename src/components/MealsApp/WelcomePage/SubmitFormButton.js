import React from "react";

import "../../../scss/components/MealsApp/WelcomePage/SubmitFormButton.scss";

const SubmitFormButton = ({ onDone, width, height, text }) => {

    const handleClick = (e) => {
        onDone(e)
    }

    return(
        <div className="button">
            <button type="submit" className="button" style={{ width:width, height:height }} onClick={handleClick}>{text}</button>
        </div>
    )
}

export default SubmitFormButton