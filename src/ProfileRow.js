import React , {Component } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';
import { FavoriteOutlined } from '@material-ui/icons';
import axios from 'axios';



class ProfileRow extends Component{

    constructor(props){
        super(props);
        this.state = {id : this.props.risposta.id , link : false}
        console.log("Id " + this.props.risposta.id + " " +this.props.idSelezionatore)
    }

    aggiungiPreferito = () =>{
        const apiUrl = "http://localhost:8080/inserisciPreferito";
        console.log(this.state.id + " " + this.props.idSelezionatore)
        axios.post(apiUrl,
            {
                idProfilo : this.state.id,
                idSelezionatore : this.props.idSelezionatore
            }).then(
                console.log("Ballo")
            )
     
    }

    mostraProfilo = ()=>{
        
        this.props.history.push({pathname: "/profilo", state: this.props.risposta.id });

    }

    mostraLink= (evt) =>{  // Quando usi un metodo che interagisce in tempo reale con la UI si passa sempre evt (event) come parametro e lo si gestisce con evt.preventDefault()
        evt.preventDefault();
        this.setState({link :true});
    }
    render(){

        return(
            <Card style={{marginTop : '16px', fontSize : '1.1em'} }>
                <Card.Header as="h5" >{this.props.risposta.nome} {this.props.risposta.cognome}</Card.Header>
                <Card.Body>
                    <div className="row">
                        <div className="col" >
                            <div className="row">
                            <div className="col" >
                                <Card.Text >
                                    Qualifica: <b style = {{fonstSize : '20rem'}}>{this.props.risposta.qualifica}</b>
                                </Card.Text>
                                
                                <Card.Text>
                                    Disponibilità trasferte: {this.props.risposta.disponibilita}
                                </Card.Text>
                                </div>
                            </div>
                            <div className="row" style={{marginTop: '68px', textAlign : 'bottom'}}>
                                <div className="col"  >
                                <FavoriteOutlined color="secondary" onClick={this.aggiungiPreferito}></FavoriteOutlined>
                                <Card.Link href="" onClick={this.mostraProfilo} style={{marginLeft:"16px"}}>
                                    View Profile
                                    </Card.Link>
                                <Card.Link href="" onClick ={this.mostraLink}>Get Link</Card.Link>
                                {this.state.link && <p>{this.props.risposta.link}</p>}
                                </div>
                            </div>
                        </div>
                        
                        <div className="col">
                            <Image align="right" alt="Smiley face" height="171px" weight="180px" src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg" roundedCircle></Image>
                        </div>
                    </div>
                </Card.Body>

            </Card>
        );


    }


}

export default withRouter(ProfileRow);  // non essendo renderizzato da APp.js come oggetto Route (perchè ProfileRow non ha un endpoint) sono costretto ad usare
//questa sintassi per far si che questo componente comunichi con gli altri oggetti Route 