import React, { Component } from 'react'
import '../App.css'
import mountainBackgound from './Images/background.jpg'
import MapWindow from './Map'
import { GoogleApiWrapper } from 'google-maps-react';
import SavedLocations from './SavedLocations'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';


export class TripDetails extends Component{
    constructor(){
        super()
        this.state ={
            lat: "",
            long: "",
            City: "",
            State: "",
            notes: "",
            selection: "",
            trips: []
        }
    }
    //DO NOT DELETE BELOW!!!
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

      createPost = (event) =>{
        fetch(`http://enigmatic-eyrie-69218.herokuapp.com/locations`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            locName: this.state.selection,
            lat: this.state.lat,
            long: this.state.long,
            notes: this.state.notes,
            city: "",
            country: "",
            trip_id: this.props.tripID
          })
        })
        .then(response => response.json())
        .then(this.tripsProp)
      }

  tripCards = () => {
    return this.state.trips.map(trip => {
      console.log(trip)
      return <SavedLocations delete={this.delete} zoomTo ={this.zoomTo} trip={trip} />
    })
  }    

  delete = (tripID) =>{
    fetch(`http://enigmatic-eyrie-69218.herokuapp.com/locations/${tripID}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      })
     const updatedTrips =  this.state.trips.filter(trip =>trip.id !==tripID)
     this.setState({
       trips:updatedTrips
     })
  }

  zoomTo = (lat, long)=>{
    console.log(lat, long)
    this.setState({
      lat: lat,
      long: long,
    })
  }
  

  tripsProp = (response) =>{
    this.setState({
      trips: [...this.state.trips, response]
    })
  }

searchHandler = (event) =>{
  this.setState({
    selection: event.target.innerText
  })
  
}
handleSubmit = (event) =>{
    event.preventDefault()
    this.createPost()
}

handleNotesChange = (event) =>{
    this.setState({notes: event.target.value});
  }

    render(){
       
        return (
        <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
          <div className = 'generalCardContainer'>{this.tripCards()}</div>
                
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
                    <span onClick= {this.searchHandler}>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <input className = 'notes' type='text' notes='notes'placeholder = 'Notes' value = {this.state.notes} onChange = {this.handleNotesChange}></input><br></br>
      <input className = 'field' type = 'submit' value = 'Start Planning!' onClick= {this.handleSubmit} ></input>
          </form>
              < MapWindow className = 'map' lat = {this.state.lat} long = {this.state.long}/>
      </div>
      
    
         )
       }
    }
    
    export default GoogleApiWrapper({
        apiKey:process.env.REACT_APP_APIKey
    })(TripDetails);

        