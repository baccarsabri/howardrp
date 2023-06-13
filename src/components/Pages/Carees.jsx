import React from 'react';
import GoogleMaps from "simple-react-google-maps"
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/bg-carees.jpg');

class Careers extends React.Component {
    render() {
        return (
            <>
              <Header3 />
                <div className="page-content">
                <Banner title="CAREERS" pagename="CAREERS" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36" style={{textAlign: "center"}}>CAREERS</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            <div className='max-mid-container'>
                                <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        Harvard Realty Partners welcomes a new breed of realtors. As an organization, our mission is to place our clients’ needs on top of everything else. If you share the same passion, and you want to take your career to the next level, then you’re in for a big change!
                                        </span> </h2>
                                </div>
                                <div className='wt-post-title'>
                                    <p>We are looking for additional team members who are open to reinventing themselves and want to earn more.</p>
                                    <p>If you think you possess the following skillset, then you might be the one we’re looking for :</p>
                                    <ul className='careers-list'>
                                        <li>Outgoing</li>
                                        <li>With Strong Work Ethic</li>
                                        <li> Has a Positive Attitude</li>
                                        <li> Meticulous and Intense Attention to Detail</li>
                                        <li>Team Player</li>
                                        <li>Self Motivated</li>
                                        <li>Flexible</li>
                                        <li>Legally allowed to work in CA as a Realtor or Broker</li>
                                    </ul>
                                    <p> What are you waiting for? Send us your CV/Resume at management@howardrp.com. We will respond once you have been shortlisted.</p>
                                    <p>At Howard Realty Partners, we choose the best people to work with the best clients. Be one of us!!

</p>
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

export default Careers;