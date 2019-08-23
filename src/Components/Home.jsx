import React, { Component } from 'react'

export default class Home extends Component{

componentDidMount(){
        fetch(`http://localhost:3000/locations/${this.props.tripID}`)
        .then(response =>response.json())
        .then(response =>{response.map(response => console.log('maps',response))})
}

delete = () =>{

}

reateElement = (response) => {
return (
    <div>
        <h1>{response.locName}</h1>
        <p>Notes: {response.notes}</p>
        <button className = 'Delete' value = 'Delete' onClick ={this.delete}></button>
        <button className = 'Edit' value = 'Edit' onClick ={this.edit}></button>
    </div>

)
}

    render(){
        return(
            <div>
            <h1>Your Saved Trips</h1>
            {this.createElement}
            </div>
        )

    }
}