import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Signup from './Components/signup'
import Trip from './Components/Trip'
import SavedLocations from './Components/SavedLocations'
import Profile from './Components/userProfile'
import TripDetails from './Components/TripDetails.jsx'
import AppNotFound from './Components/AppNotFound'



export default class App extends Component{
  constructor(){
    super()
    this.state ={
      userName: "dbarnold321@gmail.com",
      userID: "",
      tripID: "",
      firstname: "",
      lastname: "",
      email: "",
    }
  }

setTopState = (username) =>{
  this.setState({
    userName: username
  })
}
setTopTripId = (event) =>{
  this.setState({
    tripID: event.id
  })
}

setTopUserId = (id) =>{
  this.setState({
    userID:id
  })
}

setUserInfo = (firstname, lastname, email) =>{
  this.setState({
    firstname: firstname, 
    lastname: lastname, 
    email: email
  })
  console.log('setUserObject',this.state)
} 




render(){
  return(
    <Router>
    <div className = 'app'> 
          <div className = "nav">
            {/* <Link className = 'link' to='/'>SIGN UP</Link> */}
           
            <Link className = 'link' to='/trip'>Plan A Trip</Link>
            <Link className = 'link' to='/tripDetails'>Trip Details</Link>
            <Link className = 'link-p' to='/profile'>Profile</Link>
         </div>
         

    <Switch>
      <Route exact path='/' render ={(props)=><Signup {...props} setUsername = {this.setTopState} setTopUserId = {this.setTopUserId} setUserInfo = {this.setUserInfo}/>}/>
      <Route path='/trip' render={(props)=><Trip {...props} userName = {this.state.userName} userID = {this.state.userID} setTopTripId = {this.setTopTripId}/>}/>
      <Route path='/profile' render ={(props)=><Profile {...props} firstname = {this.state.firstname} lastname = {this.state.lastname} email = {this.state.email} userID = {this.state.userID}/>}/>
      <Route path='/savedlocations' render ={(props)=><SavedLocations {...props} tripID = {this.state.tripID}/>}/>
      <Route path='/tripDetails' render ={(props)=><TripDetails {...props} tripID = {this.state.tripID}/>}/>
      <Route component={AppNotFound}/>
    </Switch>
   
    </div>
    </Router>
  
    )
  }
}