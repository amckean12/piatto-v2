import React, { Component } from 'react';


//Component Styling CSS Section



//Start or React Component
class RegisterContainer extends Component {
  render(){
    return(
      <div className="RegisterContainer">
        <form className="RegisterForm">
        <h1>New User</h1>
        <label>First Name</label>
          <input type="text" className="RegisterInput"/><br/>
        <label>Last Name</label>
          <input type="text" className="RegisterInput"/><br/>
        <label>Username</label>
          <input type="text" className="RegisterInput"/><br/>
        <label>Password</label>
          <input type="password" className="RegisterInput"/><br/>
          <input type="submit" value="Create User" /><br/>
        </form>
      </div>
    )
  }
}

export default RegisterContainer
