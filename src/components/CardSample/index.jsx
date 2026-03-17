import React from 'react'
function CardSample({pIcon, pTitle, pLink, pImage, pAlt, pDesc}) {
    return (
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <div className="sample-box">
              <h5><i className={pIcon}></i> {pTitle}</h5>
              <hr />
             <div className="img-sample">
               <a href={pLink} target="_blank" sr-only={pDesc}> <img src={pImage} className="img-fluid" alt={pAlt}/></a>
             </div>
          </div>
       </div>
    )
}

export default CardSample;