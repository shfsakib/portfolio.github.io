import React, { Fragment } from 'react'
import CTA from './CTA'
import './header.css'
const Header = () => {
    return (
        <Fragment>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mohammad Sakib Hossain</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <div className="me">
                    <img src="" alt="" />
                </div>
            </div>
        </Fragment>
    )
}

export default Header