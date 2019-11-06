import React from 'react';
import Form from 'react-bootstrap/Form';
import './LoginPage.css';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

const inputsValues = {}
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null,
            login: false
        }
    }
    handleChange(event) {
        const { name, value } = event.target;
        switch (name) {
            case "email":
                inputsValues.email = value;
                break;
            case "password":
                inputsValues.password = value;
                break;
            default:
                break;
        }
        console.log(inputsValues)
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch("https://healthieapp.herokuapp.com/api/users/signin", {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputsValues)
        }).then(function (response) {
            return response.json();
        }).then((body) =>{
            console.log(body.success)
            if(body.success){
                this.setState({
                    login:true
                })
                console.log(`it is ${this.state.login}`)
                this.props.history.push('/HomePage')
            }
        });
    if(this.state.login){
        this.props.history
    }
    }
    render() {
        return <div className="LoginPage-parent">
            <Form className="form-body" onSubmit={this.handleSubmit.bind(this)}>


                <p className="login-P">We provide the best health care service</p>


                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" required className="login-Email-form-control" type="email" onChange={this.handleChange.bind(this)} />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" required className="login-password-form-control" type="password" onChange={this.handleChange.bind(this)} />
                </Form.Group>

                <button className="Login-Button btn1">Login</button>

                <button className="Login-Button btn2">Sign Up</button>

            </Form>

        </div>


    }
}

export default LoginPage;