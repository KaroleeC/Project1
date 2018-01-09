import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './DisplayReviews';


class User extends Component{


    render() {
        return(
            <div>
            <p> User Page </p>
            <p>Welcome, {this.props.user.name} </p>
            <p>You are located at: {this.props.user.location} </p>
            <p>Your Bio</p>
            <p> {this.props.user.bio} </p>
            <div >
            Comments
            <Review user='1'/>
            </div>
            
            </div>
        )
}

}

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props

function mapStateToProps(state) {
  return { user: state.user} 
};

export default connect(mapStateToProps)(User);