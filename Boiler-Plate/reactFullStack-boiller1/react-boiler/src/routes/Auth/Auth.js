import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp, logIn, handlePasswordChange, handleEmailChange } from './../../ducks/auth/authActions';
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { email, password } = this.props
    console.log( this.props.user );
    return(
      <div >
        Auth here
      </div>
    );
  }
}

export default connect(state => ({
  password: state.auth.password,
  email: state.auth.email,
  user: state.auth.user
}), { handlePasswordChange, handleEmailChange })(Auth);
