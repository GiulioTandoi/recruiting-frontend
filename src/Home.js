import React , {Component } from 'react';
import Container from 'react-bootstrap/Container';
import ProfileRow from './ProfileRow.js';
import axios from 'axios';
import {Col, Row} from 'react-bootstrap';
import NavBarPrincipal from './NavBarPrincipal.js';

class Home extends Component{
    
    constructor(props){
        super(props);
        this.state={listaelementi :[]};
        console.log("L'id del selezionatore è " + this.props.location.state);
    }

    componentDidMount = () => {
        const apiUrl = "http://localhost:8080/home";  // bisogna cambiare il metodo in modo che faccia una post
        axios.get(apiUrl)
          .then(response => {
            const {profili} = response.data; //data è il campo di risposta di un Json all'interno del quale ci sono i dati che mi servono per la visualizzazione 
            console.log(JSON.stringify(profili));
            var lista= [];
            for (var i =0 ; i < profili.length ; i++){
                lista[i]=profili[i]; 
            }
            this.setState({listaelementi:lista});
            
          })
          .catch(error => {
            console.log(error);
          });
        }

    render (){
        
        const state = this.props.location.state;  // il campo state della location mi serve per passare oggetti tra le pagine (vedi Login.js riga 41 e 42)
        console.log("Questo è l'id che viene passato al Selezionatore " +state);
        return(
            
            <div className="App container-fluid" style = {{ paddingLeft : '0px', paddingRight : '0px'}}>
                
                <NavBarPrincipal id={state}></NavBarPrincipal>
                <Container style={{alignItems : "normal", display: "block", width : "60%"}}>
                    
                    <Row >
                        <Col> 
                            {this.state.listaelementi.map((el,i) => <ProfileRow risposta={el} idSelezionatore={this.props.location.state} key ={i}/>)} 
                        </Col>
                    </Row>

                </Container>
            </div>

        );

    }



}

export default Home;