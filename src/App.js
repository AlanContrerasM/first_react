import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Saludo from './components/Saludo'
import Crear from './components/Crear'
import Edit from './components/Edit'
import './App.css';
import axios from 'axios'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {

  constructor(){
    super();
    this.state = {
      saludo:"Hola desde React",
      despedida:"Adios desde React",
      text:"Empezamos en 0",
      articulos:[],
      facturas:[],
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
    axios.get('https://papeleriabackend.herokuapp.com/api/v1/articulos')
    .then(response =>{
      this.setState({
        articulos:response.data
      })
    })
    .catch(err => console.log(err))

    axios.get('https://papeleriabackend.herokuapp.com/api/v1/facturas')
    .then(response =>{
      this.setState({
        facturas:response.data
      })
    })
    .catch(err => console.log(err))
    
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

  updateArticulos(){
    if(this.state.articulos.length == 0){
      return <div>Loading...</div>
    }else{
      let articulo = this.state.articulos.map(element =>{
        return <Card nombre = {"Articulo: "+element.name} telefono = {"Precio: "+element.price}/>
      })
      return articulo
    }
  }

  updateFacturas(){
    if(this.state.facturas.length == 0){
      return <div>Loading...</div>
    }else{
      let factura = this.state.facturas.map(element =>{
        return <Card nombre = {"Factura de: "+element.rfc} telefono = {"Total: "+element.total}/>
      })
      return factura
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
      // <div className="App">
      //   <Navbar/>
      //   <button onClick={this.cambiarEstado}>sumar 1</button>
      //   <Saludo saludo = {this.state.numero}/>
      //   <button onClick={this.cambiarEstado2}>Restar 1</button>
      //   {this.retronaParrafo()}
      //   <div className="container">
      //   <h1>Articulos</h1>
      //   <div className="row">{this.updateArticulos()}</div>
      //   <h1>Facturas</h1>
      //   <div className="row">{this.updateFacturas()}</div>
      //   <h1>PokeDex</h1>
      //   <div className="row">{this.updateCardPokemon()}</div>
      //   </div>
      //   {/* {this.updateComponent()} */}
      // </div>

      //para hacer routing

      <BrowserRouter>
      <main>
        <Route exact path="/" component={Navbar}/>
        <Route exact path="/login" component={Crear}/>
        <Route exact path="/edit" component={Edit}/>

      </main>
      
      </BrowserRouter>
    );
  }
}

export default App;
