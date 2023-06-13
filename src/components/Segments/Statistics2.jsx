import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';

var bgimg = require('./../../images/background/bg.jpg');

class Statistics2 extends React.Component {
    
    render() {
        
        return (
            <>
                <div className="section-full p-t90 p-b50 overlay-wraper bg-top-center bg-parallax tm-facts-wrap" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(" + bgimg.default + ")" }}>
                        <div className="overlay-main opacity-08 bg-black" />
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                <div className="some-facts">
                        		<div className="text-white">
                                <span className="font-40 font-weight-300  text-uppercase"></span>
                                <h2 className="font-50">
                                    <span className="text-yellow  text-uppercase">EXPERIENCE
<br/>BY THE NUMBERS</span>
                                </h2>
                                <p className="font-18 font-weight-300">Our firm prides itself in leading a team of real estate professionals dedicated to be the best in the industry and constantly perfect our trade.
                                </p>
                            </div>
                            </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="row some-facts-counter">
                                        <div className="col-md-4 col-sm-4 col-xs-4">
                                            <div className="wt-icon-box-wraper p-a10 text-white m-b30">
                                                <div className="icon-content text-center">
                                                    <div className="font-32 font-weight-600 m-b5 text-yellow"><CountUp end={26000} duration={3} />+</div>
                                                    <div className="wt-separator-outer m-b20"><div className="wt-separator bg-white" /></div>
                                                    <span className="text-uppercase">SQUARE FEET <br/> MANAGED</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4">
                                            <div className="wt-icon-box-wraper p-a10 text-white m-b30">
                                                <div className="icon-content text-center">
                                                    <div className="font-32 font-weight-600 m-b5 text-yellow">${<CountUp end={70} duration={3} />}MM</div>
                                                    <div className="wt-separator-outer m-b20"><div className="wt-separator bg-white" /></div>
                                                    <span className="text-uppercase">PROPERTIES SOLD OR <br/> LEASED</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-4">
                                            <div className="wt-icon-box-wraper p-a10 text-white m-b30">
                                                <div className="icon-content text-center">
                                                    <div className="font-32 font-weight-600 m-b5 text-yellow"><CountUp end={38} duration={3} />+</div>
                                                    <div className="wt-separator-outer m-b20"><div className="wt-separator bg-white" /></div>
                                                    <span className="text-uppercase">YEARS OF <br/> EXPERIENCE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
};

export default Statistics2;