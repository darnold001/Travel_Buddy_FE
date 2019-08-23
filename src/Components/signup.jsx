import React, {Component} from 'react'
import mountainBackgound from './Images/background.jpg'
import '../App.css'

export default class signup extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            userCreated: false
        }
    }


    createUser = (event) =>{
        event.preventDefault()
        console.log('I was CLICKED', this.state)
        fetch(`http://localhost:3000/users`, {
          method: 'POST',
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
        .then(response =>response.json())
        .then(response =>{this.props.setTopUserId(response.id)})
        //.then(response =>{this.props.setUserObject(response)})
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
      
      handleClick =(event)=>{
        this.createUser(event)
        this.props.setUsername(this.state.email)
        this.setState({userCreated: true})
        this.props.setUserInfo(
            this.state.firstName,
            this.state.lastName,
            this.state.email
        )
      }
    render(){
        return(
            <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
                <form className = 'signup'>
                    <label className = 'title'>
                    <h2 > Sign Up to Get Started!</h2> 
                        <input className = 'field' type='text'name='f_name' placeholder = 'First Name' value = {this.state.firstName} onChange={this.handleFnameChange}></input>
                        <input className = 'field' type='text'name='l_name'placeholder = 'Last Name' value = {this.state.lastName} onChange={this.handleLnameChange}></input>
                        <input className = 'field' type='text'email='email'placeholder = 'Email Address' value = {this.state.email} onChange = {this.handleEmailChange}></input>
                        <input className = 'field' type = 'submit' value = 'Start Planning!' onClick= {this.handleClick} ></input>
                    </label>
                </form>
            </div>
        )
    }





}
