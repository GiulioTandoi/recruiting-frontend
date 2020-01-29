import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import './CSS/Button.css';

class ModificaSelezionatore extends Component{

    constructor(props){
        super(props);
        this.state={ nome:"",cognome:"",email:"",stato:""}
    }

    onChangeNome = (e) =>{
        this.setState ({nome : e.target.value});
        console.log("Ciao "+ e.target.value);
        
    }
    onChangeCognome = (e) =>{
        console.log("Ciao "+ e.target.value);
        this.setState ({cognome : e.target.value});
        
        console.log(this.state.cognome)
    }
    onChangeEmail = (e) =>{
        this.setState ({email : e.target.value});
        console.log("Ciao "+ e.target.value);
    }
    onChangeStato = (e) =>{
        this.setState ({stato : e.target.value});
        console.log("Ciao "+ e.target.value);
    }
    clearValue = (e) => {
        e.target.value="";

    }


    componentDidMount =()=> {
        const apiUrl ="http://localhost:8080/dettagliSelezionatore"
        axios.get(apiUrl,{
            params : 
                {
                    id: this.props.location.state.idSelezionatore
                }

        }).then(response =>{

                const{data} = response;
                console.log(data);
                this.setState({nome : data.nome});
                this.setState({cognome : data.cognome});
                this.setState({email : data.email});
                this.setState({stato : data.stato});
                
                
            }

        )
    }

    modificaSelezionatore =() => {
        const apiUrl = "http://localhost:8080/modificaDettagli";
        axios.post(apiUrl,
            {
                id: this.props.location.state.idSelezionatore,
                nome:this.state.nome,
                cognome:this.state.cognome,
                email:this.state.email,
                stato:this.state.stato
            }).then(
                
                this.props.history.push({pathname : "./selezionatore", state:{idSelezionatore :this.props.location.state.idSelezionatore}})
            )
    }

    render(){
        return(
            
            <Form style={{marginLeft : "30%", marginRight : "30%", marginTop : "10%"}}>
                <h4 >MODIFICA I DETTAGLI DEL TUO PROFILO QUI</h4>
                <br></br>
                <Form.Group >
                    <Form.Label>Nome</Form.Label>
                    <Form.Control placeholder={this.state.nome} onClick={this.clearValue} onChange={this.onChangeNome}/> 
                </Form.Group>
                <Form.Group >
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control placeholder={this.state.cognome} onClick={this.clearValue} onChange={this.onChangeCognome}/>
                </Form.Group><Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder={this.state.email} onClick={this.clearValue} onChange={this.onChangeEmail}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label>Stato</Form.Label>
                    <Form.Control placeholder={this.state.stato} onClick={this.clearValue} onChange={this.onChangeStato}/>
                </Form.Group>
                
                <Button className="btn btn-secondary" onClick={this.modificaSelezionatore}>
                    SUBMIT
                </Button>
                </Form>
        );
    }


}


export default ModificaSelezionatore;