import React, { useState } from "react";

import SubmitFormButton from "../../MealsApp/WelcomePage/SubmitFormButton"

import "../../../scss/components/LandingPage/Contact/Contact.scss";

const Contact = () => {
    const [contactName, setContactName] = useState('');

    const handleClick = (e) => {
        e.preventDefault()
        console.log(contactName)
    }

    return(
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact">
                    <div className="contact_left_box">
                        <h3 className="contact">Great ideas</h3>
                        <p className="contact">Cooking was always passion to me. If you share this passion and want to be a part of project, do not hasitate to contact me</p>
                    </div>
                    <div className="contact_middle_box">
                        <h3 className="contact">Contact me if you</h3>
                        <ul className="contact">
                            <li>Share my passion</li>
                            <li>Have great ideas</li>
                            <li>Want to jump out of the box</li>
                            <li>Looking for adventure</li>
                        </ul>
                    </div>
                    <div className="contact_right_box">
                        <h3 className="contact">Your contact details</h3>
                        <form className="contact_form">
                            <input value={contactName} placeholder="email or phone no" onChange={(e) => setContactName(e.target.value)}/>
                            <SubmitFormButton onDone={handleClick} width="120px" height="45px" text="Send me"/>
                        </form>
                        <div className="contact_social_media">
                            <h2 className="contact"><a href="https://www.facebook.com"><i className="fab fa-facebook-square"></i></a></h2>
                            <h2 className="contact"><a href="https://www.twiter.com"><i className="fab fa-twitter-square"></i></a></h2>
                            <h2 className="contact"><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;