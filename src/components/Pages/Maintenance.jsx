import React from 'react';

import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import Header3 from '../Common/Header3';
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/bg-maint.jpg');

class Maintenance extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                <div className="page-content">
                <Banner title="Maintenance" pagename="Maintenance" bgimage={bnrimg.default}/>
                <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 tm-shortcode-wrap">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* TITLE START */}
                            <div className="section-head text-left text-black">
                                <h2 className="text-uppercase font-36" style={{textAlign: "center"}}>Maintenance</h2>
                                <div className="wt-separator-outer">
                                    <div className="wt-separator bg-black" />
                                </div>
                            </div>
                            <div className='max-mid-container'>
                                <div className='wt-post-title'>
                                    <h2 className='post-title'>
                                        <span className='text-black font-20 letter-spacing-1 font-weight-600'>
                                        HOWARD REALTY PARTNERS, A REAL ESTATE BROKERAGE, CAN ALSO ASSIST TENANTS WITH PROPERTY MAINTENANCE IN SEVERAL WAYS:
                                        </span> </h2>
                                </div>
                                <div className='wt-post-title'>
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Prompt Response:</span>When tenants report maintenance issues or repair requests, Howard Realty Partners can respond promptly to ensure that the issue is addressed as quickly as possible. They have a team of trusted and reliable contractors who can carry out repairs or maintenance work in a timely and efficient manner.</p>

                                    <p><span className='text-black font-14 letter-spacing-1 font-weight-600'>Coordination of Repairs: </span>Howard Realty Partners can coordinate and supervise all necessary repairs, ensuring that the work is completed to a high standard and in accordance with all applicable laws and regulations.</p>

                                
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Follow-up:</span> After the repairs have been completed, Howard Realty Partners can follow up with the tenant to ensure that the work has been completed satisfactorily and that the tenant is satisfied with the outcome.</p>

                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'>Preventative Maintenance:</span> Howard Realty Partners can also provide tenants with guidance and advice on preventative maintenance, such as changing air filters, checking smoke detectors, and other routine tasks that can help keep the property in good condition and prevent more serious issues from arising.</p>
                                    <p> <span className='text-black font-14 letter-spacing-1 font-weight-600'> 24/7 Emergency Maintenance: </span>In the case of an emergency maintenance issue, such as a burst pipe or electrical outage, Howard Realty Partners can provide 24/7 emergency maintenance services to ensure that the issue is addressed as quickly as possible and to minimize any damage or inconvenience to the tenant.</p>
                                    <p>Not all realty firms are providing the most crucial after-sales service. But at Howard Realty Partners, we are committed to help our clients manage their properties which includes helping tenants feel more comfortable and secure in their homes. We will make sure that no sort of damage or broken pipes or electrical issues or anything that would hamper a nice stay takes place within the building. We have a team of trusted skilled workers who are on call - day and night - and will promptly resolve any issue. As we want to provide peace of mind to our clients, the same goes to the tenants, and will make their stay one for the books.</p>

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

export default Maintenance;