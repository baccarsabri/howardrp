import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/bg1.jpg'),
    require('./../../images/gallery/bg2.jpg'),
    require('./../../images/gallery/bg3.jpg'),
    require('./../../images/gallery/bg4.jpg'),
    require('./../../images/gallery/bg5.jpg')
]

class About extends React.Component {

    render() {
        const options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 3000,
            //center: true,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                767: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div className="section-full p-t90 bg-gray tm-welcome-warp">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 text-uppercase text-black">
                                 
                                    <h2 className="font-30">
                                    UNPARALLELED FOUR DECADES OF EXPERIENCE
                                      </h2>
                                    <p className='text-lowercase'>in real estate, experience matters. our team has been working in the san gabriel valley of southern california since 1985. we understand you have many choices in selecting a real estate professional to handle your transaction. with our team here since 1985, we’ve sold hundreds of residential, commercial buildings and facilities. whether it is buying real estate, selling a home, leasing an office space or retail space, we are ready to assist you in your real estate transactions.
                                    </p>
                                    <NavLink to={"/aboutus"} className="btn-half site-button button-lg m-b15"><span>LEARN MORE ABOUT OUR TEAM</span><em /></NavLink>
                                </div>
                                <div className="col-md-7 col-sm-12">
                                    <div className="m-carousel-1 m-l100">
                                        <OwlCarousel className="owl-carousel home-carousel-1 owl-btn-vertical-center" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img wt-img-effect zoom-slow">
                                                        <img src={item.default} alt="" />
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="hilite-title p-lr20 m-tb20 text-right text-uppercase bdr-gray bdr-right">
                                <strong>Since 1985</strong>
                                <span className="text-black">Experience Working</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About;