import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import Home5 from './Pages/Home5';

import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

import NewsGrid from './Pages/NewsGrid';
import NewsListing from './Pages/NewsListing';
import NewsMasonary from './Pages/NewsMasonary';

import WorkGrid from './Pages/WorkGrid';
import WorkMasonary from './Pages/WorkMasonary';
import WorkCarousel from './Pages/WorkCarousel';
import ProjectDetail from './Pages/ProjectDetail';

import PostImage from './Pages/PostImage';
import PostGallery from './Pages/PostGallery';
import PostVideo from './Pages/PostVideo';
import PostRightSidebar from './Pages/PostRightSidebar';

import Accordian from './Pages/Accordian';
import AlertBox from './Pages/AlertBox';
import Button from './Pages/Button';
import Carousel from './Pages/Carousel';
import ClientLogo from './Pages/ClientLogo';
import Counter from './Pages/Counter';
import GoogleMap from './Pages/GoogleMap';
import IconBox from './Pages/IconBox';
import ListGroup from './Pages/ListGroup';
import ModalPopup from './Pages/ModalPopup';
import PricingTable from './Pages/PricingTable';
import Tabs from './Pages/Tabs';
import Table from './Pages/Table';
import Video from './Pages/Video'
import Careers from './Pages/Carees';
import Giving from './Pages/Giving';
import Screening from './Pages/Screening';
import Maintenance from './Pages/Maintenance';
import Emergency from './Pages/Emergency';
import Login from './Pages/Portal-login';
import Tenant from './Pages/Tenant';
import INVESTMENT_CONSULTING from './Pages/Investment-Consulting';
import Single_family from './Pages/Single-family';
import Multi_family from './Pages/Multi-family';
import AboutAll from './Pages/AboutAll';
import OurFirm from './Pages/OurFirm';
import Office_Building from './Pages/Office-Building';
import Strip_centers from './Pages/Strip-centers';
import Land from './Pages/Land-acquisation';
import Property_management from './Pages/Property-management';
import Portfolio from './Pages/portfolio';
import Sellers from './Pages/Sellers';
import Buyers from './Pages/Buyers';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Switch>
                            <Route path='/home' exact component={Home4} />
               
                            <Route path='/' exact component={Home4} />
                         

                           
                            <Route path='/contactus' exact component={ContactUs} />

                  

                 
                            <Route path='/project-detail' exact component={ProjectDetail} />

                            <Route path='/post-gallery/:id' exact component={PostGallery} />
                   
                            <Route path='/careers' exact component={Careers} />
                            <Route path='/giving' exact component={Giving} />
                            <Route path='/screening' exact component={Screening} />
                            <Route path='/maintenance' exact component={Maintenance} />
                            <Route path='/emergency' exact component={Emergency} />
                            <Route path='/login-portal' exact component={Login} />
                            <Route path='/tenant' exact component={Tenant} />
                            <Route path='/investment-consulting' exact component={INVESTMENT_CONSULTING} />
                            <Route path='/single-family' exact component={Single_family} />
                            <Route path='/multi-family' exact component={Multi_family} />
                            <Route path='/about/:aboutus' exact component={AboutUs} />
                            <Route path='/aboutus' exact component={AboutAll} />
                            <Route path='/our-firm' exact component={OurFirm} />
                            <Route path='/office-buildings' exact component={Office_Building} />
                            <Route path='/strip-retail' exact component={Strip_centers} />
                            <Route path='/strip-retail' exact component={Strip_centers} />
                            <Route path='/land-acquisitions' exact component={Land} />
                            <Route path='/property-management' exact component={Property_management} />
                            <Route path='/portfolio' exact component={Portfolio} />
                            <Route path='/sellers' exact component={Sellers} />
                            <Route path='/buyers' exact component={Buyers} />
                            <Route path='/terms' exact component={Terms} />
                            <Route path='/privacy' exact component={Privacy} />
                            <Route path='*' exact component={Home4} />

                            

                            
                            

                            

                            
                            <Route component={Error} />
                            
                            <Route component={Error} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;