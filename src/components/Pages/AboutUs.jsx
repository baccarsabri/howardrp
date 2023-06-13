import React from 'react';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import TeamMembers2 from './../Segments/TeamMembers2';
import Services from './../Segments/Services';
import Story from './../Segments/Story';
import users from '../../data/users.json'
import Footer2 from '../Common/Footer2';

var bnrimg = require('./../../images/banner/3.jpg');

class AboutUs extends React.Component {
   
    componentDidMount() {
        console.log(this.props.match.params.aboutus);
        
    }
    componentDidUpdate() {
       
        

    }
    render() {
        const foundUser = users.find(user => user.name === this.props.match.params.aboutus);
        const nameLastNamel = foundUser.name+' '+foundUser.lastName
        console.log(foundUser);
        return (
            <>
            <div className="page-wraper">
                <Header2 />

                <div className="page-content">
                    <Banner title={nameLastNamel} pagename={this.props.match.params.aboutus} bgimage={foundUser.imgBack}/>
                    <About2 user={foundUser}/>
                   
                </div>

                <Footer2 />
                </div>
            </>
        );
    };
};

export default AboutUs;