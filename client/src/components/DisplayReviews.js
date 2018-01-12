import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Review extends Component{

    //function to get specific id 
 renderusercomments() {
     return this.props.reviews.map( (review) => {
        return(
        <div id="comments" key={review.userid}>
            <p > userid: {review.userid} restaurant: {review.restaurantid} score: {review.score} </p>
            
            <p>  {review.text} </p>
        </div>
        
        )
        
    } 
    )
 }


    render() {
        return(
            <div >
                {this.props.user}
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