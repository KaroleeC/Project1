import React, { Component } from 'react';
import Restaurant from './restaurant';
import List from './restaurant-list';
import ReviewForm from './ReviewForm';
import Search from './search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from './userdisplay';
import { selectOption } from '../actions/index';



class Option extends Component {
  componentWillMount(){
    console.log('xxx', this.props.option)
  }

  render() {
   
    if (this.props.option === 'user') {
     return (
       <User />
     )
   }
   
    if (this.props.option === 'list') {
    return (
      <List />
    )
   }

   if (this.props.option === 'restaurant') {
     return (
       <Restaurant />
     )
   }

   if (this.props.option === 'review') {
     return (
       <ReviewForm />
     )
   }

  }
};


const mapStateToProps = (state) => {
  return {option: state.option}
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({selectOption: selectOption}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Option)
