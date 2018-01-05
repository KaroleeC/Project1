import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { restaurantsreducer } from '../reducers/restaurantsreducer';


class List extends Component{


    render() {
        return(
            <p> The Restaurant List </p>
        )
}

}

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props
function mapStateToProps(state) {
  return( restaurants: state.restaurants );
}

export default connect(mapStateToProps)(List);