import React from "react";

import "../../../scss/components/MealsApp/Pulpit/AddButton.scss";

const AddButton = ({ text, onDone, value }) => {

    const handleClick = (e) => {
        onDone(e)
    }
    return(
        <button className="add_button" value={value} onClick={handleClick}>
            <i className="far fa-plus-square"></i>
            <p>{text}</p>
        </button>
    )
}

export default AddButton;