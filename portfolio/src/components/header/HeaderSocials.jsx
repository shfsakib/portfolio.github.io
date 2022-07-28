import React, { Fragment } from 'react'

const HeaderSocials = () => {
    return (
        <Fragment>
            <div className="header__socials">
                <a href="https://www.linkedin.com/in/shfsakib/" target='_blank'><img src="./dist/img/linkedin.png" alt="linkedin" /></a>
                <a href="https://github.com/shfsakib/" target='_blank'><img src="./dist/img/github.png" className='githubImg' alt="github" /></a>
                <a href="https://www.fiverr.com/shfsakib?up_rollout=true" target='_blank'><img src="./dist/img/fiverr.png" alt="fiverr" /></a>
                <a href="https://wa.me/8801685685506" target='_blank'><img src="./dist/img/whatsapp.png" alt="whatsapp" /></a>
                <a href="https://www.facebook.com/shfsakib" target='_blank'><img src="./dist/img/facebook.png" alt="facebook" /></a>
            </div>
        </Fragment>
    )
}

export default HeaderSocials