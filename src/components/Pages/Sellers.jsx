import React from 'react';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/gallery/bg5.jpg');

class Sellers extends React.Component {
    render() {
        return (
            <>
               <Header3 />
                <div className="page-content">
                <Banner title="Sellers" pagename="Sellers" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className='max-mid-container'>
                               
                                <div className='wt-post-title'>
                                    <p> <span className='text-black font-20 letter-spacing-1 font-weight-600'>ESTIMATE OF VALUE</span></p>
                                    <p>We, at Howard Realty Partners, can assure our clients of an extensive and thorough research of how they can get the most value for their property once they decide to place them in the market. Our realtors have gained expertise in doing Comparative Market Analysis (CMA) to ensure that we provide our clients the fair market value range of the property and assist them during the negotiation. As we always promise, our team is committed to helping our clients from beginning to end, keeping in mind that they are on top of our priorities, and we want only the best for them.</p>

                                </div>
                                <div className='wt-post-title'>
                                    <p> <span className='text-black font-20 letter-spacing-1 font-weight-600'>RENTAL REPORT</span></p>
                                    <p>At Howard Realty Partners, we provide a written report to showcase what other neighboring buildings are offering. The team will assist you in maximizing the full potential of the property and making it more profitable sooner rather than later, thus giving our clients a steady cash flow.</p>

                                </div>
                                <div className='wt-post-title'>
                                    <p> <span className='text-black font-20 letter-spacing-1 font-weight-600'>SHOWCASE</span></p>
                                    <p>The best marketing tool to promote a property is by partnering with a knowledgeable firm. Only the experts can provide the best option when it comes to placing your property on top of the market. That is what Howard Realty Partners can do for our clients. Through the years, we have established an extensive network in the real estate industry, which includes lenders, inspectors, and attorneys, that will make the buying and selling easy. It is our commitment to help our clients get the best deal of what their property can offer.</p>

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

export default Sellers;