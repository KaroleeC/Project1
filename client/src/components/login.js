import React from 'react';
import base from '../firebase.js';

class Login extends React.Component {
  constructor() {
    super();
  
    this.state = {
      user: null
    }
  }

  // componentDidMount to auth on refresh

  // auth function

  // auth handler for react-router

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <button onClick={base.googleLogin} >Login with Google</button>
          <button onClick={base.facebookLogin} >Login with Facebook</button>
          <button onClick={base.githubLogin} >Login with GitHub</button>
          <button onClick={base.logout} >Sign Out</button>
        </form>
      </div>
    )
  }
}

export default Login;