import React, { Component } from 'react';
import '../sass/login.scss'
import logo from '../images/logo.png'
class Login extends Component {
    constructor(props) {
        super(props);
       
    }
    componentWillMount() {
        document.getElementById('root').className = 'login'
    }
    render() {
        return (
            <div className='login-wapper'>
                     <div className='login-box'>
                             <div className="input-box">
                               <div className='logo'>
                                    <img src= {logo} />
                               </div>
                                <div className='msg-tab'>
                                   <span> 短信登录</span>
                                </div>
                                <input type="text" placeholder='用户名' name='userName' className='user-name' />
                                <input type="password" placeholder='密码' name='password' className='pwd' />

                                <button className='login-btn'>登录</button>
                             </div>
                            
                      
                     </div>
                </div>
        );
    }
}

export default Login;