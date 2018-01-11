import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Review from './DisplayReviews';
import List from './restaurant-list';
import { toggleBio } from '../testactions/toggleBio';
import { changeBio } from '../testactions/changeBio';
//need a location finder for user location

class User extends Component{
    constructor(props) {
        super(props)

        this.renderCondition = this.renderCondition.bind(this);
        this.BioDisplay = this.BioDisplay.bind(this);
        this.BioChangehandler = this.BioChangehandler.bind(this);
    }
    
    renderCondition() {
        console.log(this.props.user.searchyelp);
        if( this.props.user.searchyelp === "true"){
            return ( <div> <List/> </div> )

        } else {
            return (
                <div >
                Comments
                <Review userindex={this.props.user.id} username={this.props.user.name}/>
                </div>
            )
        }

    }

    BioDisplay() {
        console.log('edit bio', this.props.editBio)
        //display either bio edit or bio depending on state 
        if(this.props.editBio.value) {
            //display edit box prepopulated with previous bio
            //save button or tansition edit to save??
            return(
                <div> <textarea defaultValue={this.props.user.bio} onChange={ (event) => {this.BioChangehandler(event)} } ref="bioText" ></textarea> </div>
            ) 
        } 
        else{
            return <p> {this.props.user.bio} </p>
           
        }

    }

    BioChangehandler() {
        //saves changes to biotext area
        this.props.changeBio(this.refs.bioText.value)
    }


    render() {
        
        return(
            <div>
            <p> User Page </p>
            <p>Welcome, {this.props.user.name} </p>
            <p>You are located at: {this.props.user.location} </p>
            <p>Your Bio <button onClick={ () => { this.props.toggleBio() }} >Edit</button></p>
            { this.BioDisplay() }
            {this.renderCondition()}
            </div>
        )
}

}

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props
function mapStateToProps(state) {
  return { user: state.user,
           editBio: state.editBio 
} 
};

//connect action creater to component/state
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleBio: toggleBio,
    changeBio: changeBio
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(User);