import React, { Component } from 'react'
import '../sass/store.scss'
class Store extends Component {
    constructor(props) {
        super(props);
         
    }
    render() {
        return (
            <React.Fragment>
               <header className='store-header'>
                    <div className='hdbanner'></div>
                     
                    <div className="storedesc">
                            <div className="store-title"> <h2>瓦香鸡米饭(南京东路店)</h2></div>
                            <div className='store-title-desc'>
                                <span>评价4.6</span>
                                <span>月售2020单</span>
                                <span>蜂鸟专送 <span> 约35分钟</span> </span>
                            </div>
                            <div className='store-mj'>
                               
                               <div className='mj-list'>
                                 <span>满22减22，满35减23，满60减35，满90减50</span>
                               </div>
                                <p>公告：做鸡我们是认真的……欢迎新老客户前来选购。</p>
                            </div>

                          
                    </div>
                    <div className='storetab'>
                        <div ><span className='tab-active'>点餐</span></div>
                        <div><span  >评价</span></div>
                        <div><span>商家</span></div>
                    </div>
                    <div className='store-sjtj'>
                        <p>商家推荐</p>
                        <div className="tjbanner">
                           
                            <div class="fdbox">
                                <div className="foodimg">
                                    <img src="//fuss10.elemecdn.com/8/34/af6ef7ae0b172978ba5beedcab605jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="" />
                                </div>
                                <div className="food-desc">
                                    <div className="fdtitle">
                                        瓦香鸡(重辣)
                                    </div>
                                    <div class="fdcomment">
                                        月售240 好评率94%
                                    </div>
                                    <div class="fdprice">
                                        <p> <small>¥</small>38.8</p>
                                    </div>
                                </div>
                            </div>
                            <div class="fdbox">
                                <div className="foodimg">
                                    <img src="//fuss10.elemecdn.com/8/34/af6ef7ae0b172978ba5beedcab605jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="" />
                                </div>
                                <div className="food-desc">
                                    <div className="fdtitle">
                                        瓦香鸡(重辣)
                                    </div>
                                    <div class="fdcomment">
                                        月售240 好评率94%
                                    </div>
                                    <div class="fdprice">
                                        <p> <small>¥</small>38.8</p>
                                    </div>
                                </div>
                            </div>
                            <div class="fdbox">
                                <div className="foodimg">
                                    <img src="//fuss10.elemecdn.com/8/34/af6ef7ae0b172978ba5beedcab605jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="" />
                                </div>
                                <div className="food-desc">
                                    <div className="fdtitle">
                                        瓦香鸡(重辣)
                                    </div>
                                    <div class="fdcomment">
                                        月售240 好评率94%
                                    </div>
                                    <div class="fdprice">
                                        <p> <small>¥</small>38.8</p>
                                    </div>
                                </div>
                            </div>
                            <div class="fdbox">
                                <div className="foodimg">
                                    <img src="//fuss10.elemecdn.com/8/34/af6ef7ae0b172978ba5beedcab605jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="" />
                                </div>
                                <div className="food-desc">
                                    <div className="fdtitle">
                                        瓦香鸡(重辣)
                                    </div>
                                    <div class="fdcomment">
                                        月售240 好评率94%
                                    </div>
                                    <div class="fdprice">
                                        <p> <small>¥</small>38.8</p>
                                    </div>
                                </div>
                            </div>
                            <div class="fdbox">
                                <div className="foodimg">
                                    <img src="//fuss10.elemecdn.com/8/34/af6ef7ae0b172978ba5beedcab605jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="" />
                                </div>
                                <div className="food-desc">
                                    <div className="fdtitle">
                                        瓦香鸡(重辣)
                                    </div>
                                    <div class="fdcomment">
                                        月售240 好评率94%
                                    </div>
                                    <div class="fdprice">
                                        <p> <small>¥</small>38.8</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </header>
            </React.Fragment>
        );
    }
}

export default Store;