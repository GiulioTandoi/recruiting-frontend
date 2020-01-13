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
        this.state={dettagliProfilo : []}
        console.log("id "+ this.props.location.state.idProfilo);
        console.log(this.props );
    }

    componentDidMount = () => {
        const apiUrl = "http://localhost:8080/profilo";
        axios.get(apiUrl,{
            params: {
                id : this.props.location.state.idProfilo
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
            <div>
                <NavBar2 stato={this.props.location.state}></NavBar2>
                <Card className="shadow p-3 mb-5 bg-white rounded col-lg-12" 
                    style={{ width: '35%', height : '40%', marginTop : '5%', marginLeft:"auto", marginRight:"auto", minWidth:"200px " }}>
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
            </div>
        );
    }

}

export default Profilo;