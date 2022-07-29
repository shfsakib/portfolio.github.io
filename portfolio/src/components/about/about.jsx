import React from 'react'
import '../about/about.css';

const About = () => {
    return (
        <section id="about">
            <div className="about__title">
                <h3>Get to know</h3>
                <h2>About Me</h2>
            </div>
            <div className="container about__container">
                <div className="about_me">
                    <div className="about__me-image">
                        <img src="./dist/img/mypic2.png" alt="About Image" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about__cards">
                        <article className="about__card">
                            <i className="fas fa-award about__icon"></i>
                            <h5>Experience</h5>
                            <small>4+ years working</small>
                        </article>
                        <article className="about__card">
                            <i className="fas fa-user-group about__icon"></i>
                            <h5>Clients</h5>
                            <small>50+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <i className="fas fa-folder-tree about__icon"></i>
                            <h5>Projects</h5>
                            <small>65+ Completed</small>
                        </article>
                    </div>
                    <p>I'm a designer & developer with a passion for web & windows application development. I enjoy develop web software that help people to fulfil their demand. Many clients have procured exceptional result while working with me. Delivering work within time and budget which meets client’s requirements is my moto.</p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About