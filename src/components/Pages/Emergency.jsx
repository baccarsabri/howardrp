import React from 'react';

import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/bg-emer.jpg');

class Emergency extends React.Component {
    render() {
        return (
            <>
                 <Header3 />
                <div className="page-content">
                <Banner title="Emergency" pagename="Emergency" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36" style={{textAlign: "center"}}>Emergency</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            <div className='max-mid-container'>
                                <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        HOWARD REALTY PARTNERS, A REAL ESTATE BROKERAGE, CAN ASSIST TENANTS WITH EMERGENCY PROPERTY MANAGEMENT REQUESTS IN SEVERAL WAYS:
                                        </span> </h2>
                                </div>
                                <div className='wt-post-title'>
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>24/7 Emergency Response: </span>Howard Realty Partners can provide tenants with a 24/7 emergency response service, meaning that tenants can contact them at any time of the day or night in the event of an emergency.</p>

                                    <p><span className='text-black font-14 letter-spacing-1 font-weight-600'>Rapid Response Time:    </span>Howard Realty Partners can respond rapidly to emergency property management requests, ensuring that the issue is addressed as quickly as possible. They have a team of trusted and reliable contractors who can carry out emergency repairs or maintenance work in a timely and efficient manner.</p>

                                
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Coordination of Emergency Repairs:</span>Howard Realty Partners can coordinate and supervise all necessary emergency repairs, ensuring that the work is completed to a high standard and in accordance with all applicable laws and regulations.</p>

                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Follow-up:</span> After the emergency repairs have been completed, Howard Realty Partners can follow up with the tenant to ensure that the work has been completed satisfactorily and that the tenant is satisfied with the outcome.</p>
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Tenant Safety and Security:</span>Howard Realty Partners prioritizes the safety and security of tenants in emergency situations, and will take all necessary steps to ensure that tenants are safe and secure while repairs or maintenance work is being carried out.</p>

                                    <p>Things can happen unexpectedly, and we don’t want to be caught off guard. That’s why, here at Howard Realty Partners, we make sure that the owners and tenants, alike, feel more secure and reassured during an emergency. We will make sure that we can minimize any damage or inconvenience caused by any emergency situation. In the event that unfortunate incidents happen, our team will carry out the emergency repairs to a high standard, and make sure that the property is safe and habitable for tenants, like nothing happened.</p>


                                </div>
                            </div>

                            {/* TITLE END */}
                         
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

export default Emergency;