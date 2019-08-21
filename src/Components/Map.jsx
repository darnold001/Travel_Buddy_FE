import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const WindowSize = {
    width: '70%',
    height: '70%'
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
        console.log('Lat',this.props.lat)
        console.log('Long',this.props.long)
        console.log('props',this.props)

        return(

            <Map
            google={this.props.google}
            zoom={18}
            style={WindowSize}
            center={{ 
             lat: this.props.lat,
             lng: this.props.long
            }}
            className = 'GoogleMaps'
          > 
          <Marker position={{lat:this.props.lat, lng: this.props.long}} />
          {/* {this.createMarker()} */}
          </Map>
        )
    }

}
export default GoogleApiWrapper({
    apiKey:'AIzaSyDl5qefR-U20uyuwSrDBAi3xHPY8qErDUs'
})(MapWindow);
