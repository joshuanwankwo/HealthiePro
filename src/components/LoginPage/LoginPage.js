import React from 'react';
import { Form, Spinner } from 'react-bootstrap';
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
            errorMessage: {
                display: 'none'
            },
            loading: false,
            login: false,
            message: '',
            userId:''
        }
    }
    handleChange(event) {
        this.setState({
            errorMessage: {
                display: 'none'
            }
        })
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
        this.setState({ loading: true })
        fetch("https://healthieapp.herokuapp.com/api/users/signin", {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputsValues)
        }).then((response) => {
            this.setState({ loading: false })

            return response.json();
        }).then((body) => {
            console.log(body)
            if (body.success) {
                localStorage.setItem("userToken", body.data.token)
                localStorage.setItem("userId", body.data.user._id)
                this.setState({
                    login: true,
                })
                console.log(`it is ${this.state.login}`)
                this.props.history.push({pathname:"/homepage", userToken:this.state.userToken})
            } else {
                this.setState({
                    errorMessage: {
                        display: 'grid'
                    },
                    message: body.message
                })
            }
        });
    }
    render() {
        return (

            <div className="LoginPage-parent">
                <Form className="login-form-body" onSubmit={this.handleSubmit.bind(this)}>

                    <div className="login-P">
                        <p>We provide the best health care service</p>
                    </div>

                    <div className="error-message" style={this.state.errorMessage}>
                        <p>{this.state.message}</p>
                    </div>
                    
                    <Form.Group className="login-input-container" controlId="formGroupEmail">
                        <Form.Label className="login-form-label">Email address</Form.Label>
                        <Form.Control name="email" required className="login-Email-form-control" type="email" placeHolder='Email' onChange={this.handleChange.bind(this)} />
                    </Form.Group>

                    <Form.Group className="login-input-container" controlId="formGroupPassword">
                        <Form.Label className="login-form-label">Password</Form.Label>
                        <Form.Control name="password"  required className="login-password-form-control" type="password" placeholder='Password' onChange={this.handleChange.bind(this)} />
                    </Form.Group>

                    <button className="btn1" >{this.state.loading ? <Spinner animation="border" variant="light" /> : "Login"}</button>

                    <Link className="btn2-con" to="/signup">
                        <button className="btn2" >Sign Up</button>
                    </Link>

                </Form>

            </div>

        )
    }
}

export default LoginPage;