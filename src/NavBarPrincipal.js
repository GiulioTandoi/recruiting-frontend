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
        this.sendData = this.sendData.bind(this)
        this.state={clicked: false, value : "", searchType : "", id :0}
        console.log("L'id del selezionatore nella NavBarPrincipal è "+this.props.id)
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

    setValue = (event) => {
        this.setState({value: event.target.value})
        this.setState({id:this.props.id})
        console.log("Il value settato è "+ event.target.value+" l'id settato è "+this.state.id);
    }

    sendData = (event) => {
        console.log("Id "+this.state.id+" Value "+this.state.value+" Searched "+true)
        this.props.history.push({pathname: "/home", state:
                 {id: this.state.id, value : this.state.value, searched : true, searchType : "Name"}})
       
    }

    setSearchType = (event) =>{
        console.log("Valore del searchType "+event.target.name);
        this.setState({searchType : event.target.name});
        
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
                    <Button className="btn btn-secondary" style={{marginTop: "1.4%"}} onClick={this.sendData} >
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
                                <Form.Control placeholder="Type here" id = "form" onChange = {this.setValue}/>
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