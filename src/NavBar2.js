import React, {Component} from 'react';
import {Button, Navbar} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import './CSS/Button.css';
import './CSS/NavBarPrincipal.css';


class NavBar2 extends Component{

    constructor(props){
        super(props);
        
        console.log("Ciao sono NavBar2 e questo è l'idSelezionatore "+ this.props.idSelezionatore);
    }
    tornaHome = () => {
        this.props.history.push({pathname: "/home", state: {idSelezionatore: this.props.idSelezionatore}});
    }

    logout = () =>{
        this.props.history.push("/");
    }

    render(){
        return(

            <div className="shadow1 mb-5 mainDiv" style={ { marginLeft : '2%', marginRight : '2%', marginTop: "1%" }} fluid = "true">

                <Navbar bg="primary" variant="dark" sticky="top" 
                    style={{fontSize : '1.3em', paddingLeft : '48px', paddingRight : '48px', minWidth:"420px"}} >
                    
                    <Button variant="primary" className="col-md-1" style={{color:"orange"}} onClick={this.tornaHome}>
                        HOME
                    </Button>
                    <Navbar.Brand style={{textAlign:"center", marginRight:"-16px"}} className="col-md-10">
                            RECRUITING
                    </Navbar.Brand>
                    <Button variant="primary" className="col-md-1" style={{color:"orange"}} onClick={this.logout}>
                        LOGOUT
                    </Button>
                </Navbar>
             </div>


        );
    }

}


export default withRouter(NavBar2);