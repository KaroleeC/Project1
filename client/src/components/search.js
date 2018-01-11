import React from 'react'
import { searchRestaurant } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'



class Search extends React.Component { 
    search () {
       
       let inputValue =  document.getElementById('input').value;
       axios.post('/api/search', {term: inputValue})
         .then((response)=>{
 
             this.props.searchRestaurant(response.data);
         })
         .catch((err) => {
             console.log('inside of catch', err)
         })

    }
    render() {
       return (
           <div>
               search:
               <input type='text' id='input' />
               <button onClick={this.search.bind(this)}>submit</button>

           </div>
       )
    }
}
function mapStateToProps(state) {
    return {restaurants: state.res} 
};

function matchDispatchToProps (dispatch){
    return bindActionCreators({searchRestaurant: searchRestaurant}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Search)

