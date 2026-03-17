import React from 'react'
function CardSample({pIcon, pTitle, pLink, pImage}) {
    return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="sample-box">
              <h5><i className={pIcon}></i> {pTitle}</h5>
              <hr />
             <div className="img-sample">
               <a href={pLink} target="_blank"> <img src={pImage} className="img-fluid" /></a>
             </div>
          </div>
       </div>
    )
}

export default CardSample;