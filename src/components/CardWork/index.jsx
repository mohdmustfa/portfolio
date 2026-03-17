import React from 'react';
function CardWork({cname, cposition, clocation, cdate}) {
    return (
        <div className="card card-lock">
            <h4>{cname}</h4>
            <h5>{clocation} </h5>
            <h6>{cposition}</h6>
            <span>{cdate}</span>
        </div>
    )
}

export default CardWork;