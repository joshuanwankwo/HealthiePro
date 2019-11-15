import React from 'react';
import './Signup.css';
import {Form, Spinner, Button,Col} from 'react-bootstrap';

import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

const inputValues = {};
let isChecked = false
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
     input:{ name: null,
      email: null,
      password: null,
      phone: null,
      address: null
     },
     signupSuccess:{
       success:false,
       token: null
     }
  }
}
handleSubmit(event){
  event.preventDefault();
  this.setState({
    loading:true
  })
  fetch("https://healthieapp.herokuapp.com/api/users/signup", {
      method: 'post',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.state.input)
    }).then( (response)=> {
      this.setState({
        loading:false
      })
      return response.json();
    }).then((body)=> {
      console.log(body)
      if(body.success){
        this.props.history.push('/login')
      }
    });
  }

handleChange(event) {
  const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/);
  const { name, value } = event.target;
  switch (name) {
    case "firstName":
      inputValues.firstName = value;
      break;
    case "lastName":
      inputValues.lastName = value;
      break;
    case "email":
      if (emailRegex.test(value)) {
        inputValues.email = value
      }
      break;
    case "address":
      inputValues.address = value;
      break;
    case "password":
      inputValues.password = value;
      break;
    case "confirmPassword":
      inputValues.confirmPassword = value;
      break;
    case "checkbox":
      isChecked = event.target.checked ? true : false;
      break;
    case "phone":
      inputValues.phone = value;
      break;
    default:
      break;
  }
  if(inputValues.password === inputValues.confirmPassword && isChecked) {
    this.setState({
      input:{
      name: `${inputValues.firstName} ${inputValues.lastName}`,
      password: inputValues.password,
      email: inputValues.email,
      phone: inputValues.phone,
      address: inputValues.address
      }
})

}

}


render() {
  return (
    <div className="LoginPage-parent">

      <Form className="signup-form" noValidate onSubmit={this.handleSubmit.bind(this)}>

        <p className="signup-p">
          Create Patient Account
        </p>

        <Form.Row className="signup-row-input-con">
          <Form.Group as={Col} controlId="formGridEmail" className="signup-FormGroup-con">
            <Form.Label className="signup-label">First Name</Form.Label>
            <Form.Control name="firstName" type="Text" className="signup-FormGroup" required onChange={this.handleChange.bind(this)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" className="signup-FormGroup-con">
            <Form.Label className="signup-label">Last Name</Form.Label>
            <Form.Control name="lastName" type="Text" className="signup-FormGroup" onChange={this.handleChange.bind(this)} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail" className="signup-FormGroup-con">
            <Form.Label className="signup-label">Email</Form.Label>
            <Form.Control name="email" type="email" className="signup-FormGroup" onChange={this.handleChange.bind(this)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" className="signup-FormGroup-con">
            <Form.Label className="signup-label">Phone Number</Form.Label>
            <Form.Control name="phone" type="Number" className="signup-FormGroup" required onChange={this.handleChange.bind(this)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword" className="signup-FormGroup-con">
            <Form.Label className="signup-label">Password</Form.Label>
            <Form.Control name="password" type="password" className="signup-FormGroup" onChange={this.handleChange.bind(this)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" className="signup-FormGroup-con">
            <Form.Label className="signup-label">Comfirm Password</Form.Label>
            <Form.Control name="confirmPassword" type="password" className="signup-FormGroup" onChange={this.handleChange.bind(this)} />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check name="checkbox" className="signup-checkBox" type="checkbox" label="I agree to the terms & conditions" onChange={this.handleChange.bind(this)} />
        </Form.Group>

        <Button className="signUp-btn" type="submit">
          {this.state.loading?<Spinner animation="border" variant="primary" />:'Sign Up'}
        </Button>
      </Form>

    </div>
  )


}
}

export default SignUp;