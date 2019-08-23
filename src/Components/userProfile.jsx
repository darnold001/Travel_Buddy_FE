import React, { Component } from 'react'
import '../App.css'

export default class UserProfile extends Component{

    render(){
        return(
            <div className = 'BackGroundImageMap' style = {{ backgroundImage: "url("+mountainBackgound+")"}}>
                <h1>User Profile Page</h1>
            </div>
        )

    }
}