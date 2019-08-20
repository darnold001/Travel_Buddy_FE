import React, { Component } from 'react';
import mountainBackgound from './Images/background.jpg'
import './Trip.css'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '70%',
  height: '70%'
};

export class MapContainer extends Component {
  constructor(){
    super()
    this.state ={}
  }


  render() {
    return (
      <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
      <form className = 'planner'>
          <label className = 'title'>
          <h2 > Please fill out the fields below:</h2> 
              <input className = 'field' type='text'name='f_name' placeholder = 'City' value = {this.state.firstName} onChange={this.handleFnameChange}></input>
              <input className = 'field' type='text'name='l_name'placeholder = 'Country' value = {this.state.lastName} onChange={this.handleLnameChange}></input>
              <input className = 'field' type='text'email='email'placeholder = 'PH' value = {this.state.email} onChange = {this.handleEmailChange}></input>
              <input className = 'field' type = 'submit' value = 'Start Planning!' onClick= {this.handleClick} ></input>
          </label>
      </form>
      
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ 
         lat: 39.7392,
         lng: -104.9903
        }}
        className = 'GoogleMaps'
      />
  </div>

     )
   }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyBJ7Eirannn34iuAKfE63LCryiupRk0rCw'
})(MapContainer);

    