import React, {Component} from 'react';
import {Button, Dropdown,DropdownButton, Nav, FormControl, Navbar} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import './CSS/Button.css';
import './CSS/NavBarPrincipal.css';


class NavBar2 extends Component{

    render(){
        return(

            <div className="shadow1 mb-5 bg-white rounded" style={ { marginLeft : '2%', marginRight : '2%', marginTop: "1%" }} fluid = "true">

                <Navbar bg="primary" variant="dark" sticky="top" style={{fontSize : '1.3em', paddingLeft : '48px', paddingRight : '48px'}} >
                    
                    <Nav className ="mr-auto ">
                    <DropdownButton id="dropdown-item-button" title="MYACCOUNT">
                            <Dropdown.Item as="button" onClick={this.mostraSelezionatore}>View your Profile</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={this.mostraLista}>Favourite List</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item as="button">Logout</Dropdown.Item>
                        </DropdownButton>
                    </Nav>
                    <Navbar.Brand style ={{marginLeft: "200px "}} >
                            RECRUITING
                    </Navbar.Brand>
                    <Nav className="ml-auto" style={{fontSize : '0.95em'}}> 
                        <FormControl type="text" placeholder="Find Profile" className="shadow mr-md-2" style={{marginTop: "1.4%"}} />
                        <Button className="btn btn-secondary" style={{marginTop: "1.4%"}}>SEARCH</Button>
                    </Nav>
                </Navbar>
             </div>


        );
    }

}


export default withRouter(NavBar2);