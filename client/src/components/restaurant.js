import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Restaurant extends Component {

  render() {
   if(!this.props.active_restaurant){
    return (<div>pick restuarant</div>)
  
  }
    return (<div>
       <img src={this.props.active_restaurant.image}/>
       <h2 align="right">{this.props.active_restaurant.name}</h2>
       <h4 align="right">{this.props.active_restaurant.address}</h4>
       <h4 align="right">{this.props.active_restaurant.phone}</h4>
       <button align="right">Add Review</button>
     </div>)
   
  }
}

function mapStateToProps(state) {
  
  return {
    active_restaurant: state.active_restaurant
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReview: addReview}, dispatch)
};

export default connect(mapStateToProps)(Restaurant)