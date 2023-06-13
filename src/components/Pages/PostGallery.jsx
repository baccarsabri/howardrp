import React from 'react';
import { NavLink } from 'react-router-dom';
import Header2 from '../Common/Header2';
import Banner2 from '../Segments/Banner2';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Footer2 from '../Common/Footer2';
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import Header3 from '../Common/Header3';
import './portfolio.css';
import GoogleMaps from "simple-react-google-maps"



var bnrimg = require('./../../images/main-slider/slider1/bg1.jpg');
var background=require('../../images/testimonials/picGrey.jpg')



class PostGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          house: {
            photos:[]
          },
          load:false,
          photos:[],
          highlights:[],
          links:[]
          
          
        };
      }
    componentDidMount() {
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }


        this.fetchDocument();
        setTimeout(() => {
            this.setState({ load: true });
            console.log(this.state.house.highlights);
          }, 1000);
      
    }

     fetchDocument = async () => {
        try {

            const id = this.props.match.params.id;
          
          const houseRef = doc(db, 'house', id);
          const docSnapshot = await getDoc(houseRef);
  
          if (docSnapshot.exists()) {
            

            this.setState({ house: docSnapshot.data() , photos : docSnapshot.data().photos , highlights:docSnapshot.data().highlights , links:docSnapshot.data().links });
            console.log(docSnapshot.data() );
            const style = document.createElement('style');
    style.innerHTML = `
      @keyframes backgroundImageAnimation { 0% {
        background-image: url('${this.state.photos[0]}');
        background-position-x: center, center, center, center, center, center;
        background-position-y: center, center, center, center, center, center;   
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
        background-size: cover, cover, cover, cover, cover, cover;
        background-attachment: local, local, local, local, local, local;
        margin-bottom: 0px;
      }
        
        ${this.generateKeyframeStyles(this.state.photos)}
      }
    `;
    document.head.appendChild(style);
            
            //setDocumentData(docSnapshot.data());
          } else {
            // Document doesn't exist
            console.log('Document does not exist!');
          }
        } catch (error) {
          console.log('Error getting document:', error);
        }
      };
      generateKeyframeStyles(images) {
        const stepPercentage = 100 / images.length;
        let keyframeStyles = '';
      
        images.forEach((imageUrl, index) => {
          const percentage = (index+1) * stepPercentage;
          console.log('percent:: ',percentage,' index::',index ,'stepPercent::',stepPercentage)
          keyframeStyles += `${percentage}% { background-image: url('${imageUrl}');
          background-position-x: center, center, center, center, center, center;
        background-position-y: center, center, center, center, center, center;   
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
        background-size: cover, cover, cover, cover, cover, cover;
        background-attachment: local, local, local, local, local, local;
        margin-bottom: 0px;
     }`;
        });
        console.log(keyframeStyles);
      
        return keyframeStyles;
      }
      

    render() {
        const midpoint = Math.ceil(this.state.highlights.length / 2);

  // Split the highlights into two arrays
  const firstHalf = this.state.highlights.slice(0, midpoint);
  const secondHalf = this.state.highlights.slice(midpoint);


        return (
            <>
                 <Header3/>
             
                <div className="section-content">    
                    
                    {/* SECTION CONTENT START */}
               
                    <div data-id="fb452638-c59e-4618-a9b1-ab5f2eba609f" className="bc-container-wrapper component-wrapper bc-center root-component">
                    <div className="component-inner root-site-width media-ed6d49cc">
  <div className="bc-container">
    <div  className="bc-container-wrapper component-wrapper bc-center bg-cycle empty ">
      <div className="component-inner media-5e30a10a">
        <div className="bc-container"></div>
      </div>
    </div>
  </div>
</div>
          
            
            <div data-id="6744a7ca-44b2-4c03-a446-d0da25eab7b9" className="bc-container-wrapper component-wrapper bc-center root-component">
                <div className="component-inner root-site-width media-8f27ed8c">
                    <div className="bc-container">
                        <div data-id="4c88dace-019c-4176-a65c-7e22a4a7a511" className="bc-text-wrapper component-wrapper bc-center media-ed5a6a6">
                            <div className="component-inner media-9670348">
                                <div className="bc-text bc-component">
                                    <div className="bc-text-content" data-id="3df4cfd6-5b48-4ed0-9202-fa697253c663">
                                        <div className="bc-rich-text public-DraftEditor-content">
                                            <div>
                                                <p style={{textAlign:'center'}}>
                                                    <span style={{lineHeight :'45px',fontWeight:'200',fontSize:'45px',letterSpacing:'7px',textTransform:'uppercase',color:'rgb(255, 255, 255)',fontFamily:'CompassSerif'}}>{this.state.house.address}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-id="2bd42272-0f4b-4558-8f23-f1151ac1bb6d" className="bc-text-wrapper component-wrapper bc-center media-95afb47f">
                            <div className="component-inner media-535fc14f">
                                <div className="bc-text bc-component">
                                    <div className="bc-text-content" data-id="a4161aec-5f0f-448b-9272-0d4126d4bd3c">
                                        <div className="bc-rich-text public-DraftEditor-content">
                                            <div>
                                                <p>
                                                    <span style={{fontSize:'15px',backgroundColor :'rgb(0, 0, 0)',color:'rgb(255, 255, 255)',fontFamily:'CompassSerif',letterSpacing :'2.5px',textTransform:'uppercase'}}> 
                                                    { this.state.house.attr1 && 
                                                    <span> {this.state.house.attr1} </span>}
                                                    |   { this.state.house.attr2 && 
                                                    <span> {this.state.house.attr2} </span>} |
                                                     { this.state.house.attr3 && 
                                                    <span> {this.state.house.attr3} </span>} |
                                                { this.state.house.attr4 && 
                                                    <span> {this.state.house.attr4} </span>}  </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        
                        
                        <div className="container">
                            
                        <div className="container-fluid">
                         
                    
                                       <img src={this.state.photos[0]} style={{display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto', marginTop:'200px', width:'1000px' , height:'500px'}}/>
                                    <div className="wt-post-info p-t30 bg-white">
                                
                                        <div className="wt-post-title ">
                                            <h2 className="post-title"><span className="text-black font-20 letter-spacing-1 font-weight-600">{this.state.house.title}. </span></h2>
                                        </div>
                                        {/*<div className="wt-post-meta">
                                            <ul>
                                                <li className="post-date"> <strong>04 Dec</strong> <span> 2022</span> </li>
                                                <li className="post-comment">5 Comments </li>
                                            </ul>
                                        </div>*/}
                                        <div className="wt-post-text">
                                            <p>{this.state.house.description} </p>
                                           
                                        </div>
                                        <div className="row">
                                            <div className="col-md-8 col-sm-6">
                                                <div className="widget bg-white  widget_tag_cloud">
                                                    <h4 className="tagcloud text-uppercase">Links</h4>
                                                    <div className="tagcloud">
                                                    {this.state.links.map((item, index) => (
                                                                                                 <a href={item}> {item}</a>
                                                                                                ))}
                                               
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                    <br/><br/>
                                </div>
                          
                        
                                
                            </div>
                        </div>
                        <Banner2 beds={this.state.house.beds} baths={this.state.house.baths} sf={this.state.house.sfValue} sfLotValue={this.state.house.sfLotValue} garage={this.state.house.garage}  price={`$${this.state.house.price}`} bgimage={bnrimg.default}/>
                    </div>
                    {/* SECTION CONTENT END */}
                
                    <div>
                        
        {/* Render the image slider */}
   
        {/* Render the image slider */}
        <div>
            
        <div data-id="9da7df7b-819c-40df-a4a7-7a92699fad00" class="bc-text-wrapper component-wrapper bc-center media-6089d068" style={{paddingTop:'3rem'}}>
                            <div class="component-inner media-6c448b3e">
                                <div class="bc-text bc-component">
                                    <div class="bc-text-content" data-id="3d1a7c53-6e43-4742-b2a1-cb1bf1b587cb">
                                        <div class="bc-rich-text public-DraftEditor-content">
                                            <div>
                                                <h2>Photo Gallery</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            <div className='row'>
             
              <div className='col-4' >
             
          
              <Gallery>
              {this.state.photos.map((image, index) => (
            
             <Item
               original={image}
               thumbnail={image}
               width="1024"
               height="768"
             >
               {({ ref, open }) => (
                  <div data-id="6d9c5f75-a97b-401c-a764-9202212fa34d" className="bc-gallery-item-wrapper component-wrapper bc-center media-173eab67 pseudo-927d53a5 ">
                  <div className="component-inner">
                      <div className="bc-gallery-item">
                      <img  className=' img-fluid' ref={ref} style={{ maxWidth: '100%', height: 'auto', padding: '10px', margin: '32px' }} onClick={open} src={image} />
                      </div>
                  </div>
              </div>
            
                
               )}
             </Item>
          
          ))}

</Gallery>
              </div>
            </div>
          </div>
          <div className="bc-center root-component bc-grid-wrapper mq-b-768 media-83293a5 media-20279c65">
                <div className="bc-grid padding-3 break-b-1 root-site-width media-6ce16308">
                    <div className="bc-grid-inner">
                        <div className="bc-grid-columns">
                            <div className="bc-column col-6 media-6c448b3e" >
                                <div data-id="9ad89ab0-6535-4fdb-8a4b-09a9799b01d3" className="bc-container-wrapper component-wrapper bc-center empty media-6ec54bc6 media-f8250316 media-6dc6b201 media-f099055a" style={{backgroundImage:`url(${this.state.house.highlightsPhoto})`}}>
                                    <div className="component-inner media-e6006f7d media-8192d565 media-3193ae25">
                                        <div className="bc-container"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="bc-column col-6 media-6c448b3e">
                                <div  className="bc-container-wrapper component-wrapper bc-left media-a85592b4 media-e9e58a0e">
                                    <div className="component-inner media-6c448b3e media-2526a364">
                                        <div className="bc-container">
                                            <div  className="bc-container-wrapper component-wrapper bc-center media-8d541645 media-cbb5e766">
                                                <div className="component-inner media-f7321985 media-661ebd88 media-b401519a">
                                                    <div className="bc-container">
                                                        <div  className="bc-text-wrapper component-wrapper bc-center media-91aae325">
                                                            <div className="component-inner media-dadbc211">
                                                                <div className="bc-text bc-component">
                                                                    <div className="bc-text-content" >
                                                                        <div className="bc-rich-text public-DraftEditor-content">
                                                                            <div>
                                                                                <h2>Highlights</h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div data-id="9dd3cc1a-d86e-4dbd-a5f1-44c793ed6223" className="bc-center bc-grid-wrapper mq-c-480">
                                                            <div className="bc-grid padding-5 break-c-1">
                                                                <div className="bc-grid-inner">
                                                                    <div className="bc-grid-columns">
                                                                        <div className="bc-column col-6 media-6c448b3e">
                                                                            <div className="bc-text-wrapper component-wrapper bc-center">
                                                                                <div className="component-inner media-9a8da2f5 media-c3a77bc1">
                                                                                    <div className="bc-text bc-component">
                                                                                        <div className="bc-text-content" >
                                                                                            <div className="bc-rich-text public-DraftEditor-content">
                                                                                                <div>
                                                                                                {firstHalf.map((item, index) => (
                                                                                                    <p style={{marginBottom:'0px'}}>
                                                                                                        <span style={{fontSize:'15px'}}>• {item}</span>
                                                                                                    </p>
                                                                                                ))}
                                                                                                    
                                                                                                  
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="bc-column col-6 media-6c448b3e" >
                                                                            <div data-id="16250836-bc73-4f3f-9f7b-adfa4cfda7c6" className="bc-text-wrapper component-wrapper bc-center media-33f54b3e">
                                                                                <div className="component-inner media-ad8f315a">
                                                                                    <div className="bc-text bc-component">
                                                                                        <div className="bc-text-content" >
                                                                                            <div className="bc-rich-text public-DraftEditor-content">
                                                                                                <div>
                                                                                                {secondHalf.map((item, index) => (
                                                                                                    <p style={{marginBottom:'0px'}}>
                                                                                                        <span style={{fontSize:'15px'}}>• {item}</span>
                                                                                                    </p>
                                                                                                ))}
                                                                                               
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div  className="bc-container-wrapper component-wrapper bc-center empty">
                                                            <div className="component-inner media-6c448b3e">
                                                                <div className="bc-container"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>

   
    
             
 
                                
                                 
                                             
                                                   
                                          
                                      
                                        {this.state.house.lat && (
                                            <div>
<div data-id="9da7df7b-819c-40df-a4a7-7a92699fad00" class="bc-text-wrapper component-wrapper bc-center media-6089d068" style={{paddingTop:'3rem', paddingBottom:'3rem'}}>
                                                    <div class="component-inner media-6c448b3e">
                                                        <div class="bc-text bc-component">
                                                            <div class="bc-text-content" data-id="3d1a7c53-6e43-4742-b2a1-cb1bf1b587cb">
                                                                <div class="bc-rich-text public-DraftEditor-content">
                                                                    <div>
                                                                        <h2>Location</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                    <div className="section-full">
                     
                        <div className="gmap-outline">
                        <GoogleMaps
                                apiKey={"AIzaSyBjn3rER9marXguLuYPwqnqgsMykmcVgW8"}
                                style={{height: "460px", width: "100%"}}
                                zoom={12}
                                center={{lat: parseFloat(this.state.house.lat), lng: parseFloat(this.state.house.lng)}}
                                markers={{lat: parseFloat(this.state.house.lat), lng: parseFloat(this.state.house.lng)}} //optional
                                />
                        </div>
                    </div>
                                            </div>
                                                    
                )

                }
                                     
                                
  
                {this.state.house.plan && <div className="component-inner">
                   
                        <div data-id="83531342-273f-4cc2-988e-d8d9f7756638" className="bc-text-wrapper component-wrapper bc-center media-6089d068" style={{paddingTop:'3rem', paddingBottom:'3rem'}}>
                            <div className="component-inner media-6c448b3e">
                                <div className="bc-text bc-component">
                                    <div className="bc-text-content" data-id="4dc96ad7-efe9-48f4-b93c-bca8a310ad07">
                                        <div className="bc-rich-text public-DraftEditor-content">
                                            <div>
                                                <h2>Floor Plan</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                      
                        <div  className="bc-image-wrapper fill-width component-wrapper bc-center"  style={{paddingTop:'3rem'}}> 
                            <div className="component-inner media-95043f00">
                                <div className="bc-image bc-component">
                                    <img alt="" src={this.state.house.plan} />
                                </div>
                            </div>
                        </div>
                   
                </div>}
       
         
    
          
                <div style={{ display: 'flex', flexDirection: 'column', height: '380px' }}>
          <Footer2 />
          </div>
            

            </>
        );
    };
};

export default PostGallery;