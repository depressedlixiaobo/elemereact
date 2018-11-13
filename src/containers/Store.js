import React, { Component } from 'react'
import '../sass/store.scss'
import plus from '../images/plus.svg'
import plusCircled from '../images/plus-circled.svg'

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

                   
               </header>
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
                    <div className="store-list">
                        <ul className='store-side'>
                            <li>特价鸡米饭</li>
                            <li>饿了么红包</li>
                            <li>双人套餐</li>
                            <li>新品（特价）尝鲜</li>
                            <li>饮料</li>
                        </ul>
                        <dl>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map((t,index)=>(
                                    <dt>
                                        <div className='p-img'> <img src="//fuss10.elemecdn.com/2/85/4bd3e1f30c133edaac2168a58ef18jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" alt="" /> </div>
                                        <div className='prodcut-desc'>
                                            <div className='p-desc1'>瓦香鸡（微辣）+米饭+可米饭+可口可乐</div>
                                            <div className='p-desc2'>鸡腿肉搭配洋葱，大葱一起爆炒主要原料: 鸡肉</div>
                                            <div className='p-desc2'>月售800份 好评率98%</div>
                                            <div className='p-desc3'>4.8折</div>
                                            <div className='p-price'>
                                                <div>
                                                ￥18.8  <del>¥38.8</del>
                                                </div>
                                                <div className='add-pro'>
                                                        <img className='add' src={plusCircled} /> 
                                                </div>
                                            </div>
                                        </div>
                                    </dt>
                                ))
                            }
                        </dl>
                    </div>
                  
                   <div className='store-car'>
                            <div className='car-title'>
                                 满25减17元，满40减21元，满60减24元
                            </div>
                            <div className='car-content'>
                                <div className='car-logo'>
                                    
                                </div>
                                 <div className='show'>
                                     <p>为选购商品</p>
                                     <p>
                                     另需配送费5元
                                     </p>
                                 </div>
                                 <div className='total'>
                                     ￥15起送
                                 </div>
                            </div>
                   </div>
            </React.Fragment>
        );
    }
}

export default Store;