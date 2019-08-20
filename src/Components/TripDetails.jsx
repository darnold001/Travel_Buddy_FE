import React, { Component } from 'react'
import './Tripdetails.css'
import mountainBackgound from './Images/background.jpg'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '70%',
    height: '70%'
  };

export class TripDetails extends Component{
    constructor(){
        super()
        this.state ={
            City: "",
            State: "",
            Notes: ""

        }
    }

    render(){
        return (
        <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
            <form className = 'planner'>
              <label className = 'title'>
              <h2 > Please fill out the fields below:</h2> 
                  <input className = 'field' type='text'name='city' placeholder = 'City' value = {this.state.City} onChange={this.handleFnameChange}></input>
                  <input className = 'field' type='text'name='country'placeholder = 'Country' value = {this.state.lastName} onChange={this.handleLnameChange}></input>
                  <input className = 'field' type='text'email='email'placeholder = 'Notes' value = {this.state.email} onChange = {this.handleEmailChange}></input>
                  <input className = 'field' type = 'submit' value = 'Start Planning!' onClick= {this.handleClick2} ></input>
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
    })(TripDetails);

        