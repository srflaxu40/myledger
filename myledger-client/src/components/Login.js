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

    this.handleInput  = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(event) {
    this.props.push(`${this.state.where}`)
    const Root = () => {

      return (
        <div className="base">
          <Router history={Router}>
            <Route path="/welcome" component={Welcome}/>
          </Router>
        </div>
      )
    }

    ReactDOM.render(<Root />, document.getElementById('root'));
  }  

  handleSubmit(event) {
    event.preventDefault()
    ReactDOM.render(<Welcome />, document.getElementById('root'));
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
       <div>
       <div className="banner p-3 mb-2 bg-primary"></div>
        <form>
          <FormGroup>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className="button"
            />
          </FormGroup>
        </form>
       </div>
    );
  }
}

export default Login;
