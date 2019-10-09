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
        console.log(this.props.location.state)
    }

    componentDidMount = () => {
        const apiUrl ="http://localhost:8080/dettagliSelezionatore";
        axios.get(apiUrl,{
                params : {
                    id: this.props.location.state
                }
            }
        ).then(response => {
            const {data} = response;
            this.setState({dettaglioProfiloSelezionatore : data});
            console.log(this.state.dettaglioProfiloSelezionatore)
        })
    }

    mostraListaPreferiti =() => {
        this.props.history.push({pathname : "/listaPreferiti" , state : this.props.location.state});
    }

    modifica =() => {
        this.props.history.push({pathname : "/modificaSelezionatore" , state : this.props.location.state});
    }

    tornaHome = () => {
        this.props.history.push({pathname: "/home", state: this.props.location.state});
    }

    render(){
        let stato ;
        if (this.state.dettaglioProfiloSelezionatore.stato ==null){
            stato= "Stato assente";
        }else {
            stato = this.state.dettaglioProfiloSelezionatore.stato;
        }
    
        return(
            <div style={{minWidth:"420px"}}>
            <NavBar2></NavBar2>
            <div className= "col-lg-12" style={{ width: '35%', height : '40%', marginTop : '3%', margin:"auto" }} >

                    
                    <Image variant="top" src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg" 
                    roundedCircle className ="image shadow" />
                    <Card.Body className="col-md-12" style={{margin:"auto"}} >
                        <Card.Title className="corpoTesto">{this.state.dettaglioProfiloSelezionatore.nome} Giulio Tandoi  {this.state.dettaglioProfiloSelezionatore.cognome}</Card.Title>
                        <Card.Text className="corpoTesto">
                            Email: {this.state.dettaglioProfiloSelezionatore.email} ahahah@ciao.wow<br/><br/>
                            Stato: {stato} 
                        </Card.Text><br/> <br/>
                        
                        <Button onClick={this.mostraListaPreferiti}  
                                    className = "col-md-5 btn btn-secondary"
                                     
                            >LISTA PREFERITI</Button>
                        
                        <Button variant="outline-primary" onClick={this.modifica} 
                                    className ="col-md-5 btn btn-secondary"
                                    style={{marginLeft:"80px"}}
                            >MODIFICA</Button>
                   
                    </Card.Body>
         
            </div>
            </div>
        );
    }


}

export default Selezionatore;
