import React, {Component} from 'react'

class Saludo extends Component{

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return(
            <div>
                <h3>{this.props.saludo}</h3>
            </div>
        )
    }

}

export default Saludo