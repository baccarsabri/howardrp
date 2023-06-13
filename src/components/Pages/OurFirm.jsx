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

var bnrimg = require('./../../images/banner/hollywood.jpg');

class OurFirm extends React.Component {
   
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
                    <Banner title="Our Firm" pagename="OurFirm" bgimage={bnrimg.default}/>
                   <div class="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap"><div class="container"><div class="max-mid-container"><div class="blog-post date-style-1 blog-detail text-black"><div class="wt-post-title "><h1 class="text-black font-40 letter-spacing-1 font-weight-600 text-center">Our Firm</h1></div><div class="wt-post-text"><p>Howard Realty Partners, Inc. stems from the brainchild and know-how of Henry Ran and Herbert Hawkins Realtors in 1975.</p><p>In or about 1985, Henry Ran, Howard's father was actively assisting buyers and sellers in real estate transactions. Henry immigrated as an international student in 1983 and decided to start a family and future here. He first started his career in real estate and obtained his salesperson's license in January 1985.</p><p>Henry learned as a young agent from Herbert Hawkins which was a very innovative realtor of his time. Mr. Hawkins started working in real estate in 1946 in Temple City, California. Later, he transformed the real estate industry with full page newspaper advertising and teaching his workforce of about 4,000 agents and employees how to buy and sell real estate.</p><p>Henry worked under Mr. Hawkins' wing and learned so much from him. Eventually, he did large residential land and multi-family deals under his team's guidance and support. Back then, without the technology that is readily available today, being a listing or selling agent is a grueling process where you have to visit your local board to look through a book of listings and find the property on the Thomas Guide.</p><p>In 2010, Henry's son, Howard, graduated UCLA and worked under his father. His passion and dedication in learning the art of buying and selling real estate re-energized his father’s numerous clientele that worked to Howard’s advantage throughout the years. His approach of ‘putting clients first,’ plus his charisma, paved the way for Howard to conquer the real estate world, continuously gaining and keeping clients’ trust. He always goes an extra mile in assisting his clients which led to mutual trust. His mantra of never sacrificing quality over profit has proven to work for him all this time.</p><p>As history repeats itself, Howard himself has a very concrete training ground under his father and renowned broker Thomas “Tom” Crosby. He started as a Broker Associate for Coldwell Banker before he decided to take a bold move of putting up his own agency to serve his clients and the local community. He has established himself in the area of San Gabriel Valley and, eventually, expanded to San Francisco as more and more clients from nearby cities are beginning to flock.</p><p>At Howard Realty Partners, Inc., the clients’ needs will always be on top of our priorities, no matter what, we are here for you.</p></div></div></div></div></div>
                </div>

                <Footer2 />
                </div>
            </>
        );
    };
};

export default OurFirm;