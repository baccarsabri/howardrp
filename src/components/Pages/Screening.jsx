import React from 'react';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/background/bg.jpg');

class Screening extends React.Component {
    render() {
        return (
            <>
               <Header3 />
                <div className="page-content">
                <Banner title="SCREENING" pagename="SCREENING" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36" style={{textAlign: "center"}}>Screening</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            <div className='max-mid-container'>
                                <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        HOWARD REALTY PARTNERS, A REAL ESTATE BROKERAGE, CAN ASSIST OWNERS WITH TENANT SCREENING IN SEVERAL WAYS:
                                        </span> </h2>
                                </div>
                                <div className='wt-post-title'>
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Background Checks:</span>Howard Realty Partners can conduct background checks on potential tenants to verify their employment history, creditworthiness, and criminal record. This helps ensure that the tenant is financially stable, responsible, and unlikely to pose a risk to other tenants or the property.</p>

                                    <p><span className='text-black font-14 letter-spacing-1 font-weight-600'>Rental History Verification: </span>Howard Realty Partners can also verify a potential tenant's rental history, including references from previous landlords, to ensure that they have a good track record of paying rent on time and taking care of the property.</p>

                                
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Credit Checks:</span> Howard Realty Partners can run credit checks on potential tenants to assess their creditworthiness and financial stability. This helps ensure that the tenant is able to pay rent on time and is not likely to default on their lease.</p>

                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Legal Compliance:</span> Howard Realty Partners can also ensure that all tenant screening processes are compliant with all applicable laws and regulations, including fair housing laws and privacy laws.</p>
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'> Selection of Suitable Tenants: </span>Based on the results of the tenant screening process, Howard Realty Partners can help landlords select suitable tenants who are likely to be responsible, reliable, and good tenants overall.</p>
                                    <p>True to our promise of helping our clients all the way, our team at Howard Realty Partners can assure them that we will help them find the most suitable occupants the best way we can, legally speaking. We will make sure that we find a tenant who is responsible, decent, reliable, and trustworthy. This is our way of assuring our clients that there’s no threat of missed rent payments nor damage to their property, thus giving them peace of mind that is priceless and non-negotiable.</p>

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

export default Screening;