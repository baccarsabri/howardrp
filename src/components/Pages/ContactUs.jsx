import React from 'react';
import GoogleMaps from "simple-react-google-maps"
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/bg-contact.jpg');

class ContactUs extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                <Banner title="CONTACT" pagename="Contact us" bgimage={bnrimg.default}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36">CONTACT US</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="wt-box">
                                    <form className="contact-form cons-contact-form" method="post" action="form-handler.php">
                                        <div className="contact-one p-a40 p-r150">
                                            <div className="form-group contact-name-form">
                                                <input name="username" type="text" required className="form-control" placeholder="FIRSTNAME" />
                                                <input name="username" type="text" required className="form-control" placeholder="LASTNAME" />
                                            </div>
                                            <div className="form-group">
                                                <input name="tel" type="text" className="form-control" required placeholder="PHONE NUMBER" />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" type="text" className="form-control" required placeholder="EMAIL" />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" rows={3} className="form-control " required placeholder="Message" defaultValue={""} />
                                            </div>
                                            <button name="submit" type="submit" value="Submit" className="site-button black radius-no text-uppercase">
                                                <span className="font-12 letter-spacing-5">Submit</span>
                                            </button>
                                            <div className="contact-info bg-black text-white p-a30">
                                                <div className="wt-icon-box-wraper left p-b30">
                                                    <div className="icon-sm"><i className="iconmoon-smartphone-1" /></div>
                                                    <div className="icon-content text-white ">
                                                        <h5 className="m-t0 text-uppercase">Phone number</h5>
                                                        <p>+1 (626) 556-9996</p>
                                                    </div>
                                                </div>
                                                <div className="wt-icon-box-wraper left p-b30">
                                                    <div className="icon-sm"><i className="iconmoon-email" /></div>
                                                    <div className="icon-content text-white">
                                                        <h5 className="m-t0  text-uppercase">Email address</h5>
                                                        <p>management@howardrp.com</p>
                                                    </div>
                                                </div>
                                                <div className="wt-icon-box-wraper left">
                                                    <div className="icon-sm"><i className="iconmoon-travel" /></div>
                                                    <div className="icon-content text-white">
                                                        <h5 className="m-t0  text-uppercase">Address info</h5>
                                                        <p>630 W Duarte Rd Arcadia, CA</p>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-full">
                        <div className="gmap-outline">
                        <GoogleMaps
                                apiKey={"AIzaSyBjn3rER9marXguLuYPwqnqgsMykmcVgW8"}
                                style={{height: "460px", width: "100%"}}
                                zoom={12}
                                center={{lat: 34.073280, lng: -118.251410}}
                                markers={{lat: 34.073280, lng: -118.251410}} //optional
                                />
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    <div className='container'>
                        <div className='max-mid-container'>
                            <div className='blog-post date-style-1 blog-detail text-black'>
                                <div className='wt-post-title '>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                            CONTACT US
                                        </span>
                                    </h2>
                                
                                </div>
                                <div className='wt-post-text'>
                                    <p>1437 Ocean Ave San Francisco, CA 94112<br/> +1 (628)666-9996</p>
                                    <p>2990 Huntington Drive San Marino, CA 91108 <br/> +1 (626)978-9996</p>
                                </div>
                                <div className='wt-post-title '>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                            EMAIL US
                                        </span>
                                    </h2>
                                
                                </div>
                                <div className='wt-post-text'>
                                    <p>management@howardrp.com</p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
              </div>

                <Footer2 />
            </>
        );
    };
};

export default ContactUs;