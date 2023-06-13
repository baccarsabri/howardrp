import React from 'react';

import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/main-slider/slider1/bg2.jpg');

class Giving extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                <div className="page-content">
                <Banner title="GIVING" pagename="GIVING" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36" style={{textAlign: "center"}}>GIVING</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            <div className='max-mid-container'>
                               
                                <div className='wt-post-title'>
                                    <p>While Howard Realty Partners is committed to serving the public with utmost care and dedication, we have also pledged to give back to the community and provide an opportunity to help those in need and get back on their feet.</p>
                                    <p>We believe in the power of youth, and we value their presence for the future. That is the reason our team has chosen to partner with a couple of non-profit organizations that focus on looking after the kids’ welfare and nurturing them to become the better versions of themselves for tomorrow.</p>
 
                                    <p> Click <a href={'https://www.cycsf.org/'} style={{color:'red'}}>here</a> to visit for      <span className='text-black font-14 letter-spacing-1 font-weight-600'>Community Youth Center of San Francisco
                                        </span></p>
                                    
                                    <p> Click <a href={'https://www.cycsf.org/'} style={{color:'red'}}>here</a> to visit for      
                                        <span className='text-black font-14 letter-spacing-1 font-weight-600'>Foothill Family
                                        </span></p>
                                        <p> Click <a href={'https://www.cycsf.org/'} style={{color:'red'}}>here</a> to visit for      
                                        <span className='text-black font-14 letter-spacing-1 font-weight-600'> Habitat for Humanity Greater Los Angeles
                                        </span></p>
                                    <p> We are continuously working to provide support to organizations that maintain the same advocacy that HRP has - making this world a better place.</p>
                                    
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

export default Giving;