import React, { Component } from 'react';
import LoginContainer from './login-container.js'
import RegisterContainer from './register-box.js'

const LoginNewUserContainerDivStyle = {
  float: "right",
  width: "50%",
  height: "100%",
  textAlign: "center"
}

//Rename File

class InitialUserActionsContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoginOpen: true,
      isRegisterOpen: false
    }
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render(){
    return(
      <div className="LoginNewUserContainer" style={LoginNewUserContainerDivStyle}>
      <button className={"controller " + (this.state.isLoginOpen ? "selected-controller": "")} onClick={this.showLoginBox.bind(this)}>Login</button>
      <button className={"controller " + (this.state.isRegisterOpen ? "selected-controller": "")} onClick={this.showRegisterBox.bind(this)}>Register</button>
        {this.state.isLoginOpen && <LoginContainer />}
        {this.state.isRegisterOpen && <RegisterContainer />}
      </div>
    )
  }
}

export default InitialUserActionsContainer;
