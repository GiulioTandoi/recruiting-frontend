import React , {Component } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { withRouter } from 'react-router-dom';
import { FavoriteOutlined } from '@material-ui/icons';
import axios from 'axios';



class ProfileRow extends Component{

    constructor(props){
        super(props);
        this.state = {id : this.props.risposta.id , link : false, imageStr : ""}
        
        console.log("Id " + this.props.risposta.id + " " +this.props.idSelezionatore)
    }

    componentDidMount () {
        this.decodeImg();
    }    

    aggiungiPreferito = () =>{
        const apiUrl = "http://localhost:8080/inserisciPreferito";
        console.log(this.state.id + " " + this.props.idSelezionatore)
        axios.post(apiUrl,
            {
                idProfilo : this.state.id,
                idSelezionatore : this.props.idSelezionatore
            }).then(
                window.alert("Profilo aggiunto ai preferiti")
            )
     
    }

    mostraProfilo = ()=>{
        
        this.props.history.push({pathname: "/profilo", 
            state: { profilo :this.props.risposta, idSelezionatore : this.props.idSelezionatore} });

    }

    mostraLink= (evt) =>{  // Quando usi un metodo che interagisce in tempo reale con la UI si passa sempre evt (event) come parametro e lo si gestisce con evt.preventDefault()
        evt.preventDefault();
        this.setState({link :true});
    }

    decodeImg = () => {
        
        this.setState({imageStr : "data:image/jpeg;base64,"+this.props.risposta.image});
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
                        
                        <div className="col" display="block" >
                            <Image align="right" alt="Smiley face" height="90%" width="40%" src={this.state.imageStr} roundedCircle></Image>
                        </div>
                    </div>
                </Card.Body>

            </Card>
        );


    }


}

export default withRouter(ProfileRow);  // non essendo renderizzato da APp.js come oggetto Route (perchè ProfileRow non ha un endpoint) sono costretto ad usare
//questa sintassi per far si che questo componente comunichi con gli altri oggetti Route 