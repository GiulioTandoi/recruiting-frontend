//import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import React, {Component} from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import './CSS/NavBarPrincipal.css';

import FormControl from 'react-bootstrap/FormControl'

class NavBarPrincipal extends Component{
    constructor(props){
        super(props);
        this.state={dettaglioProfiloSeleionatore : []}
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
              <Navbar.Brand style ={{marginLeft: "200px "}} >
                    RECRUITING
              </Navbar.Brand>
              <Nav className="ml-auto" style={{fontSize : '0.95em'}}> 
                <FormControl type="text" placeholder="Find Profile" className="shadow mr-md-2" style={{marginTop: "1.4%"}} />
                <Button className="btn btn-secondary" style={{marginTop: "1.4%"}} >SEARCH</Button>
              </Nav>
          </Navbar>
      </div>
      );
    }


}

export default withRouter(NavBarPrincipal);