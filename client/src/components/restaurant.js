import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectOption } from '../actions/index';

class Restaurant extends Component {

  render() {
   if(!this.props.active_restaurant){
    return (<div>pick restuarant</div>)
  
  }
    return (<div>
       <img src={this.props.active_restaurant.image_url}/>
       <h2 align="right">{this.props.active_restaurant.name}</h2>
       <h4 align="right">{this.props.active_restaurant.location.display_address.join(',  ')}</h4>
       <h4 align="right">{this.props.active_restaurant.phone}</h4>
       <button align="right" onClick={(e) => {
         e.preventDefault()
         this.props.selectOption('review');
       }}>Add Review</button>
     </div>)
   
  }
}

function mapStateToProps(state) {
  
  return {
    active_restaurant: state.active_restaurant,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectOption: selectOption}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Restaurant)