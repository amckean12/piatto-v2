import React, { Component } from 'react';


//Component Styling CSS Section


//Start or React Component
class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return(
      <div className="LoginContainer">
        <form className="LoginForm" onSubmit={(event) => this.handleSubmit(event)}>
          <h1>Login</h1>
          <label>Email</label>
            <input type="text" className="LoginFormInput" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email}/><br/>
          <label>Password</label>
            <input type="password" className="LoginFormInput" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/><br/>
            <input type="submit" value="Login" /><br/>
        </form>
      </div>
    )
  }
}

export default LoginContainer
