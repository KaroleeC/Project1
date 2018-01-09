import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './DisplayReviews';
import List from './restaurant-list';


class User extends Component{
    constructor(props) {
        super(props)
        this.renderCondition = this.renderCondition.bind(this);

    }
    
    renderCondition() {
        console.log(this.props.user.searchyelp);
        if( this.props.user.searchyelp === "true"){
            return ( <div> <List/> </div> )

        } else {
            return (
                <div >
                Comments
                <Review userindex="1" username="Kari"/>
                </div>
            )
        }

    }


    render() {
        return(
            <div>
            <p> User Page </p>
            <p>Welcome, {this.props.user.name} </p>
            <p>You are located at: {this.props.user.location} </p>
            <p>Your Bio</p>
            <p> {this.props.user.bio} </p>
            {this.renderCondition()}
            
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