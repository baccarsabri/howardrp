
import React from 'react';
import './table.css'

class Banner2 extends React.Component {
    render() {
        const img=require('../../images/main-slider/slider1/bg1.jpg');
        return (
            <>
 <div data-id="3a9acca0-2211-4b44-9bda-be3de60f2abc" class="bc-container-wrapper component-wrapper bc-center root-component  media-e15b1f8" style={{ backgroundImage: `url(${img.default})`}}>
                <div className="component-inner root-site-width media-6c638610">
                    <div className="bc-container">
                        <div data-id="a67f5a07-ed6b-496d-a1dd-22bbbffaf517" className="bc-center bc-grid-wrapper mq-b-768">
                            <div className="bc-grid padding-5 break-b-2 media-7fafbcb5">
                                <div className="bc-grid-inner">
                                    <div className="bc-grid-columns">
                                        { this.props.beds >0 && <div className="bc-column col-2 media-6c448b3e" data-id="e8f37a18-7637-4f43-a734-b5aded84b703">
                                            <div data-id="6faf432f-738f-4215-9db2-c014ec272afb" className="bc-image-wrapper fill-width component-wrapper bc-center media-55be8673">
                                                <div className="component-inner media-9c9ea120">
                                                    <div className="bc-image bc-component">
                                                        <img alt="" src="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/4ee5737d6ec432c8223b0c7e63e4d52a/bed--v2.png" srcSet="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/4ee5737d6ec432c8223b0c7e63e4d52a/bed--v2.png 256w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/3d736b6d9e87d5e2d062a5df2cc3eca3/bed--v2.png 32w"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-id="46dc5a89-4326-4a8e-8ad6-97a8ab50be92" className="bc-text-wrapper component-wrapper bc-center media-a0d97103 media-9f825673">
                                                <div className="component-inner media-6c448b3e">
                                                    <div className="bc-text bc-component">
                                                        <div className="bc-text-content" data-id="f685f0d2-a3c2-4979-b554-f1aa31f0d095">
                                                            <div className="bc-rich-text public-DraftEditor-content">
                                                                <div>
                                                                    <h4>
                                                                        <span style={{fontWeight:'700'}}> {this.props.beds} Beds</span>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                        { this.props.baths>0 && <div className="bc-column col-2 media-6c448b3e" data-id="df260878-2c38-44c8-833f-fe44d914a166">
                                            <div data-id="fc2efc20-b7ca-4288-9094-0743cf0bb0a7" className="bc-image-wrapper fill-width component-wrapper bc-center media-55be8673">
                                                <div className="component-inner media-9c9ea120">
                                                    <div className="bc-image bc-component">
                                                        <img alt="" src="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/e0fceed3196fecdee42941045c7d6efa/shower-and-tub.png" srcSet="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/e0fceed3196fecdee42941045c7d6efa/shower-and-tub.png 100w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/f34cb1dc1f1ade78793cbf19c3259d36/shower-and-tub.png 32w"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-id="775cf20a-0cde-44fb-a751-ac45a72e5b51" className="bc-text-wrapper component-wrapper bc-center media-a0d97103 media-9f825673">
                                                <div className="component-inner media-6c448b3e">
                                                    <div className="bc-text bc-component">
                                                        <div className="bc-text-content" data-id="8d49576f-bdfd-4907-afe5-47fea995ecb8">
                                                            <div className="bc-rich-text public-DraftEditor-content">
                                                                <div>
                                                                    <h4>
                                                                        <span style={{fontWeight:'700'}}>{this.props.baths} Baths</span>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>}
                                        <div className="bc-column col-2 media-6c448b3e" data-id="f3b6806b-6aab-4a28-8e43-25036335497a">
                                            <div data-id="603c3a19-e4e2-48aa-b392-35a2e9346ae8" className="bc-image-wrapper fill-width component-wrapper bc-center media-55be8673">
                                                <div className="component-inner media-9c9ea120">
                                                    <div className="bc-image bc-component">
                                                        <img alt="" src="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/9e18cc542fadd5f8f5f712e2493df8b2/full-screen.png" srcSet="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/9e18cc542fadd5f8f5f712e2493df8b2/full-screen.png 128w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/361caf37f6d98b3ec235f589eb9d5d4f/full-screen.png 32w" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-id="cc2a5031-7fd5-4e3d-b87c-745bbb7971bf" className="bc-text-wrapper component-wrapper bc-center media-a0d97103">
                                                <div className="component-inner media-6c448b3e">
                                                    <div className="bc-text bc-component">
                                                        <div className="bc-text-content" data-id="c3892f20-b028-47f8-8e97-b40a8a8ec763">
                                                            <div className="bc-rich-text public-DraftEditor-content">
                                                                <div>
                                                                    <h4>
                                                                        <span style={{fontWeight:'700'}}> {this.props.sf} SF</span>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bc-column col-2 media-6c448b3e" data-id="ad7558e9-c049-4c40-9263-3a9af0945a69">
                                            <div data-id="70903c3a-fc0e-42ee-ad0d-4c2fc94b4150" className="bc-image-wrapper fill-width component-wrapper bc-center media-55be8673">
                                                <div className="component-inner media-9c9ea120">
                                                    <div className="bc-image bc-component">
                                                        <img alt="" src="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/80e324af2109298a33c04b8aa84813cd/SF-Lot-Icon.png" srcSet="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/80e324af2109298a33c04b8aa84813cd/SF-Lot-Icon.png 1024w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/5361a7d9a903bc003eea822fcc26b2c7/SF-Lot-Icon.png 800w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/e0ff88b65f66b92dbb497b5ddeae8a65/SF-Lot-Icon.png 400w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/795962a3-a3eb-44fe-ad02-cf6aa38e7eed/8aa8c61401159a2cb41a6fdc5871fc34/SF-Lot-Icon.png 32w" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-id="c5f61b02-b073-4f3e-9df9-db7cef637846" className="bc-text-wrapper component-wrapper bc-center media-a0d97103">
                                                <div className="component-inner media-6c448b3e">
                                                    <div className="bc-text bc-component">
                                                        <div className="bc-text-content" data-id="0b4c5333-540a-465b-9391-c6f973145f68">
                                                            <div className="bc-rich-text public-DraftEditor-content">
                                                                <div>
                                                                    <h4>
                                                                        <span style={{fontWeight:'700'}}>{this.props.sfLotValue} SF Lot</span>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {this.props.garage &&  <div className="bc-column col-2 media-6c448b3e" data-id="685e9b77-6a06-46ad-bcd5-b12a4c909c3e">
                                            <div data-id="a8a1f717-34fe-4f4b-a420-ea7ef3756914" className="bc-image-wrapper fill-width component-wrapper bc-center media-55be8673">
                                                <div className="component-inner media-9c9ea120">
                                                    <div className="bc-image bc-component">
                                                        <img alt="" src="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/ff543e94-b40a-4f9a-98cb-8217ef3e3bf0/7bafcc5ea59431c49f7dbf7f50b4b07f/Gargae.png" srcSet="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/ff543e94-b40a-4f9a-98cb-8217ef3e3bf0/7bafcc5ea59431c49f7dbf7f50b4b07f/Gargae.png 512w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/ff543e94-b40a-4f9a-98cb-8217ef3e3bf0/b49a209125ea060d63dcdc97cbcb21c3/Gargae.png 400w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/ff543e94-b40a-4f9a-98cb-8217ef3e3bf0/0c66af45102458e7fad1aeef7fdbfa1e/Gargae.png 32w"/>
                                                    </div>
                                                </div>
                                            </div>
                                         
                                            <div data-id="da365719-06a3-4348-aa00-5a6cf2ce1ec5" className="bc-text-wrapper component-wrapper bc-left media-a0d97103">
                                                <div className="component-inner media-6c448b3e">
                                                    <div className="bc-text bc-component">
                                                        <div className="bc-text-content" data-id="8bec0c6e-7486-446c-aeed-2fc7ef372140">
                                                            <div className="bc-rich-text public-DraftEditor-content">
                                                                <div>
                                                                    <h4>
                                                                        <span style={{fontWeight:'700'}}>Garage</span>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>} 
                                        <div className="bc-column col-2 media-6c448b3e" data-id="f493a06f-196a-407b-93a6-2a9f36d8b12f">
                                            <div data-id="b6207109-d33c-4714-a154-8940b0841f42" className="bc-image-wrapper fill-width component-wrapper bc-center media-55be8673">
                                                <div className="component-inner media-9c9ea120">
                                                    <div className="bc-image bc-component">
                                                        <img alt="" src="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/ff543e94-b40a-4f9a-98cb-8217ef3e3bf0/1e96110cbda55bb7a99d32171ba7ea1f/iconfinder_cryptocurrency_blockchain_dollar_2909602.png" srcSet="https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/ff543e94-b40a-4f9a-98cb-8217ef3e3bf0/1e96110cbda55bb7a99d32171ba7ea1f/iconfinder_cryptocurrency_blockchain_dollar_2909602.png 512w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/ff543e94-b40a-4f9a-98cb-8217ef3e3bf0/5f758e19b79c2cbac8ce46765a31b278/iconfinder_cryptocurrency_blockchain_dollar_2909602.png 400w, https://dpbvj4a9anukr.cloudfront.net/d20b4523-220f-491c-b7d9-2714d62fb07e/ff543e94-b40a-4f9a-98cb-8217ef3e3bf0/33ed63de8508ca8767d40fb2865ecaf0/iconfinder_cryptocurrency_blockchain_dollar_2909602.png 32w"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-id="d1790ec1-f279-4a93-bbd0-f6db45b7beaa" className="bc-text-wrapper component-wrapper bc-left media-a0d97103">
                                                <div className="component-inner media-6c448b3e">
                                                    <div className="bc-text bc-component">
                                                        <div className="bc-text-content" data-id="51bab034-def6-4f3a-bd00-9b9d054f362d">
                                                            <div className="bc-rich-text public-DraftEditor-content">
                                                                <div>
                                                                    <h4>
                                                                        <span style={{fontWeight:'700'}}>{this.props.price} </span>
                                                                    </h4>
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







 
            </>
        );
    }
};

export default Banner2;