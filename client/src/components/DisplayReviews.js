import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Review extends Component{

    constructor(props){
        super(props);

        this.renderusercomments = this.renderusercomments.bind(this)
    }



    //function to get specific id 
 renderusercomments() {
     return this.props.reviews.map( (review) => {
        return(
        <div key={review.id} id="comments">
            <p > user: {review.userid} restaurant: {review.restaurantid} score: {review.score} </p>
            
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