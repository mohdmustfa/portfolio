import React from 'react';
function CardSkill({ icon, title, color }) {
    return (
        <>
            <div className="inner-box">
                <div className="inner-content">
                    <i className={icon}></i>
                    <h3 className={color}>{title}</h3>
                </div>
            </div>
        </>
    )
}

export default CardSkill;