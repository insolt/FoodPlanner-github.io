import React from "react";

import WhyBox from "./WhyBox";

import "../../../scss/components/LandingPage/Why/Why.scss";

const Why = () => {
    return(
        <section id="why" className="why_section">
            <div className="container">
                <div className="why_box">
                    <WhyBox icon="fas fa-check" title="Ready" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque dolore inventore unde qui distinctio assumenda vel quis maiores dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                    <WhyBox icon="far fa-clock" title="On time" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque dolore inventore unde qui distinctio assumenda vel quis maiores dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                    <WhyBox icon="fas fa-list" title="Sorted" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque dolore inventore unde qui distinctio assumenda vel quis maiores dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                </div>
            </div>
        </section>
    )
}

export default Why;