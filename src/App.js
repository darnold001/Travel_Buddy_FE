import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Signup from './Components/signup'
import Trip from './Components/Trip'
import SavedTrips from './Components/SavedTrips'
import Profile from './Components/userProfile'



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
      <Link className = 'link' to='/Signup'>SIGN UP (TEMP)</Link>
      <Link className = 'link' to='/trip'>Plan A Trip</Link>
      <Link className = 'link' to='/SavedTrips'>Your Trips</Link>
      <Link className = 'link' to='/profile'>Profile</Link>
    </div>





 
    <Switch>
      <Route path='/Signup' exact component ={Signup}/>
      <Route path='/trip' component ={Trip}/>
      <Route path='/savedTrips' component ={SavedTrips}/>
      <Route path='/profile' component ={Profile}/>
    </Switch>
   
    </div>
    </Router>
  
    )
  }
}