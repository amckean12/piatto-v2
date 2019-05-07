import React, { Component } from 'react';


//Component Styling CSS Section


//Start or React Component
class LoginContainer extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return(
      <div className="LoginContainer">
        <form className="LoginForm">
          <h1>Login</h1>
          <label>Username</label>
            <input type="text" className="LoginFormInput" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username}/><br/>
          <label>Password</label>
            <input type="password" className="LoginFormInput" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/><br/>
            <input type="submit" value="Login" /><br/>
        </form>
      </div>
    )
  }
}

export default LoginContainer
