//layout for app
import React from 'react'
import User from './userdisplay'
import Review from './DisplayReviews'
import Login from './login'
import Search from './search'
import Restaurants from './restaurant-list'
import Restaurant from './restaurant'
import ReviewForm from './ReviewForm'
import firebase from '../firebase'
import { activeUser } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'


class App extends React.Component {
  componentWillMount () {
    firebase.auth.onAuthStateChanged(user=> {
      if (user) {
        axios.get(`/api/reviews`).then( res => {
          console.log('User reviews', res.data)
          //set state with data
          this.props.initReviews(res.data);
          console.log('Reviews?', this.props.reviews)
      })
      .catch(err => { console.log('axois get request err (userdisplay.js', err); } );
        this.props.activeUser(user);
      } else {
        return (
          <div>
            <Login />
          </div>
        )
      }
    })
  }
  render() {
    return (
      <div>
        <Login />
        <User/>
        <Search />
        <Restaurants />
        <Restaurant />
        <Review />
        <ReviewForm />
       </div>
    )
  }
}
function mapStateToProps(state) {
  // return {restaurants: state.haha} 
  return {}
};

function matchDispatchToProps (dispatch){
  return bindActionCreators({activeUser : activeUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)
