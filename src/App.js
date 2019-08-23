import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Signup from './Components/signup'
import Trip from './Components/Trip'
import Trips from './Components/Home'
import Profile from './Components/userProfile'
import TripDetails from './Components/TripDetails.jsx'
import AppNotFound from './Components/AppNotFound'



export default class App extends Component{
  constructor(){
    super()
    this.state ={
      userName: "dbarnold321@gmail.com",
      userID: "",
      tripID: ""
    }
  }

setTopState = (username) =>{
  this.setState({
    userName: username
  })
  console.log('MADE IT TO TOP STATE!', this.state)
}
setTopTripId = (event) =>{
  console.log('RESP', event)
this.setState({
  tripID: event.id
})
console.log('TOP TRIP ID ADDED',this.state)
}

setTopUserId = (id) =>{
  this.setState({
    userID:id
  })
  console.log('TOP USER ID ADDED',this.state)
}




render(){
  return(
    <Router>
    <div className = 'app'> 
          <div className = "nav">
            <Link className = 'link' to='/trips'>Trips</Link>
            <Link className = 'link' to='/signup'>SIGN UP (TEMP)</Link>
            <Link className = 'link' to='/trip'>Plan A Trip</Link>
            <Link className = 'link' to='/profile'>Profile</Link>
            <Link className = 'link' to='/tripDetails'>Trip Details</Link>
         </div>

    <Switch>
  <Route path='/signup' render ={(props)=><Signup {...props} setUsername = {this.setTopState} setTopUserId = {this.setTopUserId}/>}/>
  <Route path='/trip' render={(props)=><Trip {...props} userName = {this.state.userName} userID = {this.state.userID} setTopTripId = {this.setTopTripId}/>}/>
      <Route path='/profile' component ={Profile}/>
      <Route path='/trips' render ={(props)=><Trips {...props} tripID = {this.state.tripID}/>}/>
      <Route path='/tripDetails' render ={(props)=><TripDetails {...props} tripID = {this.state.tripID}/>}/>
      <Route component={AppNotFound}/>
    </Switch>
   
    </div>
    </Router>
  
    )
  }
}