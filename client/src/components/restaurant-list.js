import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectRestaurant } from '../actions/index'; 



class List extends Component{

    renderListItem() {
        console.log(this.props.restuarants)
        return this.props.restaurants.map((restaurant) => {
            return (
                <div className="ListEntry"
                key={restaurant.id}
                onClick={() => this.props.selectRestaurant(restaurant)}
                >
                    <div className="ListEntryImage">
                        <img class="resImg" src={restaurant.image} />
                    </div>
                    <div className="ListEntryInfo">
                        <div>{restaurant.name} </div>
                        <div>{restaurant.address}</div>
                    </div>
                
                
                </div>
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
  return {restaurants: state.restaurants
    } 
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectRestaurant: selectRestaurant}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(List);