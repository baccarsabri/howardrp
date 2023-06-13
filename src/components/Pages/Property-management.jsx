import React from 'react';

import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer2 from '../Common/Footer2';

const images = [
    require('./../../images/sli.jpg'),
    require('./../../images/sli.jpg'),
    require('./../../images/sli.jpg'),
    require('./../../images/sli.jpg'),
    require('./../../images/sli.jpg'),
]

var bnrimg = require('./../../images/banner/bg-maint.jpg');

class Property_management extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: false,
        };
        return (
            <>
                 <Header3 />
                <div className="page-content">
                <Banner title="PROPERTY-MANAGEMENT" pagename="PROPERTY-MANAGEMENT" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 bg-gray square_shape2 tm-about2-wrap">
                        <div className="container">
                            <div className="section-content ">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6">
                                        <div className="m-about m-l50 m-r50">
                                        <OwlCarousel className="owl-carousel about-us-carousel owl-btn-bottom-right" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                <div className="ow-img wt-img-effect zoom-slow">
                                                <NavLink to={""}><img src={item.default} alt="" /></NavLink>
                                                    </div>
                                                </div>

                                            ))}

                                        </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 ">
                                        <div className="m-about-containt  text-black p-t30">
                                            <span className="font-40 font-weight-700">Property Management</span>
                                            <h2 className="font-16">Finding the best investment for our client’s hard-earned money and maximizing its full potential is the core of our business. Here, at Howard Realty Partners, we make sure that we help our clients in taking care of their properties and offer our best service to ensure that they get what they deserve.</h2>
                                            <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        Here are some of the services that we can provide in managing your property :
                                        </span> </h2>
                                </div>
                                <div className='wt-post-title'>
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>1. Finding Tenants:</span>One of the most important aspects of property management is finding tenants to occupy the property. Howard Realty Partners can help investors find suitable tenants by advertising the property, screening potential tenants, and negotiating leases on the investor's behalf.</p>

                                    <p><span className='text-black font-14 letter-spacing-1 font-weight-600'>2. Rent Collection:</span>Once tenants are in place, Howard Realty Partners can handle the rent collection process. They can set up automatic rent payments, track rent payments, and follow up on late payments, ensuring that the investor receives rental income in a timely manner.</p>

                                
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>3. Maintenance and Repairs:</span> Howard Realty Partners can also handle maintenance and repair issues that may arise during the tenancy. They can arrange for repairs to be carried out, ensuring that the property is well-maintained and any issues are addressed promptly.</p>

                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>4. Tenant Relations:</span> Howard Realty Partners can act as a mediator between the investor and the tenants, handling any disputes or complaints that may arise. They can also ensure that the tenant's needs are met and that the property is in compliance with all applicable laws and regulations.</p>
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>5. Financial Reporting:</span>
                                    Finally, Howard Realty Partners can provide investors with regular financial reporting, including income and expense statements, cash flow analysis, and other relevant information. This can help investors make informed decisions about their investment and ensure that their property is performing as expected.</p>
                                    <p>Finding the right property is the first step to a successful investment. But finding the best team of professional, hardworking, and trusted realtors who will take care of the investment puts an end to all the ‘what-ifs’ and ‘hows’ of the owners. At Howard Realty Partners, this is our mission - to provide services to our clients and help investors manage their properties more effectively that will save them time, reduce stress, and ensure that their investment is performing at its best potential.</p>

                                </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* SECTION CONTENT END */}
                </div>
           

                <Footer2 />
            </>
        );
    };
};

export default Property_management;