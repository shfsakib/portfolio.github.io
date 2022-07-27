import React, { Fragment } from 'react'
import CV from '../../asset/cv.pdf'
const CTA = () => {
    return (
        <Fragment>
            <div className="cta">
                <a href={CV} download className='btn'>Download CV</a>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </Fragment>
    )
}

export default CTA