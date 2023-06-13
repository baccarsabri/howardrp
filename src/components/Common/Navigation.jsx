import React from 'react';
import { NavLink } from 'react-router-dom';
import users from '../../data/users.json';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
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

        loadScript('./assets/js/custom.js');

    };

    render() {
        return (
            <>
                    <ul className=" nav navbar-nav">
                        <li className="">
                            <NavLink  to={"/home"}>Home</NavLink>
                        
                        </li>
                        <li className="has-child">
                            <NavLink to={"#"}>About</NavLink>
                          
                            <ul className="sub-menu v-sub-menu">
                                <li className="has-child">
                                    
                                    <NavLink to={"/aboutus"}>Our Team</NavLink>
                                  
                                    <ul className="sub-menu">
                                        

                                        {users.map(item => (
                                            <li>
                                            <NavLink to={`/about/${item.name}`}>{item.name} {item.lastName}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li >
                                    <NavLink to={"/our-firm"}>Our Firm</NavLink>
                                </li>
                            </ul>
                        </li>
                   <li>
                         
                            <NavLink to={"#"}>HOMEOWNERS</NavLink>
                            <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                                <li><NavLink to={"/buyers"}>Buyers</NavLink></li>
                                <li><NavLink to={"/sellers"}>Sellers</NavLink></li>
                            </ul>
                        </li>
                   
                    
                        <li>
                            <NavLink to={"/tenant"}>INVESTORS</NavLink>
                            <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/investment-consulting"}>Investment Consulting</NavLink></li>
                                <li><NavLink to={"/single-family"}>Single Family Investment</NavLink></li>
                                <li><NavLink to={"/multi-family"}>Multi-Family Investment</NavLink></li>
                                <li><NavLink to={"/office-buildings"}>Office Buildings</NavLink></li>
                                <li><NavLink to={"/strip-retail"}>Strip Centers/Retail</NavLink></li>
                                <li><NavLink to={"/land-acquisitions"}>Land Acquisitions</NavLink></li>
                                <li><NavLink to={"/property-management"}>Property Management</NavLink></li>
                                <li><NavLink to={"/login-portal"}>Showcase</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={"/tenant"}>TENANTS</NavLink>
                            <ul className="sub-menu v-sub-menu">
                                <li><NavLink to={"/screening"}>Screening</NavLink></li>
                                <li><NavLink to={"/maintenance"}>Maintenance</NavLink></li>
                                <li><NavLink to={"/emergency"}>Emergency</NavLink></li>
                                <li><NavLink to={"/login-portal"}>Tenant Portal login</NavLink></li>
                            </ul>
                        </li>
                        <li className="submenu-direction">
                            <NavLink to={"/contactus"}>CONTACTS</NavLink>
                          
                        </li>
                        <li className="submenu-direction">
                            <NavLink to={"/giving"}>GIVING</NavLink>
                          
                        </li>
                        <li className="submenu-direction">
                            <NavLink to={"/careers"}>CAREERS</NavLink>
                          
                        </li>
                    </ul>
            </>
        );
    };
};

export default Navigation;