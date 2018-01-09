import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Review extends Component{

<<<<<<< HEAD
    //function to get specific id 
 renderusercomments() {
     return this.props.reviews.map( (review) => {
        return(
        <div id="comments">
            <p > userid: {review.userid} restaurant: {review.restaurantid} score: {review.score} </p>
=======
    constructor(props){
        super(props);

        this.renderusercomments = this.renderusercomments.bind(this)
    }



    //function to get specific id 
 renderusercomments() {
    
     return this.props.reviews.filter(review => review.userid == this.props.userindex )
     .map( (review) => {

        return(
        <div key={review.id} id="comments">
            <p > user: {review.userid} restaurant: {review.restaurantid} score: {review.score} </p>
>>>>>>> userpage
            
            <p>  {review.text} </p>
        </div>
        
        )
        
    } 
    )
 }


    render() {
        return(
            <div >
<<<<<<< HEAD
                {this.props.user}
=======
                {this.props.username}
>>>>>>> userpage
            {this.renderusercomments()}    

            </div>
        )
}

}

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props
function mapStateToProps(state) {
  return {reviews: state.reviews} 
};

export default connect(mapStateToProps)(Review);