import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Mohammad Sakib Hossain</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonial">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/shfsakib"><FaFacebookF /></a>
                <a href="https://wa.me/8801685685506"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/shfsakib/"><FiInstagram /></a>
                <a href="https://twitter.com/shf_sakib"><FiTwitter /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Mohammad Sakib Hossain. All rights reserver</small>
            </div>
        </footer>
    )
}

export default Footer