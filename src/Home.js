//import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { DropdownButton, Dropdown, Form, Row, Col, Container} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './CSS/NavBarPrincipal.css';
import './CSS/Button.css';
import ProfileRow from './ProfileRow.js'
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            clicked: false, value: "", searchType: "",
            idSelezionatore: this.props.location.state.idSelezionatore, listaelementi: []
        }
        console.log("L'id del selezionatore nella Home è " + this.state.idSelezionatore)
        
    }

    componentDidMount = () => {

        const apiUrl = "http://localhost:8080/home";  // bisogna cambiare il metodo in modo che faccia una post
        axios.get(apiUrl)
            .then(response => {
                const { profili } = response.data; //data è il campo di risposta di un Json all'interno del quale ci sono i dati che mi servono per la visualizzazione 
                //console.log(JSON.stringify(profili));
                var lista = [];
                for (var i = 0; i < profili.length; i++) {
                    lista[i] = profili[i];
                }
                this.setState({ listaelementi: lista });

            })
            .catch(error => {
                console.log(error);
            });


    }

    filterProfiles = (event) => {
        const apiUrl = "http://localhost:8080/search";
        axios.get(apiUrl,
            {
                params:
                {
                    value: this.state.value
                }
            })
            .then(response => {
                const { profili } = response.data;
                //console.log(JSON.stringify(response));
                var lista = [];
                if (profili.length !== 0) {
                    for (var i = 0; i < profili.length; i++) {
                        lista[i] = profili[i];
                    }

                    this.setState({ listaelementi: lista });
                } else {
                    window.alert("La ricerca non ha prodotto risultati")
                }

            }
            )
            .catch(error => {
                console.log(error);
            });
    }

    showSelezionatore = () => {
        this.props.history.push({ pathname: "/selezionatore", state: { idSelezionatore: this.state.idSelezionatore } });
        console.log("Id " + this.state.idSelezionatore)
    }

    showListaPreferiti = () => {
        console.log("Id passato alla lista preferiti " + this.state.idSelezionatore)
        this.props.history.push({ pathname: "/listaPreferiti", state: { idSelezionatore: this.state.idSelezionatore } });
    }

    logout = () => {
        this.props.history.push("/");
    }

    setFormVisibility = () => {
        this.setState({ clicked: true });
    }

    setValue = (event) => {
        this.setState({ value: event.target.value })
        console.log("Il value settato è " + event.target.value + " l'id settato è " + this.state.idSelezionatore);
    }

    submitSearch = (event) => {
        this.filterProfiles();
        event.preventDefault();
    }

    render() {
        return (
            <div>
                
                <div className="shadow1 mb-5 bg-white rounded" style={{ marginLeft: '2%', marginRight: '2%', marginTop: "1%" }} fluid="true">

                    <Navbar bg="primary" variant="dark" style={{ fontSize: '1.3em', paddingLeft: '48px', paddingRight: '48px', position: 'sticky' }} >

                        <Nav className="mr-auto ">
                            <DropdownButton id="dropdown-item-button" title="MYACCOUNT">
                                <Dropdown.Item as="button" onClick={this.showSelezionatore}>Il mio account</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={this.showListaPreferiti}>Lista preferiti</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item as="button" onClick={this.logout}>Logout</Dropdown.Item>
                            </DropdownButton>
                        </Nav>
                        <Navbar.Brand style={{ display: "block", textAlign: "center", marginRight: "auto", marginLeft: "auto" }} >
                            RECRUITING
                </Navbar.Brand>
                        <Nav className="ml-auto" style={{ fontSize: '0.95em' }}>

                            {!this.state.clicked &&
                                <Row>
                                    <Button className="btn btn-secondary" style={{ marginTop: "1.4%" }} onClick={this.setFormVisibility}>
                                        {!this.state.clicked && <p>CERCA</p>}</Button>
                                </Row>}

                            {this.state.clicked &&
                                <Row>
                                    <Button className="btn btn-secondary" style={{ marginTop: "1.4%" }} onClick={this.filterProfiles} >
                                        MOSTRA PROFILO</Button>
                                </Row>}


                        </Nav>
                    </Navbar>
                    {this.state.clicked &&
                        <Row style={{ padding: "48px", marginLeft: "15px" }}>

                            <Form style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} onSubmit={this.submitSearch}>
                                <p style={{ color: "red" }}>* Seleziona un campo specifico di ricerca</p>
                                <Row>

                                    <Col>
                                        <Form.Control placeholder="Type here" id="form" onChange={this.setValue} />
                                    </Col>
                                </Row>

                            </Form>
                        </Row>
                    }


                </div>
                <div className="container-fluid" style={{ paddingLeft: '0px', paddingRight: '0px' }}>


                    <Container style={{ alignItems: "normal", display: "block", width: "60%" }}>

                        <Row >
                            <Col>
                                {this.state.listaelementi.map((el, i) => <ProfileRow risposta={el} idSelezionatore={this.state.idSelezionatore} key={i} />)}
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        );
    }


}

export default withRouter(Home);