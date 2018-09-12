import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import '../css/base.css';
import Welcome from './Welcome';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import id from '../store/auth/reducers'
import {set_id, googleLoginSuccess, googleLoginFailure} from '../store/auth/actions';

const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({set_id, googleLoginSuccess, googleLoginFailure}, dispatch)


class Login extends Component {
  componentDidMount() {}

  constructor(props) {
    super(props);
    this.state = { googleId: "" };
  }

  handleSuccessfulLogin = (payload) => {
    fetch('/auth/jwt', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(payload), // body data type must match "Content-Type" header
      })
      .then(res => {
          console.log(res);
          return res.json()
      });

    this.props.googleLoginSuccess(payload);
    console.log(payload.googleId);
    this.props.set_id(payload.googleId);
    window.localStorage.setItem('googleId', payload.googleId);
    this.props.history.push('/welcome');
  }

  render() {
  
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
              onSuccess={this.handleSuccessfulLogin}
              onFailure={this.props.googleLoginFailure}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
