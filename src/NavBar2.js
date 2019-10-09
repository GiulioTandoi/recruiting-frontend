import React, {Component} from 'react';
import {Button, Navbar} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import './CSS/Button.css';
import './CSS/NavBarPrincipal.css';


class NavBar2 extends Component{

    render(){
        return(

            <div className="shadow1 mb-5 mainDiv" style={ { marginLeft : '2%', marginRight : '2%', marginTop: "1%" }} fluid = "true">

                <Navbar bg="primary" variant="dark" sticky="top" 
                    style={{fontSize : '1.3em', paddingLeft : '48px', paddingRight : '48px', minWidth:"420px"}} >
                    
                    <Button variant="primary" className="col-md-1" style={{color:"orange"}}>
                        HOME
                    </Button>
                    <Navbar.Brand style={{textAlign:"center", marginRight:"-16px"}} className="col-md-10" >
                            RECRUITING
                    </Navbar.Brand>
                    <Button variant="primary" className="col-md-1" style={{color:"orange"}} className>
                        LOGOUT
                    </Button>
                </Navbar>
             </div>


        );
    }

}


export default withRouter(NavBar2);