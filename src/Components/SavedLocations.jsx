import React, { Component } from 'react'

export default class SavedLocations extends Component{





createElement = () => {
    console.log('SAVED LOC', this.props)
return (
    <div>
        <h3 className = 'cardTitle'>{this.props.trip.locName}</h3>
        <p>Notes: {this.props.trip.notes}</p>
        <button className = 'Delete' value = 'Delete' text = 'Delete'onClick ={this.props.delete}>Delete</button>
        <button className = 'zoomTo' value = 'Zoom' text = 'Zoom To' onClick ={this.props.zoomTo}>Zoom To</button>
    </div>

)
}

    render(){
        return(
            <div className = 'cardContainer'>
            {this.createElement()}
            </div>
        )

    }
}