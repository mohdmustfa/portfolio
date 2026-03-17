import React from 'react';
import FounderImg from '../../assets/founder-1.jpg';
function Founder() {
    return (
        <>
            <div className="founder-img ms-auto me-auto">
                <img src={FounderImg} className="img-fluid founder" alt="Frontend Developer working with React and accessibility"/>
            </div>
            <div className="f-name"> 
                <span>M M Malik<span className="small d-block">(Front-End Engineer)</span></span>
            </div>
        </>
    )
}

export default Founder;