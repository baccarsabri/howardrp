import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/portrait/pic2.jpg'),
    require('./../../images/gallery/portrait/pic3.jpg'),
    require('./../../images/gallery/portrait/pic4.jpg'),
    require('./../../images/gallery/portrait/pic5.jpg'),
    require('./../../images/gallery/portrait/pic6.jpg'),
]

var img1 = require('./../../images/Howard1.png');
var img2 = require('./../../images/chloe.png');
var img3 = require('./../../images/gallery/pic1.jpg');
var img4 = require('./../../images/gallery/pic3.jpg');
var img5 = require('./../../images/gallery/pic5.jpg');
var img6 = require('./../../images/gallery/pic4.jpg');
var img7 = require('./../../images/gallery/pic8.jpg');

class About2 extends React.Component {
   
    render() {
       // var img = require(this.props.user.img);
        
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: false,
        };
        return (
            <>
        
           <div className="section-full p-tb90 square_shape1 square_shape3 tm-blog-single-wrap">
           <div className="max-mid-container">
                                       
                                       <blockquote className='aboutus-item'>
                                           <div className="row profile-section">
                                               <div className="col-md-4 col-sm-6 tm-qt-img">
                                                   <img src={this.props.user.img} alt=""/>
                                               </div>
                                               <div className="col-md-8 col-sm-6 profile-desc">
                                                   <b className='font-30 profile-title'> {this.props.user.name} {this.props.user.lastName}</b>
                                                   <br/>
                                                   {this.props.user.info1}
                                                   <br/>
                                                   {this.props.user.info2}
                                                   <br/>
                                                   {this.props.user.info3}

                                               </div>
                                           </div>
                                       </blockquote>
                                       {this.props.user.PROFESSIONALISM ? (
  <div>
  <div className='blog-post date-style-1 blog-detail text-black'>
   <div className='wt-post-title '>
       <h2 className='post-title'>
       <span class="text-black font-20 letter-spacing-1 font-weight-600">Professionalism</span>
       </h2>

   </div>
   <div class="wt-post-text">
   {this.props.user.PROFESSIONALISM.map(item => (
                                            <p>{item}</p>
                                        ))}
   </div>
   <div class="wt-post-title "><h2 class="post-title"><span class="text-black font-20 letter-spacing-1 font-weight-600">Experience</span></h2></div>
   <div class="wt-post-text">
   {this.props.user.EXPERIENCE.map(item => (
                                            <p>{item}</p>
                                        ))}
   </div>


  </div>
  <div class="wt-post-title "><h2 class="post-title"><span class="text-black font-20 letter-spacing-1 font-weight-600">Education</span></h2></div>
  <div class="wt-post-text">
  {this.props.user.EDUCATION.map(item => (
                                            <p>{item}</p>
                                        ))}
  </div>
  <div class="wt-post-title "><h2 class="post-title"><span class="text-black font-20 letter-spacing-1 font-weight-600">Licenses and Credentials</span></h2><ul class="about-ul">
  {this.props.user.LICENSES_AND_CREDENTIALS.map(item => (
                                            <li>{item}</li>
                                        ))}
    </ul></div>
  </div>
                                       ) :(
                                        <div className='blog-post date-style-1 blog-detail text-black'>
                                            <div className='wt-post-text'>
                                            {this.props.user.p.map(item => (
                                            <p>{item}</p>
                                        ))}
                                            </div>
                                        </div>
                                       )

                                       }
                                     
                                   </div></div>
            </>
        );
    }
};

export default About2;