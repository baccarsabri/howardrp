import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import TeamMembers2 from './../Segments/TeamMembers2';
import Services from './../Segments/Services';
import Story from './../Segments/Story';
import users from '../..//data/users.json'
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/ourFirm.jpg');

class AboutAll extends React.Component {
   
    componentDidMount() {
        
        
    }
    componentDidUpdate() {
       
        

    }
    render() {
        
        return (
            <>
            <div className="page-wraper">
                <Header2 />

                <div className="page-content">
                    <Banner title="About us" pagename="About us" bgimage={bnrimg.default}/>
                  <div class="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
                    <div class="container">
                        <div class="max-mid-container">
                            <div class="blog-post date-style-1 blog-detail text-black">
                                <div class="wt-post-title ">
                                    <h1 class="text-black font-40 letter-spacing-1 font-weight-600 text-center">Meet the Team. Working for you.</h1>
                                    <h2 class="post-title"><span class="text-black font-20 letter-spacing-1 font-weight-600">The team that works for you</span></h2>
                                    </div>
                                    <div class="wt-post-text">
                                        <p>We are a father-son team with 40 years of combined real estate experience serving the Arcadia, Pasadena, San Marino and surrounding communities. When you choose us to assist you in your next transaction, you are empowering a team of two professionals to work for you. Combined with Henry’s decades of experience and Howard’s technological savvy internet and international marketing, your home will be prominently marketed to all interested parties! Don’t hesitate and call us today and hear it from us how we can help you in your next real estate transaction! Make an informed and correct decision before you choose your Broker. Call us today at 626-269-9996</p>
                                        </div>
                                        <div class="wt-post-title ">
                                            <h2 class="post-title"><span class="text-black font-20 letter-spacing-1 font-weight-600">Our interactive MLS Search, Caliho.me</span></h2>
   
                                            </div>
                                            <div class="wt-post-text">
                                                <p>We have a separate website completely in Chinese to cater for our Chinese overseas buyers interested in your property. Our global reach in the Pacific Rim (China, Taiwan, Hong Kong) is one of the many reasons why many people choose our team to represent them in real estate transactions. Call us today at 626-269-9996!</p>
                                                </div>
                                                <div class="caliho">
                                                    <a href="http://caliho.me" class="site-button outline  black button-app m-r15 m-b15"><span>SEARCH CALIHO.ME</span><em></em></a>
                                                    </div>
                                                    </div>
                                                    

                                                                        {users.map(item => (
                                            <blockquote class="aboutus-item">
                                            <div class="row profile-section">
                                                <div class="col-md-4 col-sm-6 tm-qt-img">
                                                    <img src={item.img} alt=""/></div>
                                                    <div class="col-md-8 col-sm-6 profile-desc">
                                                        <b class="font-30 profile-title">{item.name} {item.lastName}</b>
                                                        <br/>
                                                        {item.info1}
                                                        <div class="p-t15">
                                                            {item.info4}</div></div></div>
                                                            </blockquote>
                                        ))}
                                                                        </div></div></div>
                   
                </div>

                <Footer2 />
                </div>
            </>
        );
    };
};

export default AboutAll;