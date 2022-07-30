import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fa0iudj', 'template_pyxrvcj', form.current, 'B2Df2EAtu9xohCD0i')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        shfsakib@gmail.com
                        <h5><a href="mailto:shfsakib@gmail.com" target={'_blank'}>Send a message</a></h5>
                    </article>
                    <article className="contact__option">
                        <RiFacebookCircleLine className='contact__option-icon' />
                        <h4>Facebook</h4>
                        Mohammad Sakib Hossain
                        <h5><a href="https://www.facebook.com/shfsakib" target={'_blank'}>View Profile</a></h5>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        +8801685685506
                        <h5><a href="https://wa.me/8801685685506" target={'_blank'}>Send a message</a></h5>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required autoComplete='off' />
                    <input type="email" name='email' placeholder='Your Email' required autoComplete='off' />
                    <textarea name="message" rows="7" placeholder='Your Message' required autoComplete='off'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact