import React, {Component} from 'react';
import axios from 'axios';
import {Button, Card, Image} from 'react-bootstrap';
import './CSS/Selezionatore.css';
import './CSS/Profilo.css';
import './CSS/Button.css';
import NavBar2 from './NavBar2';
//import { Home } from '@material-ui/icons';



class Selezionatore extends Component{
    
    constructor(props){
        super (props);
        this.state={dettaglioProfiloSelezionatore : []}
        
    }

    mostradati = () => {
        const apiUrl ="http://localhost:8080/dettagliSelezionatore";
        axios.get(apiUrl,{
                params : {
                    id: this.props.location.state.idSelezionatore
                }
            }
        ).then(response => {
            const {data} = response;
            this.setState({dettaglioProfiloSelezionatore : data});
            console.log(this.state.dettaglioProfiloSelezionatore)
        })
    }

    componentDidMount = () => {
        this.mostradati();
    }
    
    componentWillReceiveProps(){
        this.mostradati();
    }
    mostraListaPreferiti =() => {
        this.props.history.push({pathname : "/listaPreferiti" , state : {idSelezionatore : this.props.location.state.idSelezionatore}});
    }

    modifica =() => {
        this.props.history.push({pathname : "/modificaSelezionatore" , state : {idSelezionatore :this.props.location.state.idSelezionatore}});
    }
    render(){
        let stato ;
        if (this.state.dettaglioProfiloSelezionatore.stato ==null || this.state.dettaglioProfiloSelezionatore.stato === ""){
            stato= "Stato assente";
        }else {
            stato = this.state.dettaglioProfiloSelezionatore.stato;
        }
    
        return(
            <div style={{minWidth:"420px"}} >
            <NavBar2 idSelezionatore={this.state.dettaglioProfiloSelezionatore.id}></NavBar2>
            <div className= "col-lg-12" style={{ width: '35%', height : '40', margin:"auto" }} >

                    
                    <Image variant="top" src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg" 
                    roundedCircle className ="image shadow" />
                    <Card.Body className="col-md-12" style={{margin:"auto"}} >
                        <Card.Title className="corpoTesto">{this.state.dettaglioProfiloSelezionatore.nome} {this.state.dettaglioProfiloSelezionatore.cognome}</Card.Title>
                        <Card.Text className="corpoTesto">
                            Email: {this.state.dettaglioProfiloSelezionatore.email}<br/><br/>
                            Stato: {stato} 
                        </Card.Text><br/> <br/>
                        
                        <Button onClick={this.mostraListaPreferiti}  
                                    className = "col-md-5 btn btn-secondary"
                                    style={{margin:"auto",  display: "block"}}
                            >LISTA PREFERITI</Button>
                        
                        <Button variant="outline-primary" onClick={this.modifica} 
                                    className ="col-md-5 btn btn-secondary"
                                    style={{marginLeft:"auto",marginRight: "auto",
                                      display: "block", marginTop:"16px"}}

                            >MODIFICA</Button>
                   
                    </Card.Body>
         
            </div>
            </div>
        );
    }


}

export default Selezionatore;

