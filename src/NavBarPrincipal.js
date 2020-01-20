//import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import React, {Component} from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {DropdownButton, Dropdown, Form, Row, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './CSS/NavBarPrincipal.css';
import './CSS/Button.css';


class NavBarPrincipal extends Component{
    constructor(props){
        super(props);
        this.state={dettaglioProfiloSeleionatore : [], clicked: false}
        console.log(this.props.id)
    }

    showSelezionatore = () => {
        this.props.history.push({pathname: "/selezionatore", state: this.props.id });
        console.log("Id " + this.props.id)
    }

    showListaPreferiti = () => {
        this.props.history.push({pathname: "/listaPreferiti", state: this.props.id });
    }

    logout = () =>{
        this.props.history.push("/");
    }

    setFormVisibility = () =>  {
        this.setState({clicked : true});
    }

    sendData = (event) => {
        var listaStateHome = [];

        listaStateHome[0] = this.props.id;
        listaStateHome[1] = event.target.value;
        listaStateHome[2] = true; //valore che mi indica nella home se ho effettuato la ricerca o no
        this.props.history.push({pathname: "/home", state: listaStateHome})
        console.log("Questo è l'id inserito in listaStateHome "+listaStateHome[0])
    }

   
    render (){
      
      return(
        <div className="shadow1 mb-5 bg-white rounded" style={ { marginLeft : '2%', marginRight : '2%', marginTop: "1%" }} fluid = "true">

          <Navbar bg="primary" variant="dark" sticky="top" style={{fontSize : '1.3em', paddingLeft : '48px', paddingRight : '48px'}} >
              
              <Nav className ="mr-auto ">
              <DropdownButton id="dropdown-item-button" title="MYACCOUNT">
                      <Dropdown.Item as="button" onClick={this.showSelezionatore}>View your Profile</Dropdown.Item>
                      <Dropdown.Item as="button" onClick={this.showListaPreferiti}>Favourite List</Dropdown.Item>
                      <Dropdown.Divider/>
                      <Dropdown.Item as="button" onClick={this.logout}>Logout</Dropdown.Item>
                  </DropdownButton>
              </Nav>
              <Navbar.Brand style ={{display:"block", textAlign:"center", marginRight:"auto", marginLeft: "auto"}} >
                    RECRUITING
              </Navbar.Brand>
              <Nav className="ml-auto" style={{fontSize : '0.95em'}}> 
               
                {!this.state.clicked &&
                <Row>
                    <Button className="btn btn-secondary" style={{marginTop: "1.4%"}} onClick={this.setFormVisibility}>
                        {!this.state.clicked && <p>SEARCH</p>}</Button>
                </Row>}
                
                {this.state.clicked &&
                <Row>
                    <Button className="btn btn-secondary" style={{marginTop: "1.4%"}} >
                        SHOW PROFILE</Button>
                </Row>}
                
                
              </Nav>
          </Navbar>
          {this.state.clicked &&
                    <Row style = {{padding: "48px", marginLeft: "15px"}}>
                        
                        <Form style ={{display: "block", marginLeft: "auto", marginRight: "auto"}}>
                        <p style={{color: "red"}}>* Seleziona un campo specifico di ricerca</p>
                            <Row>
                                <Col>
                                <DropdownButton id="dropdown-item-button" title="SEARCH FOR">
                                    <Dropdown.Item as="button" value = "Name">Name</Dropdown.Item>
                                    <Dropdown.Item as="button" value = "Age">Age</Dropdown.Item>
                                    <Dropdown.Item as="button" value = "Qualification">Qualification</Dropdown.Item>
                                </DropdownButton>
                                </Col>
                                <Col>
                                <Form.Control placeholder="Type here" onChange ={this.sendData}/>
                                </Col>
                            </Row>
                            
                        </Form>
                    </Row>
                }
        </div>
      );
    }


}

export default withRouter(NavBarPrincipal);