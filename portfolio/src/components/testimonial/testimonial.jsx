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
            <img src="./dist/img/shueib.png" alt="avatar 1" />
            <h5 className='client__name'>Mr. Shueib Abdul Azize</h5>
            <small className='client__review'>
              He was very professional. Communication was great and responses were quick. He  never disappoints , and never fails to provide delivery of service at an extremely fast pace and at a great value . Will be using his services every time . Thank you very much for your efforts mate !
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src="./dist/img/avatar.png" alt="avatar 4" />
            <h5 className='client__name'>Mr. Hasan</h5>
            <small className='client__review'>
              He was very professional. Communication was great and responses were quick. Lots of questions so that he knew exactly what I needed. Delivered before the deadline. Would highly recommend. Thanks!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src="./dist/img/nanseto.png" alt="avatar 2" />
            <h5 className='client__name'>Ms. Nanseto</h5>
            <small className='client__review'>
              Excellent work and communication, and thank you for the prompt delivery. I will use your services again! A+.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src="./dist/img/hakimimas.png" alt="avatar 3" />
            <h5 className='client__name'>Mr. Hakimimas</h5>
            <small className='client__review'>
              He is very easy to communicate with. The delivery was really fast! Also he can do what you ask him to. Definitely recommend him.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src="./dist/img/avatar.png" alt="avatar 4" />
            <h5 className='client__name'>Mr. Devid</h5>
            <small className='client__review'>
              Amazing experience , great work , fast delivery , fast replies and amazing communication , he went above and beyond even after the project was delivered . Would highly recommend , he'll be the first on my list whenever i need a freelancers again .
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src="./dist/img/avatar.png" alt="avatar 4" />
            <h5 className='client__name'>Mr. Daud</h5>
            <small className='client__review'>
              Sakib is very supporting, and he knows what he is doing well. It was nice to work and trust him.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial