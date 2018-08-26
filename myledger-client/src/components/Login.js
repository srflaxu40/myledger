import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/base.css';
import Welcome from './Welcome';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const responseGoogle = (response) => {
      if ( !response.googleId ) {
          console.log("login");
          ReactDOM.render(<Login />, document.getElementById('root')); 
      } else {
          console.log("welcome");
          ReactDOM.render(<Welcome />, document.getElementById('root')); 
      }
    }

    return (
       <div className="loginDiv">
       <div className="bg-primary banner">MyLedger</div>
        <form className="login">
          <FormGroup>
            <Label for="exampleEmail" hidden>Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>
          {' '}
          <FormGroup>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              buttonText=""
              className="google"
            />
          </FormGroup>
        </form>
       </div>
    );
  }
}

export default Login;
