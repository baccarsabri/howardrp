import React from 'react';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/bg-multi.jpg');

class Multi_family extends React.Component {
    render() {
        return (
            <>
               <Header3 />
                <div className="page-content">
                <Banner title="MULTI-FAMILY INVESTMENT" pagename="MULTI-FAMILY INVESTMENT" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text font-36" style={{textAlign: "center"}}>Multi-Family Investment</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            <div className='max-mid-container'>
                                <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        HOWARD REALTY PARTNERS SPECIALIZES IN MULTI-FAMILY INVESTMENT. THE YEARS WE HAVE SPENT ON DOING IN-DEPTH RESEARCH HAVE GIVEN US ALL THE KNOWLEDGE THAT WE NEED TO HELP OUR CLIENTS GAIN MORE FROM THIS TYPE OF INVESTMENT.
                                        </span> </h2>
                                </div>
                              
                                <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        HERE’S WHAT WE CAN OFFER :
                                        </span> </h2><br/>
<p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Provide Market Knowledge and Insight:  </span>Our firm with decades of experience will have a deep understanding of the local multi-family property market, including trends, pricing, and inventory. They can help a client identify the best areas to invest in and provide insight into potential future growth areas.</p>

<p><span className='text-black font-14 letter-spacing-1 font-weight-600'>Rental Reports: </span>We have tools available which can assist investors to make sound and prudent decisions on what is the market rental rate for your potential or current investments. Always stay up to date on the current market rents to ensure you are always in the loop.</p>


<p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Estimate of Value:  </span>If you are interested in purchasing or selling a multi-family investment, it is always sound to request a professional estimate of value of the recent comparable properties that have sold and traded in the area.</p>

<p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Access to Off-Market Opportunities: </span> We have exclusive access to properties that may not be publicly listed, giving their clients an advantage in finding and securing deals before they hit the open market.</p>
<p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Assistance with Due Diligence: </span> We can help their client with the due diligence process, including reviewing financials, property inspections, and legal documents. This can help ensure that the investment is sound and there are no surprises down the road.</p>
<p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Negotiation and Deal Structuring: </span> As your advocate, we negotiate favorable terms for you, the client, including purchase price, financing, and contingencies. We can also help structure deals in a way that maximizes the client's return on investment.</p>
<p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Property Management:  </span> We, through our affiliates, offer property management services, which can be especially useful for clients investing in multi-family properties. This can help ensure that the property is well-maintained, rents are collected on time, and any issues are addressed promptly.</p>

<p>Once we invest, we should not only consider the property that we are targeting, we must also take into very strict consideration the people that we will work with. Choose the ones that are knowledgeable, reliable, trusted, and who will treat you like a family and that’s what we do at Howard Realty Partners.</p>

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

export default Multi_family;