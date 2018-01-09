import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class List extends Component{


    render() {
        return(
            <div>
            <p> The Restaurant List </p>
            </div>
        )
}

}

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props
function mapStateToProps(state) {
  return {restaurants: state.restaurants} 
};

export default connect(mapStateToProps)(List);