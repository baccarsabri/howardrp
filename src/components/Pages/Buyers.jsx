import React from 'react';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/gallery/bg5.jpg');

class Buyers extends React.Component {
    render() {
        return (
            <>
               <Header3 />
                <div className="page-content">
                <Banner title="Buyers" pagename="Buyers" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className='max-mid-container'>
                               
                                <div className='wt-post-title'>
                                    <p> <span className='text-black font-20 letter-spacing-1 font-weight-600'>FINANCING</span></p>
                                    <p>At Howard Realty Partners, we offer various financing options to our clients. Our team of reputable realtors ensures that buyers get the best deal suited to their needs, whether it be from mortgage loans, seller financing, or lease-to-own agreements. We help them evaluate their buying capacity and narrow down their options to find the best financing scheme that will not hurt their pockets.</p>

                                </div>
                                <div className='wt-post-title'>
                                    <p> <span className='text-black font-20 letter-spacing-1 font-weight-600'>HOME SEARCH</span></p>
                                    <p>Howard Realty Partners is focused on providing an in-depth assessment of the needs and financial capacity of the client.</p>
                                    <p>We provide an extensive analysis of the whole buying process by using the most comprehensive database available in the real estate market and can assist buyers in narrowing down their search based on specific criteria such as location, size, price range, and features.</p>
                                    <p>Our team of professional realtors will guide you all throughout and will ensure a smooth flow of the process and will make your investment experience a walk in the park.</p>
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

export default Buyers;