import React, { Component } from 'react';


//Component Styling CSS Section


//Start or React Component
class LoginContainer extends Component {
  render(){
    return(
      <div className="LoginContainer">
        <form className="LoginForm">
          <h1>Login</h1>
          <label>Username</label>
            <input type="text" className="LoginFormInput"/><br/>
          <label>Password</label>
            <input type="password" className="LoginFormInput"/><br/>
            <input type="submit" value="Login" /><br/>
        </form>
      </div>
    )
  }
}

export default LoginContainer
