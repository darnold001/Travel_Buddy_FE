import React, { Component } from 'react';
import mountainBackgound from './Images/background.jpg'
import './Trip.css'
import {withRouter} from 'react-router-dom'





export default class Trip extends Component {
  constructor(){
    super()
    this.state ={
      userID: "",
      TripNamed: false,
      tripName: ""
    }
  }

  handleTripName = (event) =>{
    this.setState({tripName: event.target.value});
}

  createPostRequest = () =>{
    fetch(`http://enigmatic-eyrie-69218.herokuapp.com/trips`,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trip_name: this.state.tripName,
        rating: 0,
        user_id: this.props.userID
      })
    })
    .then(response =>response.json())
    .then(response =>{this.props.setTopTripId(response)})
    .then(response1 =>{console.log('JSON Response', response1)})
  }


  

  

  handleClick=(event)=>{
    event.preventDefault()
    this.setState({ TripNamed: true })
    this.createPostRequest(event)
    this.props.history.push('/tripDetails')
  }

 
  render() {
    return (
     
      <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
     <form className = 'TripName' onSubmit = {this.handleClick}>
       <label className = 'title2'>
       <h2 > What would you like to name your trip?</h2> 
           <input className = 'field' type='text'name='tripName' placeholder = 'ex. Japan 2019' value = {this.state.tripName} onChange={this.handleTripName}></input>
           <input className = 'field' type = 'submit' value = 'Start Planning!' ></input>
       </label>
   </form>
      
  </div>

     )
   }
}


    