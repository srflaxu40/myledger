import React, { Component } from 'react';
import '../css/base.css';
import { GoogleLogout } from 'react-google-login';
import Login from './Login';
import ReactDOM from 'react-dom';

class Welcome extends Component {

  render() {
    const logout = () => {
      ReactDOM.render(<Login />, document.getElementById('root'));   
    }

    return (
       <div>
          Welcome

          <GoogleLogout
             buttonText="Logout"
             onLogoutSuccess={logout}
             className="button p-3 mb-2 bg-primary"
          >
          </GoogleLogout>
       </div>
    );
  }
}

export default Welcome;
