import React, { Component } from 'react';
import './style.css';
import {withRouter} from 'react-router';

class SignUp extends React.Component{
    
    goToPage(){
        this.props.history.push("/home");
      }
    render(){
        return (
            <div>
                <div class="logInBox">
        <img src="DefaultUser.png"  class ="user"/>
        <h2>Log In Here</h2>
        <form>
            <p>Email: </p>
            <input type="email" name="" placeholder="Enter your valid email"/>
            <p>Password: </p>
            <input type="password" name="" placeholder="Enter your password" />
            <button class="logInButton" onClick={this.goToPage.bind(this)}>Sign Up</button>
        </form>
         </div>
            </div>
        );
    }
}

export default withRouter(SignUp);