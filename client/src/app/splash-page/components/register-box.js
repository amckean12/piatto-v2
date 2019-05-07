import React, { Component } from 'react';


//Component Styling CSS Section



//Start or React Component
class RegisterContainer extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
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
      <div className="RegisterContainer">
        <form className="RegisterForm" onSubmit={(event) => this.handleSubmit(event)}>
        <h1>New User</h1>
        <label>First Name</label>
          <input type="text" className="RegisterInput" name="firstName" onChange={(event) => this.handleChange(event)} value={this.state.firstName}/><br/>
        <label>Last Name</label>
          <input type="text" className="RegisterInput" name="lastName" onChange={(event) => this.handleChange(event)} value={this.state.lastName}/><br/>
        <label>Username</label>
          <input type="text" className="RegisterInput" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username}/><br/>
        <label>Email</label>
          <input type="text" className="RegisterInput" name="email" onChange={(event) => this.handleChange(event)} value={this.state.email}/><br/>
        <label>Password</label>
          <input type="password" className="RegisterInput" name="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/><br/>
          <input type="submit" value="Create User" /><br/>
        </form>
      </div>
    )
  }
}

export default RegisterContainer
