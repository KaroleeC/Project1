import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class List extends Component{

    renderListItem() {
        console.log(this.props.restuarants)
        return this.props.restaurants.map((restaurant) => {
            return (
                <li key={restaurant.id}>{restaurant.name}</li>
            )
        })
    }

    render() {
        return(
            <ul>
                {this.renderListItem()}
            </ul>
        )
}

}

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props
function mapStateToProps(state) {
  return {restaurants: state.restaurants} 
};

export default connect(mapStateToProps)(List);