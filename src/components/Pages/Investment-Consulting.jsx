import React from 'react';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/main-slider/slider1/bg1.jpg');

class INVESTMENT_CONSULTING extends React.Component {
    render() {
        return (
            <>
               <Header3 />
                <div className="page-content">
                <Banner title="INVESTMENT CONSULTING" pagename="INVESTMENT CONSULTING" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text font-36" style={{textAlign: "center"}}>Investment Consulting</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            <div className='max-mid-container'>
                                <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        AS A REAL ESTATE BROKERAGE, WE OFFER A RANGE OF SERVICES TO HELP CLIENTS MAKE INFORMED REAL ESTATE INVESTMENT DECISIONS. OUR INVESTMENT CONSULTING SERVICES ARE DESIGNED TO PROVIDE CLIENTS WITH THE KNOWLEDGE AND EXPERTISE NEEDED TO MAKE STRATEGIC REAL ESTATE INVESTMENT DECISIONS.
                                        </span> </h2>
                                </div>
                                <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        OUR INVESTMENT CONSULTING SERVICES ARE OFFERED ON AN HOURLY FEE BASIS. THIS MEANS THAT CLIENTS CAN ENGAGE OUR SERVICES FOR AS LONG OR AS LITTLE AS THEY NEED, AND ONLY PAY FOR THE TIME THAT WE SPEND WORKING ON THEIR INVESTMENT PROJECT.
                                        </span> </h2>
                                </div>
                                <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        HERE ARE SOME EXAMPLES OF THE INVESTMENT CONSULTING SERVICES THAT WE CAN PROVIDE:
                                        </span> </h2>
                                        <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Market research and analysis: </span>We can help clients understand the current state of the real estate market, identify potential investment opportunities, and present comparable sales for better pricing. This can include analyzing market trends, identifying emerging neighborhoods, and evaluating market conditions.</p>

<p><span className='text-black font-14 letter-spacing-1 font-weight-600'>Investment strategy development: </span>We can work with clients to develop a real estate investment strategy that aligns with their goals, risk tolerance, and budget. This can include identifying investment criteria, evaluating potential investment properties, and creating an investment plan.</p>


<p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Property analysis and due diligence: </span>We can help clients evaluate potential investment properties by conducting a thorough property analysis and due diligence. This can include analyzing financial statements, evaluating property conditions, and identifying any potential risks.</p>

<p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Investment performance tracking: </span> We can help clients track the performance of their real estate investments and make adjustments to their investment strategy, as needed.</p>
<br/>
<p>Our team adheres to our mission of providing excellent service to our clients and we take that seriously. The moment they decide to put their funds into good use, that is when we come in. At Howard Realty Partners, we make sure that a quick return of their investment is on its way.</p>

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

export default INVESTMENT_CONSULTING;