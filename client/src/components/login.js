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
      <div className="card offset-sm-4 col-sm-4 offset-sm-4" >
        <h2 className="card-header text-center"  >Login</h2>
        <form className="card-body container" >
          <button onClick={base.googleLogin} className="btn btn-danger col-sm-12" >Login with Google</button>
          <button onClick={base.facebookLogin} className="btn btn-primary col-sm-12" >Login with Facebook</button>
          <button onClick={base.githubLogin} className="btn btn-secondary col-sm-12" >Login with GitHub</button>
          <button onClick={base.logout} className="btn btn-light offset-sm-2 col-sm-8 offset-sm-2" >Sign Out</button>
        </form>
      </div>
    )
  }
}

export default Login;