import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/base.css';
import Welcome from './Welcome';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    //const target = event.target
    // this.setState({
    //  [target.name]: target.value
    //})
    console.log("testicles");
    this.props.push(`${this.state.where}`)
    const Root = () => {

      return (
        <div className="base">
          <Router history={Router}>
            <Route path="/" component={Welcome}/>
          </Router>
        </div>
      )
    }

    ReactDOM.render(<Root />, document.getElementById('root'));
  }  

  handleSubmit(event) {
    event.preventDefault()
    // do some sort of verification here if you need to
    console.log("testicles");

    ReactDOM.render(<Welcome />, document.getElementById('root'));
  }

  render() {
    return (
       <div>
       <div className="banner p-3 mb-2 bg-primary"></div>
        <form onSubmit={this.handleSubmit}>
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
            <input
              type='submit'
              name='submit'
              className="button"
            />
          </FormGroup>
        </form>
       </div>
    );
  }
}

export default Login;
