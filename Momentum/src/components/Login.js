import React from 'react';
function Login(props){
    return(
      <div className="component-entering center column">
          <h2>Hello what's your name?</h2>
          <form
            name="login"
            className="login-form-div"
            onSubmit={props.state.handleLoginSubmit}>
              <input
                name={'name'}
                value={props.state.user.name}
                onChange={props.state.handleChange}
                className="login-input" />
          </form>
      </div>
    )
}
export default Login;
