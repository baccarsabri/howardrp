import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const members = [
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        fullname: 'DAVID N.',
        position: '',
        description: 'Howard is extremely knowledgeable and confident in his ability to be the best broker for you. He clearly demonstrates a high level of integrity and professionalism in every manner of his work. Though he has just been practicing real estate for a few years, his maturity is far beyond his age because of inquisitiveness to…',

    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        fullname: 'WINNIE T.',
        position: '',
        description: 'Howard Ran is extremely hard working and will get you the best deals in town. Howard takes the time to get to know his clients, accommodating to their preferences and needs. If you are in search of a home or property, Howard & Henry are definitely your go-to’s!',
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        fullname: 'DIANNE D.',
        position: '',
        description: 'I would highly recommend Henry and Howard Ran. There are very professional and informative. There had open house six week-ends in a row, both Sat & Sun. until my house sold. They were in constant contact with me to keep me informed of all events. Very committed to insure a successful sale.',

    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        fullname: 'JOANNIE S.',
        position: '',
        description: 'Howard was extremely helpful and really went out of his way to answer my questions and resolve any issues I had. He was very knowledgable and SO wonderful that I had to write this review! If you want business conducted VERY pleasantly and efficiently- go to him! The honesty, responsiveness, and overall service are unparalleled!!!',
    },
]

var bgimg = require('./../../images/background/ptn-1.png');

class Testimonials extends React.Component {

    render() {
        const options = {
            loop: true,
            autoplay: false,
            margin: 80,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full p-t140 bg-repeat tm-testimonial-wrap" style={{ backgroundImage: 'url(' + bgimg.default + ')' }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head text-left">
                                <h2 className="text-uppercase font-36"></h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-content">
                                <OwlCarousel className="owl-carousel testimonial-home" {...options}>
                                    {members.map((item, index) => (
                                        <div className="item" key={index}>
                                            <div className="testimonial-6">
                                            {/*  <div className="testimonial-pic-block">
                                                    <div className="testimonial-pic">
                                               *<img src={item.image.default} alt="" width={132} height={132} /> 
                                                    </div>
                                                </div>
                                                */} 
                                                <div className="testimonial-text clearfix bg-white">
                                                    <div className="testimonial-detail clearfix">
                                                        <strong className="testimonial-name">{item.fullname}</strong>
                                                        <span className="testimonial-position p-t0">{item.position}</span>
                                                    </div>
                                                    <div className="testimonial-paragraph text-black p-t15">
                                                        <span className="fa fa-quote-left" />
                                                        <p>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </OwlCarousel>

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                            <strong>Client</strong>
                            <span className="text-black">Says</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials;