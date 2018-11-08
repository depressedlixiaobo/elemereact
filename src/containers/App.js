import React, { Component } from 'react';

import ShopItem from '../components/ShopItem'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
                 <React.Fragment>
                     <header className='header'>
                     <div className='location'>
                         上海市人民广场...
                     </div>
                    
                 </header>
                 <div className='search'>
                        <div className='search-box'>sfsfsf</div>
                     </div>
                 <div className='swipper'>
                 1

                 </div>
                 <div className='banner'>
                    <div className='banner-box rd-border'>
                        11
                    </div> 
                    <div className='banner-box'>
                        222
                    </div> 
                 </div>
                 <div className='sjtj'>
                     商家推荐
                 </div>
                 <aside className='sidebar'>
                    
                    <section className='sidebar-box'>
                        <div className='sd-active'>综合排序</div>
                        <div>距离最近</div>
                        <div>品质联盟</div>
                        <div >筛选</div>
                        <section className='cate-sort'>
                                 <ul className='sort-list'>
                                     <li className='liactive'>综合排序</li>  
                                     <li>好评优先</li>
                                     <li>销量优先</li>
                                 </ul>
                        </section>
                    </section>
                   
                 </aside>
                 
                 <section className='shoplist'>
                    {
                        [1,2,3,4,5,6,7,8,9].map((item,index)=>(
                            <ShopItem key={index} />
                        ))
                    }
                 </section>
                 </React.Fragment>
                 
        );
    }
}

export default App;