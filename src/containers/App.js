import React, { Component } from 'react';


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
                     <div className='sd-active'>综合排序</div>
                     <div>距离最近</div>
                     <div>品质联盟</div>
                     <div >筛选</div>
                 </aside>
                 <section className='shoplist'>
                     <section className='shop-store'>
                      <div className='store-info'>
                         <div className='store-logo'>

                         </div>
                         <div class="store-desc">
                            <div className='desc1'>恋尚鲜花(上海店)</div>
                            <div className='desc2'>第二条</div>
                            <div className='desc3'>第三条</div>
                            
                         </div>
                      </div>
                      <div className='store-extra'>第二行</div>
                     </section>
                 </section>
                 </React.Fragment>
                 
        );
    }
}

export default App;