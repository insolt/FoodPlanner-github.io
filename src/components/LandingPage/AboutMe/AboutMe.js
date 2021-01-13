import React from "react";

import "../../../scss/components/LandingPage/AboutMe/AboutMe.scss"

const AboutMe = () => {
    return(
        <section id="about_me" className="about_me">
            <div className="container">
                <div className="about_me">
                    <div className="about_me_image"></div>
                    <div className="about_me_article">
                        <h3 className="about_me_title">My passion and my aim</h3>
                        <p className="about_me_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ut, temporibus, possimus eaque doloremque delectus deserunt placeat mollitia ipsa iste atque quis dolorem odio! Nostrum, corporis perspiciatis totam assumenda reprehenderit porro rem eos tempora soluta?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe