import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Footer from '../Common/Footer';
import Banner from './../Segments/Banner';

import { collection, getDocs, orderBy, query } from 'firebase/firestore';

import { db } from '../../firebase';
import Footer2 from '../Common/Footer2';




const projects = [
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/gallery/portrait/pic6.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/gallery/portrait/pic7.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/gallery/portrait/pic1.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/gallery/portrait/pic2.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic3.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic4.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/gallery/portrait/pic5.jpg'),
        title: 'Triangle Concrete House on lake',
        description: 'Morbi mattis ex non urna condimentum, eget eleifend diam molestie. Curabitur lorem enim, maximus non null.',
        filter: 'cat-1'
    }
]

var bnrimg = require('./../../images/background/bg2.jpg');

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          houses: [],
          load:false
          
        };
      }


      fetchHouses = async () => {
        try {

    const housesRef = collection(db, "house");
      const q = query(housesRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
    
          const houseData = [];
          querySnapshot.forEach((doc) => {
            houseData.push({ id: doc.id, ...doc.data() });
          });
    
          console.log(houseData);
          this.setState({ houses: houseData });
        } catch (error) {
          console.log('Error listing houses:', error);
        }
      };

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
 
      loadScript('./assets/js/custom.js');

      this.fetchHouses();
      setTimeout(() => {
        this.setState({ load: true });
      }, 1000);

      
    };
    render() {
        return (
            <>
                <Header2 />
                <div className="page-content">
                    <Banner title="Portfolio" pagename="Portfolio" bgimage={bnrimg.default} />

                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb90 tm-work-wrap">
                        <div className="container">
                            {/* PAGINATION START */}
                          
                            {/* PAGINATION END */}
                        </div>
                        {/* GALLERY CONTENT START */}
                        <div className="portfolio-wrap mfp-gallery news-grid clearfix">
                            <div className="container-fluid">
                                <div className="row">
                                    {this.state.houses.length >0 && this.state.houses.map((item, index) => (
                                         <NavLink to={`/post-gallery/${item.id}`}>
                                        <div key={index} className={` masonry-item col-lg-4 col-md-6 col-sm-6 m-b30`}>
                                            <div className="wt-img-effect ">
                                                <img src={item.mainPhoto} alt="" style={{height:'700px', width:'500px'}} />
                                                <div className="overlay-bx-2 ">
                                                    <div className="line-amiation  p-a40">
                                                        <div className="wt-post-info text-white">
                                                            <div className="wt-post-title ">
                                                                <h2 className="post-title"><NavLink to={`/post-gallery/${item.id}`} className="text-white font-18 letter-spacing-4 font-weight-600">{item.title}</NavLink></h2>
                                                            </div>
                                                            <div className="wt-post-meta ">
                                                                <ul>
                                                                
                                                                   
                                                                </ul>
                                                            </div>
                                                            <div className="wt-post-text">
                                                                <p>{item.description}</p>
                                                            </div>
                                                            <NavLink to={`/post-gallery/${item.id}`} className="v-button letter-spacing-4 font-12 text-uppercase p-l20">Read More</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </NavLink>
                                    ))}

                                </div>
                        
                            </div>
                            <Footer2/>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>
  
               
           
            </>
        );
    };
};

export default Portfolio;