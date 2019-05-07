import React, { Component } from 'react';


class LoginContainer extends Component {
  render(){
    return(
      <div className="LoginContainer">
        <form className="LoginForm">
          <input type="text" className="LoginFormInput"/>
          <input type="password" className="LoginFormInput"/>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default LoginContainer
