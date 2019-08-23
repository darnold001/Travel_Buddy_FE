import React, { Component } from "react"
import './Tripdetails.css'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// const API_KEY = process.env.REACT_APP_APIKey;


const WindowSize = {
    width: '90%',
    height: '70%',
    margin: "auto",
    borderRadius: "1.5rem",
    alignSelf: 'center',
    border: "solid grey 2px"
  };


export class MapWindow extends Component{
    constructor(props){
        super(props)
        this.state = {
            // lat: this.props.lat,
            // long: this.props.long,
            latitude: 39.7689,
            longitude: -104.9742
        }
    }

createMarker = () =>{
    new window.google.maps.marker({
        position: { lat: this.state.lat, lng: this.state.long},
        map: this.googleMap
    })
}
    

    render(){
        // console.log('Lat',this.props.lat)
        // console.log('Long',this.props.long)
        // console.log('props',this.props)

        return(

            <Map
            google={this.props.google}
            zoom={18}
            style={WindowSize}
            center={{ 
             lat: this.props.lat,
             lng: this.props.long
            }}
            initialCenter={{lat: 39.7689, 
                            lng: -104.9742
            }}
            className = 'maps'
          > 
          <Marker position={{lat:this.props.lat, lng: this.props.long}} />
          </Map>
        )
    }

}
export default GoogleApiWrapper({
    apiKey:process.env.REACT_APP_APIKey
})(MapWindow);
