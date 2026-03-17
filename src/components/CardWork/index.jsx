import React from 'react';
function CardWork({cname, cposition, clocation, cdate}) {
    return (
        <div className="col-lg-4 col-md-12 col-12">
            <div className="card card-lock">
                <h3 className='h5'>{cname}</h3>
                <h4 className='h5'>{clocation} </h4>
                <h5>{cposition}</h5>
                <span>{cdate}</span>
            </div>
        </div>
    )
}

export default CardWork;