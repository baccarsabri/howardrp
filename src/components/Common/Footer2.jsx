import React from 'react';
import { NavLink } from 'react-router-dom';

class Footer2 extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = { logo: require('./../../images/logo2.png').default };
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
        loadScript('./assets/js/app.js');
        loadScript('./assets/js/particles.js');
      
    };
    
    render() {

        return (
            <>
                <footer className="site-footer   footer-dark footer-wide relative overflow-hide" style={{display: 'contents'}}>
                    <div className="footer-bottom overlay-wraper">
                    <div className="container p-t10">
                    <div className="row">
                                <div className="col-md-4 wt-footer-bot-left">
                                <NavLink to={"/"}><img src={require("./../../images/logo2.png").default} width={140} height={58} alt="" /></NavLink>
                                </div>
                                <div className="col-md-4 text-center copyright-block p-t15">
                                    
                                </div>
                                <div className="col-md-4 wt-footer-bot-right p-t15">
                                    <ul className='footer-social'>
                                        <li><a target='_blank' href="https://www.facebook.com/usahome168/" className='fa fa-facebook'></a></li>
                                        <li><a target='_blank' href="https://twitter.com/usahome168" className='fa fa-twitter'></a></li>
                                        <li><a target='_blank' href="https://www.instagram.com/howardran/" className='fa fa-instagram'></a></li>

                                    </ul>
                                  
                                </div>
                            </div>
                            </div>
                            <br/>
                            <div className="hr-container" style={{
                                    marginLeft: '90px',
                                    marginRight: '75px'
                            }}>     <hr/></div>
                        <div className="overlay-main bg-black"  style={{ opacity:0}} />
                        <div className="container">
                            <div className='footer-contact-desktop'>
                            <i className='fa fa-map-marker'  style={{marginTop:'30px', fontSize:'24px'}}> </i>
                                    <div className='footer-contact-location'>
                                    
                                        <p>Los Angeles HQ / 630 W Duarte Road 201, Arcadia <br/>
                                        Pasadena / 2990 Huntington Drive, San Marino  <br/>
                                        Orange County / 8 Corporate Park 300, Irvine <br/>
                                        San Francisco / 1437 Ocean Ave, San Francisco</p>
                                    </div>
                                    <i className='fa fa-phone' aria-hidden="true" style={{marginTop:'30px', fontSize:'24px', paddingLeft:'10px'}}> </i>
                                <div className='footer-contact-phone'>
                              
                                <p>1 626 556 9996 <br/> 1 626 978 9996<br/> 1 949 998 9996 <br/> 1 628 666 9996</p>
                                </div>
                                <div className='footer-contact-mail'>
                                    <div className='footer-cooper'>
                                 
                                    <p>    <i className='fa fa-comments-o' aria-hidden="true" style={{ fontSize:'24px'}}> </i> cooper-hy</p>
                                  

                                    </div>
                                    <div className='footer-mail'>
                        
                                    <p>             <i className='fa fa-envelope-o' aria-hidden="true" style={{ fontSize:'24px'}}> </i> <a href='mailto:management@howardrp.com' style={{color:'#e6e8e5'}}>management@howardrp.com</a></p>
                                    </div>

                                </div>
                            

                            </div>
                            <div className="row">
                            
                                <div className="col-md-4 text-center copyright-block p-t15">
                                    <div className='footer-contact-mobile'>
                                    <div className='footer-contact'>
                                    <div className='footer-contact-location'>
                                        <i className='fa fa-map-marker' aria-hidden="true"> </i>
                                        <p>Los Angeles HQ / 630 W Duarte Road 201, Arcadia <br/>
                                        Pasadena / 2990 Huntington Drive, San Marino  <br/>
                                        Orange County / 8 Corporate Park 300, Irvine <br/>
                                        San Francisco / 1437 Ocean Ave, San Francisco</p>
                                    </div>
                           
                                <div className='footer-contact-phone'>
                                <i className='fa fa-phone' aria-hidden="true"> </i>
                                <p>1 626 556 9996 <br/> 1 626 978 9996<br/> 1 949 998 9996 <br/> 1 628 666 9996</p>
                                </div>
                                <div className='footer-contact-mail'>
                                    <div className='footer-cooper'>
                                    <i className='fa fa-comments-o' aria-hidden="true"> </i>
                                    <p>cooper-hy</p>
                                  

                                    </div>
                                    <div className='footer-mail'>
                                    <i className='fa fa-envelope-o' aria-hidden="true"> </i>
                                    <p>management@howardrp.com</p>
                                    </div>

                                </div>
                                </div>
                                    </div>
                                    </div>
                                    <br/>
                                    <span className="copyrights-text">© Copyright 2008-2022 / Howard Realty Partners, Inc. / All rights reserved / Powered by Sunshine + You / Since 1985 <br/>
                                    CA Broker Lic. 02128135 / NMLS ID 886370 /    <NavLink to={`/privacy`}>CA Privacy Policy </NavLink>/ <NavLink to={`/terms`}>Terms of Use </NavLink> / <a href="https://www.howardrp.com/" target="_blank">Corporate Site</a></span>
                                    
                         
                              
                            </div>
                        </div>
                    </div>
             
                </footer>


            </>
        );
    };
};

export default Footer2;