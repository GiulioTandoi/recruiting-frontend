import React, {Component} from 'react';
import './CSS/Register.css';
import {Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';

class Register extends Component{

    constructor(props){
        super(props);
        this.state={nome:"", cognome:"",password:"", email:"", stato:""};
        console.log("Ciao Register");
        console.log(this.props);
    }

    registerMe=()=>{
        if (this.state.nome !== "" && this.state.cognome!== "" && this.state.email!=="" && this.state.password!==""){
            const apiUrl ="http://localhost:8080/registration";
            axios.post(
                apiUrl,
                {   nome: this.state.nome,
                    cognome:this.state.cognome,
                    email:this.state.email,
                    password : this.state.password,
                    stato: this.state.stato
                }
            ).then(response=>
                this.props.history.push("/")
            );
        }else {
            window.alert("Non hai inserito i dati di registrazione in modo corretto")
        }
    }

    onChangeNome=(e)=>{
       this.setState({nome:e.target.value});
        console.log(this.state.nome);
    }

    onChangeCognome=(e)=>{
        this.setState({cognome:e.target.value});
        console.log(this.state.cognome);
    }
    onChangepassword=(e)=>{
        this.setState({password:e.target.value});
        console.log(e.target.value);
    }
    onChangeEmail=(e)=>{
        this.setState({email:e.target.value});
        console.log(this.state.email);
    }
    onChangeStato=(e)=>{
        this.setState({stato:e.target.value});
    }
    render(){

        return(
            <Card className="shadow cardRegister"> 
                <div>
                    <p className="text" style ={{paddingTop : "26px"}}>RecruitING</p>
                    <p className="text1" style={{textAlign : "center"}}>REGISTRATION</p>
                </div>
                    <Form className="formRegister">
                    <Form.Group >
                        <Form.Label>Nome</Form.Label>
                        <Form.Control name="nome" type="email" placeholder="Enter name" onChange = {this.onChangeNome} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control name="cognome" placeholder="Enter surname" onChange = {this.onChangeCognome} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.onChangepassword} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange = {this.onChangeEmail} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Stato</Form.Label>
                        <Form.Control name="stato"  placeholder="Enter state" onChange = {this.onChangeStato} />
                    </Form.Group>
                    <Button className="btn btn-secondary" style= {{width: "100%"}} type="button" onClick={this.registerMe} >
                        DONE!
                    </Button>
                </Form>
            </Card>

        );

    }

}

export default Register;