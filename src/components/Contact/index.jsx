
import React from 'react'
function Contact({cicon, clink, clinkText, cCol}) {
    return (
        <div className={cCol}>
            <i className={cicon}></i>
            <span><a href={clink}>{clinkText}</a></span>
        </div>
    )
}

export default Contact;