import React, { Component } from 'react';
import './CSS/Register.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { nome: "", cognome: "", password: "", email: "", stato: "", passwordMatch: false };

        console.log(this.props);
    }

    registerMe = (event) => {
        if (this.state.nome !== "" && this.state.cognome !== "" && this.state.email !== "" && this.state.password !== "") {
            if (this.state.passwordMatch) {
                const apiUrl = "http://localhost:8080/registration";
                axios.post(
                    apiUrl,
                    {
                        nome: this.state.nome,
                        cognome: this.state.cognome,
                        email: this.state.email,
                        password: btoa(this.state.password),
                        stato: this.state.stato
                    }
                ).then(response =>
                    this.props.history.push("/")
                );
            } else {
                alert("Errore conferma password")
            }
        } else {

            window.alert("Non hai inserito i dati di registrazione in modo corretto")
        }
    }

    onChangeNome = (e) => {
        this.setState({ nome: e.target.value });
        console.log(this.state.nome);
    }

    onChangeCognome = (e) => {
        this.setState({ cognome: e.target.value });
        console.log(this.state.cognome);
    }
    onChangepassword = (e) => {
        this.setState({ password: e.target.value });
        console.log(e.target.value);
    }
    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
        console.log(this.state.email);
    }
    onChangeStato = (e) => {
        this.setState({ stato: e.target.value });
    }
    checkPasswordCorrispondance = (event) => {
        if (event.target.value === this.state.password) {
            this.setState({ passwordMatch: true })
        } else {
            this.setState({ passwordMatch: false })
        }
    }
    render() {

        return (
            <div className="cardRegister">
                <div>
                    <p className="text" >RecruitING</p>
                    <p className="text1" style={{ textAlign: "center" }}>REGISTRAZIONE</p>
                </div>
                <Form className="formRegister">
                    <Form.Group >
                        <Form.Label>Nome</Form.Label>
                        <Form.Control name="nome" type="email" placeholder="Inserisci Nome" onChange={this.onChangeNome} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Cognome</Form.Label>
                        <Form.Control name="cognome" placeholder="Inserisci Cognome" onChange={this.onChangeCognome} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Row>
                            <Col>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" controlid="password" onChange={this.onChangepassword} />
                            </Col>
                            <Col>
                                <Form.Label>Conferma Password</Form.Label>
                                <Form.Control type="password" placeholder="Conferma Password" controlid="confirm" onChange={this.checkPasswordCorrispondance} />
                            </Col>

                        </Row>

                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Indirizzo Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Inserisci email" onChange={this.onChangeEmail} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Stato</Form.Label>
                        <Form.Control name="stato" placeholder="Inserisci stato" onChange={this.onChangeStato} />
                    </Form.Group>
                    <Button className="btn btn-secondary" style={{ width: "30%", display: "block", margin: "auto" }} type="button" onClick={this.registerMe} >
                        FINITO!
                    </Button>
                </Form>
            </div>

        );

    }

}

export default Register;