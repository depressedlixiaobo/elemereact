import React, { Component } from 'react';
import  img_star from '../images/star.svg'

class ShopItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className='shop-store'>
                <div className='store-info'>
                    <div className='store-logo'>
                        <img src='https://fuss10.elemecdn.com/4/19/ac1615804e26e20bd602eaa614132jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/' />
                    </div>
                    <div class="store-desc">
                        <div className='desc1'>恋尚鲜花(上海店)</div>
                        <div className='desc2'>
                            <img src={img_star} /> <span>4.4</span><span>月售1124单</span>
                        </div>
                        <div className='desc3'>
                            <div>
                                <span>¥20起送</span>
                                <span>远距离配送费¥5.8</span>
                            </div>
                            <div>
                                <span>2.30km</span>
                                <span>35分钟</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='store-extra'>
                    {/* <section>第一个</section> */}
                    <section>
                        <div>
                            <div> 新用户下单立减16元</div>
                            <div>满25减20，满40减24，满60减30</div>
                        </div>
                        <div>
                            <span>4个活动</span>
                        </div>
                    </section>
                </div>
            </section>
        );
    }
}

export default ShopItem;