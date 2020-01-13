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
        
    }
  
    mostraSelezionatore = () => {
        this.props.history.push({pathname: "/selezionatore", state: this.props.id });
        console.log("Id " + this.props.id)
    }

    mostraListaPreferiti = () => {
        this.props.history.push({pathname: "/listaPreferiti", state: this.props.id });
    }

    logout = () =>{
        this.props.history.push("/");
    }

    setFormVisibility = () =>  {
        this.setState({clicked : true});
    }
   
    render (){
      
      return(
        <div className="shadow1 mb-5 bg-white rounded" style={ { marginLeft : '2%', marginRight : '2%', marginTop: "1%" }} fluid = "true">

          <Navbar bg="primary" variant="dark" sticky="top" style={{fontSize : '1.3em', paddingLeft : '48px', paddingRight : '48px'}} >
              
              <Nav className ="mr-auto ">
              <DropdownButton id="dropdown-item-button" title="MYACCOUNT">
                      <Dropdown.Item as="button" onClick={this.mostraSelezionatore}>View your Profile</Dropdown.Item>
                      <Dropdown.Item as="button" onClick={this.mostraListaPreferiti}>Favourite List</Dropdown.Item>
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
                        <p style={{color: "red"}}>*E' necessario compilare almeno un  campo del form per la ricerca</p>
                            <Row>
                                <Col>
                                <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                <Form.Control placeholder="Last name" />
                                </Col>
                                <Col>
                                <Form.Control placeholder="Age" />
                                </Col>
                                <Col>
                                <Form.Control placeholder="Qualification" />
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