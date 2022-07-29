import React from 'react'
import './portfolio.css'

const Portfolio = () => {
    const portfolioData = [
        {
            Image: './dist/img/chat.png',
            Title: 'Chat System',
            Alt: 'Chat App',
            Href: 'javascript:function() { return false; }',
            target: 'none',
        },
        {
            Image: './dist/img/blockchain.png',
            Title: 'Block Chain System',
            Alt: 'Block Chain App',
            Href: 'javascript:function() { return false; }',
            target: 'none',
        },
        {
            Image: './dist/img/medicine.png',
            Title: 'Online Medi Support System',
            Alt: 'Medicine App',
            Href: 'https://github.com/shfsakib/OnlineMediShopApp',
            target: '_blank'
        },
        {
            Image: './dist/img/catering.png',
            Title: 'Online Catering Service',
            Alt: 'Catering App',
            Href: 'https://github.com/shfsakib/CateringSystemWebApp',
            target: '_blank'
        },
        {
            Image: './dist/img/thesis.png',
            Title: 'University Final Defence Management System',
            Alt: 'Thesis App',
            Href: 'https://github.com/shfsakib/PCIUThesisManagementAndroidApp',
            target: '_blank'
        },
        {
            Image: './dist/img/child.png',
            Title: 'Child Learning App',
            Alt: 'Child App',
            Href: 'https://github.com/shfsakib/ChildLearningApp',
            target: '_blank'
        },
        {
            Image: './dist/img/buddy.png',
            Title: 'BuddyUp Portfolio Website',
            Alt: 'Buddy Up',
            Href: 'https://github.com/shfsakib/BuddyUpDesign',
            target: '_blank'
        },
        {
            Image: './dist/img/garage.png',
            Title: 'Online Garage Finding & Repaire Service',
            Alt: 'Garage App',
            Href: 'https://github.com/shfsakib/GarageFindingApp',
            target: '_blank'
        },
        {
            Image: './dist/img/ticket.png',
            Title: 'Online Ticket Booking Service',
            Alt: 'Ticket App',
            Href: 'https://github.com/shfsakib/TicketBookingSystem',
            target: '_blank'
        },
        {
            Image: './dist/img/empower.png',
            Title: 'Online Empower & Product Selling System',
            Alt: 'Empower App',
            Href: 'https://github.com/shfsakib/StudentMarket',
            target: '_blank'
        },
    ]
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    portfolioData.map((item, key) => (
                        <article className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={item.Image} alt={item.Alt} />
                            </div>
                            <h3>{item.Title}</h3>
                            <a href={item.Href} className='btn' target={item.target}>Github</a>
                        </article>
                    ))
                }

            </div>
        </section>
    )
}

export default Portfolio