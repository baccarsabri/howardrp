import React from 'react';

import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';

var bnrimg = require('./../../images/banner/bg-maint.jpg');

class Tenant extends React.Component {
    render() {
        return (
            <>
                 <Header3 />
                <div className="page-content">
                <Banner title="TENANT" pagename="TENANT" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36" style={{textAlign: "center"}}>Tenant</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            <div className='max-mid-container'>
                              
                                <div className='wt-post-title'>
                                    <p> Howard Realty Partners is not only focused on property acquisition and management, we also assist our clients when it comes to ensuring that their investments will bring a good return to them by filtering the possible occupants of their buildings. With that, our team of professional realtors sees to it that proper background check be done toward prospective tenants.</p>

                                    

                                </div>
                            </div>

                            {/* TITLE END */}
                         
                        </div>
                    </div>
                    </div>
                    
                    {/* SECTION CONTENT END */}
                </div>
           

                <Footer />
            </>
        );
    };
};

export default Tenant;