import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class List extends Component{


    render() {
        if (!this.props.restaurants) {
            return (<div>search restaurants by name or cag and food</div>);
        }
        return(
            <div>
            <p> The Restaurant List </p>
            <h1>there are {this.props.restaurants.length} restaurants </h1>
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