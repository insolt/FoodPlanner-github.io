import React, { useState, useEffect } from "react";
import slide1 from '../../../images/1.jpg';
import slide2 from '../../../images/2.jpg';
import slide3 from '../../../images/3.jpg';
import slide4 from '../../../images/4.jpg';
import slide5 from '../../../images/5.jpg';


import "../../../scss/components/LandingPage/Carousel/Carousel.scss";

const Carousel = () => {
    const [imageID, setImageID] = useState(0);

    const imgBackground = [
        slide1, slide2, slide3, slide4, slide5
    ]

    useEffect(() => {
        const intervalID = setInterval(() => {
            setImageID(prev => 
                prev<4 ? prev + 1 : prev = 0
            )
        }, 5000);
            return () => {
                clearInterval(intervalID)
            }  
    }, [imageID])

    const handleClickNext = () => {
        setImageID(prev => 
            prev<4 ? prev + 1 : prev = 0
        )
    }

    const handleClickPrev = () => {
        setImageID(prev => 
            prev>0 ? prev - 1 : prev = 4
        )
    }
   
    return(
        <section id="meals_planner" className="carousel_wrap">
            <div className="container">
                <div className="carousel" >
                    <button className="button_prev" onClick={handleClickPrev}><i className="fas fa-angle-left"></i></button>
                    <div className="displayed_image" style={{
                        backgroundImage: `url(${imgBackground[imageID]})`
                        }}></div>
                    <button className="button_next" onClick={handleClickNext}><i className="fas fa-angle-right"></i></button>
                </div>
            </div>
        </section>
    )
}

export default Carousel