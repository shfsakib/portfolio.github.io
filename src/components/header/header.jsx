import React, { Fragment } from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
    return (
        <Fragment>
            <header>
                <div className="container header__container">
                    <h3>Hello I'm</h3>
                    <h1>Mohammad Sakib Hossain</h1>
                    <h3 className="text-light">Fullstack Developer</h3>
                    <CTA />
                    <HeaderSocials />
                    <div className="me">
                        <img src="./dist/img/mypic5.png" alt="My Image" />
                    </div>
                    <a href="#contact" className='scroll_down'>Scroll Bottom</a>
                </div>
            </header>
        </Fragment>
    )
}

export default Header