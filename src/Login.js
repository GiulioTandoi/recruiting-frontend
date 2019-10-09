import React, {Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Image from 'react-bootstrap/Image';
import './CSS/Login.css';
import axios from 'axios';
import { Alert } from 'react-bootstrap';




class Login extends Component {
    constructor (props){
        super (props);
        this.state= {email: '', password : '', hasError: false}
        console.log(this.props);
    }

    onChangeEmail = (e) =>{
        this.setState ({email : e.target.value});
        console.log("Ciao "+ e.target.value);
    }

    onChangepassword = (e) =>{
        this.setState({password : e.target.value});
        console.log("Ciao "+e.target.value);
    }

    componentDidMount = () =>{
        const apiUrl = "http://localhost:8080/login"; 
        axios.post(apiUrl, {
            email : this.state.email,
            password : this.state.password
        })
        .then(
            response =>{
                const {data} = response;
                
                if(data!==-1){
                   // nella riga seguente sto aggiungendo un oggetto per il routing, posso usare il push perchè Home è renderizzato come oggetto Route in App.js
                   // Ho bisogno quindi di usare questo sistema perchè non posso renderizzare Home in Login (se così fosse stateo avrei potuto passare id direttamente nelle props come argomento)
                    this.props.history.push({pathname:"/home",  
                    state:data});
                }
                

            }
        );
    }

    componentDidCatch=(error, info) =>{
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, info);
      }
    

    redirectRegister=() => {
        this.props.history.push("/register")
    }

    render(){
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <Alert>Something went wrong.</Alert>;
          }

        
        return(
            <Card className="cardLogin shadow">
                <div className="header" >
                    <p className="textLogin">RecruitING</p>
                </div>
                    <Form className="formLogin">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange = {this.onChangeEmail} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.onChangepassword} />
                    </Form.Group>
                    <Button className="btn btn-secondary" type="button" onClick={this.componentDidMount} >
                        LOGIN
                    </Button>
                    <Button className="btn btn-secondary"  type="button" onClick={this.redirectRegister} style={{marginLeft : "2%"}}>
                        REGISTER
                    </Button>
                </Form>
            </Card>  
        
        );
    }

}

export default Login;