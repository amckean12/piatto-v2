import React, { Component } from 'react';


class LoginContainer extends Component {
  render(){
    return(
      <div className="LoginContainer">
        <form className="LoginForm">
          <input type="text" className="LoginFormInput"/><br/>
          <input type="password" className="LoginFormInput"/><br/>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

export default LoginContainer
