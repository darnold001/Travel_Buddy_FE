import React, { Component } from 'react'
import '../App.css'
import mountainBackgound from './Images/background.jpg'


export default class UserProfile extends Component{
    constructor(){
        super()
        this.state ={
            firstName: "",
            lastName: "",
            email: "",
            userCreated: false
        }
    }

    handleFnameChange = (event) =>{
       this.setState({firstName: event.target.value});
    }
    handleLnameChange = (event) =>{
      this.setState({lastName: event.target.value});
    }
    handleEmailChange = (event) =>{
      this.setState({email: event.target.value});
    }

    handleClick = event =>{
        event.preventDefault()
        this.createUpdateRequest(event)
    }


    createUpdateRequest = (event) =>{
        fetch(`http://localhost:3000/users/${this.props.userID}`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            f_name: this.state.firstName.toLowerCase(),
            l_name: this.state.lastName.toLowerCase(),
            email: this.state.email.toLowerCase(),
            password: 'null'
          })
        })
      }







    render(){
        console.log(this.props)
        return(
            <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
                <h1 className = 'title2'>User Profile Page</h1>
                <form className = 'signup'>
                    <label className = 'title'>
                    <h2 > Hi {this.props.firstName} this is what we have on file:</h2> 
                        <input className = 'field' type='text'name='f_name' placeholder = {this.props.firstname} value = {this.state.firstName} onChange={this.handleFnameChange}></input>
                        <input className = 'field' type='text'name='l_name'placeholder = {this.props.lastname} value = {this.state.lastName} onChange={this.handleLnameChange}></input>
                        <input className = 'field' type='text'email='email'placeholder = {this.props.email} value = {this.state.email} onChange = {this.handleEmailChange}></input>
                        <input className = 'field' type = 'submit' value = 'Update Profile' onClick= {this.handleClick} ></input>
                    </label>
                </form>
            </div>
        )

    }
}