import React from 'react';
import { Link } from 'react-router-dom';
import Logom from '../../assets/logom.png';
function Brand() {
    return (
        <>
           <Link to="/"><img className="brand-logo" src={Logom} alt="Logo UI developer" /></Link>
        </>
    )
}

export default Brand;