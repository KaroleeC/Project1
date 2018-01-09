import React from 'react';
import { searchRestaurant } from '../actions'
import { bindActionCreators } from 'redux';

class Search extends React.Component { 
    search() {
        console.log(this)
    }
    render() {
       return (
           <div>
               search:
               <input type='text' name='search' />
               <button onClick={this.search()}>submit</button>
           </div>
       )
    }
}

function matchDispatchToProps (dispatch){
    return bindActionCreators({searchRestaurant: searchRestaurant}, dispatch)
}

export default connect(matchDispatchToProps)(Search)

