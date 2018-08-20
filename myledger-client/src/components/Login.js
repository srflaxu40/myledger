import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/base.css';

class Login extends Component {

  render() {
    return (
       <div>
       <div class="banner p-3 mb-2 bg-primary"></div>
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
          <Button>Submit</Button>
        </form>
       </div>
    );
  }
}

export default Login;
