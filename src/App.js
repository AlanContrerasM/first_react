import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Saludo from './components/Saludo'
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(){
    super();
    this.state = {
      saludo:"Hola desde React",
      despedida:"Adios desde React",
      text:"Empezamos en 0",
      numero:0,
      cards:[
        {nombre:"Ping",telefono:"1234567890"},
        {nombre:"Pong",telefono:"1234567890"},
        {nombre:"Es",telefono:"1234567890"},
        {nombre:"Un",telefono:"1234567890"},
        {nombre:"Muñeco",telefono:"1234567890"}
      ],
      pokemons:[]
    }  

  }

    updateComponent(){
      const cards = this.state.cards.map((element,index,array)=>{
        return <Card nombre = {element.nombre} telefono = {element.telefono}/>
      })
      console.log(cards)
      return cards
    }
    retronaParrafo(){
      return <p>Parrafo desde funcion </p>
    }

  componentDidMount(){
    axios.get('https://pokeapi.co/api/v1/pokedex/1/')
    .then(response =>{
      this.setState({
        pokemons:response.data.pokemon
      })
    })
    .catch(err => console.log(err))
  }

  updateCardPokemon(){
    if(this.state.pokemons.length == 0){
      return <div>Loading...</div>
    }else{
      let pokemons = this.state.pokemons.map(element =>{
        return <Card nombre = {element.name} telefono = {element.resource_uri}/>
      })
      return pokemons
    }
  }
  
  componentWillMount(){
    console.log("Will mount")
  }

  //e es por elemento
  cambiarEstado = (e) =>{
    var number = this.state.numero
    console.log("Le dio click")
    this.setState({
      //text:"Cambie el text a: Nuevo texto"
      numero:number +1
    })
  }
//para reducir el numero
  cambiarEstado2 = (e) =>{
    var number = this.state.numero
    console.log("Le dio click")
    this.setState({
      //text:"Cambie el text a: Nuevo texto"
      numero:number -1
    })
  }


  render() {
    return (
      <div className="App">
        <Navbar/>
        <button onClick={this.cambiarEstado}>sumar 1</button>
        <Saludo saludo = {this.state.numero}/>
        <button onClick={this.cambiarEstado2}>Restar 1</button>
        {this.retronaParrafo()}
        <div className="row">{this.updateCardPokemon()}</div>
        {/* {this.updateComponent()} */}
      </div>
    );
  }
}

export default App;
