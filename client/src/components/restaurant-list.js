import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectRestaurant } from '../actions/index'; 
import axios from 'axios'


class List extends Component{
    handleRestaurantClick (restaurant) {
        axios.get('./api/restaurant', {
            params: {
              ID: restaurant.id
            }
          })
        .then((response) => {
          console.log('here is the response', response.data)
          this.props.selectRestaurant(restaurant, response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    renderListItem() {
        console.log(this.props.restuarants)
        return this.props.restaurants.map((restaurant) => {
            return (
                <div className="ListEntry"
                key={restaurant.id}
                onClick={() => this.handleRestaurantClick(restaurant)}
                >
                    <div className="ListEntryImage">
                        {/* <img className="resImg" src={restaurant.image_url} /> */}
                    </div>
                    <div className="ListEntryInfo">
                        <div>{restaurant.name} </div>
                        {/* <div>{restaurant.location.display_address.join(', ')}</div> */}
                    </div>
                
                
                </div>
            )
        })
    }

    render() {
        if (!this.props.restaurants) {
            return (<div>search restaurants by name or cag and food</div>);
        }
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectRestaurant: selectRestaurant}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(List);