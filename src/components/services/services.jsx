import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Template using HTML,CSS, jQuery & Bootstrap</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Material UI</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Responsive Design</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Template in React JS</p>
            </li>
          </ul>
        </article>
        {/* end */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Static or Dynamic website</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Build software like ERP, POS, CNF</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Make bot system in whatsapp</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Make chat system for multi user with media sharing</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Add new features to your existing system</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Design database for your application</p>
            </li>
          </ul>
        </article>
        {/* end */}
        <article className='service'>
          <div className="service__head">
            <h3>Desktop App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Attractive form design</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Best user experience</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Make your offline system with unique features</p>
            </li>
            <li>
              <i className="fas fa-check service__list-icon"></i>
              <p>Experience like web system</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services