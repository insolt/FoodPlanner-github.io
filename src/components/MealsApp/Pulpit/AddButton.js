import React from "react";
import { Link } from "react-router-dom";

import "../../../scss/components/MealsApp/Pulpit/AddButton.scss";

const AddButton = ({ text, to }) => {

    return(
            <button className="add_button">
                <Link to={to} >
                    <i className="far fa-plus-square"></i>
                    <p>{text}</p>
                </Link>
            </button>
    )
}

export default AddButton;