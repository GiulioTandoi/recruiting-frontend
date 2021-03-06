import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import './CSS/Selezionatore.css';
import './CSS/Button.css';
import NavBar2 from './NavBar2';

class ListaPreferiti extends Component {
    constructor(props) {
        super(props);
        this.state = { listaPreferiti: [], link: false, vuoto: false, idSelezionatore: this.props.location.state.idSelezionatore }
        console.log(this.state.listaPreferiti)
        console.log("IdSelezionatore ricevuto dalla home " + this.state.idSelezionatore)
    }

    componentDidMount = () => {
        const apiUrl = "http://localhost:8080/listaPreferiti";
        console.log(this.state.idSelezionatore);
        axios.get(apiUrl,
            {
                params: {
                    id_selezionatore: this.state.idSelezionatore
                }
            }).then(response => {
                let { data } = response;
             
                if (data !== "") {
                    
                    this.setState({ listaPreferiti: data.profili , vuoto : false});
                    console.log("Vuoto settato a " + this.state.vuoto);
                }
                else {
                    
                    this.setState({ vuoto: true })
                    console.log("Vuoto settato a " + this.state.vuoto);
                }
                console.log(this.state.listaPreferiti);
            })
    }

    mostraLink = (evt) => {
        evt.preventDefault();
        this.setState({ link: true });
    }

    render() {
        return (
            <div>
                <NavBar2 idSelezionatore={this.state.idSelezionatore}></NavBar2>
                <div className="lista">
                    <ListGroup.Item variant="primary" action onClick={this.mostraLink} style={{ textAlign: "center" }}>
                        Ottieni link a lista
                    </ListGroup.Item>
                    
                    {this.state.link && <p>http://localhost:8080/listaPreferiti?id_selezionatore={this.state.idSelezionatore}</p>}
                    { !this.state.vuoto && 
                    <ListGroup>
                        {this.state.listaPreferiti.map((el, i) => <ListGroup.Item key={i} >{el.nome} {el.cognome}</ListGroup.Item>)}    
                    </ListGroup>}
                    
                    {this.state.vuoto && <p>La lista dei preferiti è vuota</p>}

                </div>
            </div>
        );
    }

}
export default ListaPreferiti;