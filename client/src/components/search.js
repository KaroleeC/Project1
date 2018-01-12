import React from 'react'
import { searchRestaurant } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'



class Search extends React.Component { 
    search () {
       
       let inputValue =  document.getElementById('input').value.split(',');
       inputValue[0] = 'term=' + inputValue[0];
       inputValue[1] = 'location=' + inputValue[1];
       axios.post('/api/search', {query: inputValue})
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
    // return {restaurants: state.haha} 
    return {}
};

function matchDispatchToProps (dispatch){
    return bindActionCreators({searchRestaurant: searchRestaurant}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Search)

