import React from 'react';

import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';
import Footer3 from '../Common/Footer3';

var bnrimg = require('./../../images/banner/bg-login.jpg');

class Login extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                <div className="page-content">
                <Banner title="TENANT PORTAL LOGIN" pagename="TENANT PORTAL LOGIN" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text font-36" style={{textAlign: "center"}}>Tenant Portal Login</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            <div className='max-mid-container'>
                               
                                <div className='wt-post-title'>
                                    <p>If you are a new tenant, please allow 2-5 business days for your information to be updated on the system.</p>
                                    
 
                                    <p>  <span className='text-black font-20 letter-spacing-1 font-weight-600'> CLICK <a href={'https://www.cycsf.org/'} style={{color:'blue'}}>HERE</a> TO GO TO THE RENTREDI
                                        </span></p>
                                    
                                    
                                    
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

export default Login;