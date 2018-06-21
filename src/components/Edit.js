//name, price, stock, description
import React, {Component} from 'react'
import Navbar from './Navbar'
import Card from './Card'
import axios from 'axios'

class Edit extends Component{

    constructor(props){
        super(props);
        this.state = {
            articulos:[],
            uid:undefined,
            name:undefined,
            stock:undefined,
            price:undefined,
            description:undefined
        }
       //esto si no usas arrow function para bindear 
       //this.onInputChange = this.onInputChange.bind(this)
    }

    componentDidMount(){
        axios.get('https://papeleriabackend.herokuapp.com/api/v1/articulos')
        .then(response =>{
          this.setState({
            articulos:response.data
          })
        })
        .catch(err => console.log(err))
        
      }


    updateArticulos(){
        if(this.state.articulos.length == 0){
          return <div>Loading...</div>
        }else{
          let articulo = this.state.articulos.map(element =>{
            return <Card nombre = {"Articulo: "+element.name} telefono = {"Precio: $"+element.price}/>
          })
          return articulo
        }
      }


    onInputChange=(e)=>{
        // console.log("Ejecute el onInputChange")
        // console.log(e.target.name)
        // console.log(e.target.value)
        if(e.target.name == "name"){
            //console.log('target es igual a name')
            this.setState({
                name:e.target.value
            })
        }else if(e.target.name == 'stock'){
            //console.log('target es igual a name')
            this.setState({
                stock:e.target.value
            })
        }else if(e.target.name == 'price'){
            this.setState({
                price:e.target.value
            })
        }else{
            this.setState({
                description:e.target.value
            })
        }
    }

    onSubmit=(e)=>{
        console.log("Desde el submit",this.state)   
        e.preventDefault()
        var json = {
            name:this.state.name,
            stock:this.state.stock,
            price:this.state.price,
            description:this.state.description
        }   
        
        if(this.state.name == undefined){
            alert("Escriba nombre del articulo")
        }else if(this.state.stock == undefined){
            alert("Escriba numero de stock del articulo")
        }else if(this.state.price == undefined){
            alert("Escriba precio del articulo")
        }else if(this.state.description == undefined){
            alert("Escriba descripcion del articulo")
        }else{
            axios.post('https://papeleriabackend.herokuapp.com/api/v1/articulos/create',json).then(articulo => {
                alert("Creaste el articulo: ",json)
                console.log("Creaste el articulo: ",json)
            }).catch(err=>{
                console.log(err)
                alert("lo siento existe un problema")
            })
        }

          
    }
    render(){
        console.log(this.state)
        return (

            <div className="Edit">
            <Navbar/>
            <div className="container">
            <h1>Elige Articulo por editar:</h1>
            <div className="row">{this.updateArticulos()}</div>
            </div>
            <div className="container col-4">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="inlineFormInput">Nombre del Articulo</label>
                    <input type="text" name="name" className="form-control mb-2" id="inlineFormInput" placeholder="Libro"
                    onChange={this.onInputChange}>
                    </input>
                </div>
                <div className="form-group">
                    <label for="inlineFormInput">Stock del Articulo</label>
                    <input type="number" name="stock" className="form-control mb-2" id="inlineFormInput" placeholder="Stock"
                    onChange={this.onInputChange}>
                    </input>
                </div>
                <div className="form-group">
                    <label for="inlineFormInputGroup">Precio</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">$</div>
                        </div>
                        <input type="number" name="price" className="form-control" id="inlineFormInputGroup" placeholder="Precio"
                        onChange={this.onInputChange}>
                    </input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Descripcion</label>
                    <textarea type="text" name="description" class="form-control" id="exampleFormControlTextarea1" placeholder="Descripcion" rows="3"
                    onChange={this.onInputChange}
                    ></textarea>
                </div>
                <button type="submit" classNameName="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
        )
    }
}

export default Edit