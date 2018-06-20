//name, price, stock, description
import React, {Component} from 'react'

class Crear extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container col-4">
            <form>
                <div className="form-group">
                    <label for="inlineFormInput">Nombre del Articulo</label>
                    <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Libros"/>
                </div>
                <div className="form-group">
                    <label for="inlineFormInput">Stock del Articulo</label>
                    <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Stock"/>
                </div>
                <div className="form-group">
                    <label for="inlineFormInputGroup">Precio</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">$</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Precio"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Descripcion</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" classNameName="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

export default Crear