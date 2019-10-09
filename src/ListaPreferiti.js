import React, {Component} from 'react';
import axios from 'axios';
import {ListGroup} from 'react-bootstrap';
import './CSS/Selezionatore.css';
import './CSS/Selezionatore.css'
import {Row} from 'react-bootstrap';


class ListaPreferiti extends Component{
    constructor(props){
        super(props);
        this.state={listaPreferiti:[], link : false, vuoto: false}
        console.log(this.state.listaPreferiti)
    }

    componentDidMount = () => {
        const apiUrl = "http://localhost:8080/listaPreferiti";
        console.log(this.props.location.state);
        axios.get(apiUrl, 
            {
                params :{
                id_selezionatore: this.props.location.state 
            }
        }).then(response => {
            let {data} = response;
            if (data != null){
                this.setState({listaPreferiti : data.profili});}
            else{
                this.setState({vuoto : true})
            }
            console.log(this.state.listaPreferiti);
        })
    }

    mostraLink = (evt) =>{
        evt.preventDefault();
        this.setState({link:true});
    }

    render(){
        return(
            <div className="lista">
                <Row>
                   
                    <p className="home">Torna in Home</p>
                </Row>
                <ListGroup.Item variant="primary" action onClick={this.mostraLink} style={{textAlign : "center"}}>
                    Ottieni link a lista 
                </ListGroup.Item>
                {this.state.link && <p>http://localhost:8080/listaPreferiti?id={this.props.location.state}</p>}
                <ListGroup>
                    {this.state.listaPreferiti.map((el,i) =><ListGroup.Item key={i} >{el.nome} {el.cognome}</ListGroup.Item>)}
                </ListGroup>

                {this.state.vuoto && <h5>La lista dei preferiti è vuota</h5>}

            </div>
        );
    }

}
export default ListaPreferiti;