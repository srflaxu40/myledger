import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/base.css';
import Welcome from './Welcome';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Router } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { googleId: "" };
  }

  render() {

    const responseGoogle = (response) => {
      console.log(this.state.googleId);
      if ( !response.googleId && !this.state.googleId ) {
          console.log("login");
          ReactDOM.render(<Login />, document.getElementById('root')); 
      } else {
          this.setState({ googleId: response.googleId });
          console.log(this.state.googleId);
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
            <Input className="formGroup" type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="Password" hidden>Password</Label>
            <Input className="formGroup" type="password" name="password" id="Password" placeholder="Password" />
          </FormGroup>
          {' '}
          <FormGroup>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              buttonText=""
              className="formGroup google"
            />
          </FormGroup>
          {' '}
          <FormGroup>
            <Input className="formGroup submit bg-primary" type="submit" value="Submit"/>
          </FormGroup>
          {' '}
        </form>
       </div>
    );
  }
}

export default Login;
