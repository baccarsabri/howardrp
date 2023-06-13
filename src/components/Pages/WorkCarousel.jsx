import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/projects/pic-1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    },
    {
        image: require('./../../images/projects/pic-2.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    },
    {
        image: require('./../../images/projects/pic-3.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    },
    {
        image: require('./../../images/projects/pic-4.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    },
    {
        image: require('./../../images/projects/pic-5.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.speriores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam.'
    }
]
const gapslider = [
    {
        thumb: require('./../../images/banner/bg-login.jpg'),
        full: require('./../../images/banner/bg-login.jpg'),
    },
    {
        thumb: require('./../../images/banner/bg-carees.jpg'),
        full: require('./../../images/banner/bg-carees.jpg'),
    },
    {
        thumb: require('./../../images/banner/bg-emer.jpg'),
        full: require('./../../images/banner/bg-emer.jpg'),
    },
    {
        thumb: require('./../../images/banner/bg-carees.jpg'),
        full: require('./../../images/banner/bg-carees.jpg'),
    },
    {
        thumb: require('./../../images/banner/bg-carees.jpg'),
        full: require('./../../images/banner/bg-carees.jpg'),
    },
    {
        thumb: require('./../../images/banner/bg-carees.jpg'),
        full: require('./../../images/banner/bg-carees.jpg'),
    }
]

var bnrimg = require('./../../images/banner/5.jpg');

class WorkCarousel extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:false,
            center: true,
            items:3,
            margin:0,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                854:{
                    items:2
                }
                
            }
        };
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Improving quality of life with an integrated unified approach." pagename="Work carousel" bgimage={bnrimg.default}/>
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 bg-repeat tm-work-wrap" style={{ backgroundImage: 'url(images/background/ptn-1.png)' }}>
                        <div className="container-fluid">
                            <div className="section-content">
                                <div className="work-carousel-outer">
                                <OwlCarousel className="owl-carousel portfolio-carousel-nogap mfp-gallery gallery owl-btn-vertical-center" {...options}>
                                        {gapslider.map((item, index) => (
                                                        <div className="item" key={index}>
                                                            <div className="ow-portfolio">
                                                                <div className="ow-portfolio-img wt-img-overlay1 wt-img-effect zoom-slow">
                                                                    <img src={item.thumb.default} alt="" />
                                                                    <div className="overlay-bx">
                                                                        <div className="overlay-icon">
                                                                            <a href={item.full.default} className="mfp-link">
                                                                                <i className="fa fa-search-plus wt-icon-box-xs" />
                                                                            </a>
                                                                            <NavLink to={"project-detail"}>
                                                                                <i className="fa fa-external-link wt-icon-box-xs" />
                                                                            </NavLink>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                </OwlCarousel>
                                </div>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default WorkCarousel;