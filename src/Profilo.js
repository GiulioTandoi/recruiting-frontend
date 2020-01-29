import React , {Component} from 'react';
import axios from 'axios';
import './CSS/Profilo.css';
import './CSS/Selezionatore.css';
import './CSS/Button.css';
import {Card, Image} from 'react-bootstrap';
import NavBar2 from './NavBar2';


class Profilo extends Component{

    constructor(props){
        super(props);
        this.state={dettagliProfilo : [], imageStr : ""}
        console.log("id "+ this.props.location.state.profilo.id);
        
        //console.log(this.props);
    }

    componentDidMount = () => {
        const apiUrl = "http://localhost:8080/profilo";
        axios.get(apiUrl,{
            params: {
                id : this.props.location.state.profilo.id
            }
        }).then(
            response => {
                const {data} = response;
                //console.log(JSON.stringify(data));
                this.setState({dettagliProfilo: data});
        });

        this.decodeImg();
            
    }

    decodeImg = () => {
        
        this.setState({imageStr : "data:image/jpeg;base64,"+this.props.location.state.profilo.image});

    }

    render(){
        return(
            <div>
                <NavBar2 idSelezionatore={this.props.location.state.idSelezionatore}></NavBar2>
                <Card className="shadow bg-white " 
                    style={{paddingTop:'2%', width: '35%', height : '40%', margin: "auto" }}>
                    <Image alt="Smiley face" src={this.state.imageStr} roundedCircle className ="image shadow" />
                    
                    <Card.Body>
                        <Card.Title className="generale">{this.state.dettagliProfilo.nome} {this.state.dettagliProfilo.cognome}</Card.Title>
                        <Card.Text className="corpoTesto" style={{textAlign : "left", paddingLeft:"10%"}}>
                            Età: {this.state.dettagliProfilo.eta} <br/><br/>
                            Qualifica:  {this.state.dettagliProfilo.qualifica}<br/> <br/>
                            Disponibilità trasferte: {this.state.dettagliProfilo.disponibilita}<br/> <br/>
                            Link al profilo: {this.state.dettagliProfilo.link}
                        </Card.Text><br/> 
                    </Card.Body>
                </Card>
            </div>
        );
    }

}

export default Profilo;