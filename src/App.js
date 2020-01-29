import React from 'react';
import {Component} from 'react';
import Login from './Login.js';
import {Route} from 'react-router-dom';
import Profilo from './Profilo.js';
import {BrowserRouter} from 'react-router-dom';
import Selezionatore from './Selezionatore.js';
import ListaPreferiti from './ListaPreferiti.js';
import ModificaSelezionatore from './ModificaSelezionatore';
import Register from './Register.js';
import Home from './Home.js';


class App extends Component {

  constructor(){
    super ();
    this.state= {listaelementi : [] ,loggedIn : false};
  }

  render(){
    return (
      <div className= "App">
        <BrowserRouter>
        
          <Route exact path="/" component={Login}/>
          <Route path ="/home" component={Home}/> 
          <Route path="/profilo" component={Profilo}/>
          <Route path="/selezionatore" component={Selezionatore}></Route>
          <Route path="/listaPreferiti" component={ListaPreferiti}></Route>
          <Route path="/modificaSelezionatore" component={ModificaSelezionatore}></Route>
          <Route path="/register" component={Register}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
