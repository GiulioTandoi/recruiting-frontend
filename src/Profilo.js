import React , {Component} from 'react';
import axios from 'axios';
import './CSS/Profilo.css';
import './CSS/Selezionatore.css';
import './CSS/Button.css';
import {Card, Image} from 'react-bootstrap';


class Profilo extends Component{

    constructor(props){
        super(props);
        this.state={dettagliProfilo : []}
        console.log("id "+ this.props.location.state);
        console.log(this.props );
    }

    componentDidMount = () => {
        const apiUrl = "http://localhost:8080/profilo";
        axios.get(apiUrl,{
            params: {
                id : this.props.location.state
            }
        }).then(
            response => {
                const {data} = response;
                console.log(JSON.stringify(data));
                this.setState({dettagliProfilo: data});
            });
            
    }

    render(){
        return(
            <Card className="shadow p-3 mb-5 bg-white rounded" style={{ width: '35%', height : '40%', marginTop : '5%', marginLeft : '30%' }}>
            <Image variant="top" src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg" roundedCircle className ="image shadow" />
            <Card.Body>
                <Card.Title className="generale">{this.state.dettagliProfilo.nome} {this.state.dettagliProfilo.cognome}</Card.Title>
                <Card.Text className="corpoTesto">
                    Qualifica:  {this.state.dettagliProfilo.qualifica}<br/> <br/>
                    Disponibilità: {this.state.dettagliProfilo.disponibilita}<br/> <br/>
                    Link al profilo: {this.state.dettagliProfilo.link}
                </Card.Text><br/> 
            </Card.Body>
        </Card>
        );
    }

}

export default Profilo;