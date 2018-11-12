import React, { Component } from 'react';
import '../sass/login.scss'
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
                        11
                     </div>
                </div>
        );
    }
}

export default Login;