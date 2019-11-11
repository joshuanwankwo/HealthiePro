import React from 'react';
import Form from 'react-bootstrap/Form';
import './LoginPage.css';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

let styles = {
    display: 'none'
}
const inputsValues = {}
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingStyle: {
                display: 'none'
            },
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
    handleClick() {
        this.setState({
            loadingStyle: {
                display: 'block'
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch("https://healthieapp.herokuapp.com/api/users/signin", {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputsValues)
        }).then(function (response) {
            return response.json();
        }).then((body) => {
            console.log(body.success)
            if (body.success) {
                this.setState({
                    login: true
                })
                console.log(`it is ${this.state.login}`)
                this.props.history.push('/HomePage')
            }
        });
        if (this.state.login) {
            this.props.history
        }
    }
    render() {
        return (
            <div className="LoginPage-parent">
                <Form className="login-form-body" onSubmit={this.handleSubmit.bind(this)}>

                    <div className="login-P">
                        <p>We provide the best </p>
                        <p>health care service</p>

                    </div>

                    <Form.Group className="login-input-container" controlId="formGroupEmail">
                        <Form.Label className="login-form-label">Email address</Form.Label>
                        <Form.Control name="email" required className="login-Email-form-control" type="email" onChange={this.handleChange.bind(this)} />
                    </Form.Group>

                    <Form.Group className="login-input-container" controlId="formGroupPassword">
                        <Form.Label className="login-form-label">Password</Form.Label>
                        <Form.Control name="password" required className="login-password-form-control" type="password" onChange={this.handleChange.bind(this)} />
                    </Form.Group>

                    <button className="Login-Button btn1">Login</button>

                    <Link className="btn2-con" to="/signup">
                        <button className="Login-Button btn2" >Sign Up</button>
                    </Link>

                </Form>

            </div>

        )
    }
}

export default LoginPage;