import React, { Component } from 'react'
import './Tripdetails.css'
import mountainBackgound from './Images/background.jpg'
import MapWindow from './Map'
import { GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

// const mapStyles = {
//     width: '70%',
//     height: '70%'
//   };

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
          .then(result => console.log('Success', this.state))
          .catch(error => console.error('Error', error));
      };

    render(){
        console.log("state check", this.state.lat)
        return (
        <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
            <form className = 'planner'>
              
              <h2 > Please fill out the fields below:</h2> 
                  <PlacesAutocomplete
                        value={this.state.address}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
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
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
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
          
              < MapWindow className = 'GoogleMaps2' lat = {this.state.lat} long = {this.state.long}/>
      </div>
    
         )
       }
    }
    
    export default GoogleApiWrapper({
        apiKey:'AIzaSyDl5qefR-U20uyuwSrDBAi3xHPY8qErDUs'
    })(TripDetails);

        