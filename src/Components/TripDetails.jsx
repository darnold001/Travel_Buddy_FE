import React, { Component } from 'react'
import '../App.css'
import mountainBackgound from './Images/background.jpg'
import MapWindow from './Map'
import { GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
   //const API_KEY = process.env.REACT_APP_APIKey;

export class TripDetails extends Component{
    constructor(){
        super()
        this.state ={
            lat: "",
            long: "",
            City: "",
            State: "",
            Notes: ""

        }
    }
    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng=>this.setState({
              lat: latLng.lat,
              long: latLng.lng,
          }))
          .then(result => console.log('Success', result))
          .catch(error => console.error('Error', error));
      };

      createUser = (event) =>{
        event.preventDefault()
        console.log('I was CLICKED', this.state)
        fetch(`http://localhost:3000/location`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            country: '',
            city: this.state.lastName.toLowerCase(),
            locName: this.state.email.toLowerCase(),
            lat: this.state.lat,
            long: this.state.long,
            notes: '',
            tripid: ''
          })
        })
      }


    render(){
        console.log("state check", this.state.lat)
       
        return (
        <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
            <form className = 'planner'>
            
                  <PlacesAutocomplete
                        id = "googlePlaces"
                        value={this.state.address}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className = 'googlePlaces'>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#f2f2f2', cursor: 'pointer' }
                  : { backgroundColor: '#f2f2f2', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <input className = 'field' type='text'email='email'placeholder = 'Notes' value = {this.state.email} onChange = {this.handleEmailChange}></input>
      <input className = 'field' type = 'submit' value = 'Start Planning!' onClick= {this.handleClick2} ></input>
          </form>
              < MapWindow className = 'map' lat = {this.state.lat} long = {this.state.long}/>
      </div>
    
         )
       }
    }
    
    export default GoogleApiWrapper({
        apiKey:process.env.REACT_APP_APIKey
   
    })(TripDetails);

        