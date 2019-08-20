import React, { Component } from 'react';
import mountainBackgound from './Images/background.jpg'
import './Trip.css'




export default class Trip extends Component {
  constructor(){
    super()
    this.state ={
      Users :[],
      TripNamed: false
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    // .then(data =>this.setState({
    //   data:[data]}))
      .then(response =>console.log(response))
  }

  handleClick=(event)=>{
    event.preventDefault()
    this.setState({
      TripNamed: true
    })
    console.log("i was CLicked")
  }


  render() {
    return (
     
      <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
   
     <form className = 'TripName'>
       <label className = 'title'>
       <h2 > What Would you like to name your trip?</h2> 
           <input className = 'field' type='text'name='tripName' placeholder = 'ex. Japan 2019' value = {this.state.firstName} onChange={this.handl}></input>
           <input className = 'field' type = 'submit' value = 'Start Planning!' onClick= {this.handleClick} ></input>
       </label>
   </form>
      
  </div>

     )
   }
}


    