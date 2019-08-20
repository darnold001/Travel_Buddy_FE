import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Signup from './Components/signup'
import Trip from './Components/Trip'
import SavedTrips from './Components/SavedTrips'
import Profile from './Components/userProfile'
import TripDetails from './Components/TripDetails.jsx'
import AppNotFound from './Components/AppNotFound'



export default class App extends Component{
  constructor(){
    super()
    this.state ={

    }
  }
// THIS IS THE GET
//   componentDidMount(){
//     fetch('localhost:3000/users')
//     .then(response => response.json())
// // THIS NEEDS TO BE CHANGED!!!
//     .then(data => this.setState({users: data}))
    
//   }

  


render(){
  return(
    <Router>
    <div className = 'app'> 
          <div className = "nav">
            <Link className = 'link' to='/'>Home</Link>
            <Link className = 'link' to='/signup'>SIGN UP (TEMP)</Link>
            <Link className = 'link' to='/trip'>Plan A Trip</Link>
            <Link className = 'link' to='/savedTrips'>Your Trips</Link>
            <Link className = 'link' to='/profile'>Profile</Link>
            <Link className = 'link' to='/tripDetails'>Trip Details</Link>
         </div>

    <Switch>
      <Route path='/signup' exact component ={Signup}/>
      <Route path='/trip' component ={Trip}/>
      <Route path='/savedTrips' component ={SavedTrips}/>
      <Route path='/profile' component ={Profile}/>
      <Route path='/tripDetails' component ={TripDetails}/>}
      <Route component={AppNotFound}/>
    </Switch>
   
    </div>
    </Router>
  
    )
  }
}