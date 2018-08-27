import React, { Component } from 'react';
import '../css/base.css';
import { GoogleLogout } from 'react-google-login';
import Login from './Login';
import ReactDOM from 'react-dom';
import Grid from 'react-css-grid'

class Welcome extends Component {


  render() {

    const logout = () => {
      ReactDOM.render(<Login />, document.getElementById('root'));   
      this.props.history.push('/welcome');
    }

    return (
      <div className="grid-container">
       <Grid
         width={320}>
         <div className="grid-item">Column</div>
         <div className="grid-item">Column</div>
         <div className="grid-item">Column</div>
         <div className="grid-item">
             <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={logout}
                className="button p-3 mb-2 bg-primary logout submit"
             >
           </GoogleLogout>
         </div>
         <div className="grid-item">Column</div>
         <div className="grid-item">Column</div>
         <div className="grid-item">Column</div>
       </Grid>
      </div>
    );
  }
}

export default Welcome;
