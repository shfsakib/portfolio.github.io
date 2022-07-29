import React from 'react'
import './testimonial.css'

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src="./dist/img/shuieb.png" alt="avatar 1" />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial