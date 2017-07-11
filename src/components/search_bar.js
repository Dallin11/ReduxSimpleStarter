import React,  { Component } from 'react';  //alwasy need to import react even fi you arent using it. 

class SearchBar extends Component {
   constructor(props) {
       super(props);

       this.state = { term: ''};
   }
   //whenever we use state we use class based components
   //When data is changing over time thats when you would use state. 
   
    render() {
        return (
            <div className="search-bar">
        <input 
        value = {this.state.term}
         onChange={event => this.onInputChange(event.target.value)} />
            </div>
            //Just to reference state not to define it reference is ok to use this.state^
    ); 
    }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}



//Each class has its own state, when something is changed the render component reruns.
//Functional components do not have state only class based components have state.
// Only inside the constructor function do we define state. No where else... ever. 
//Use this.setState everywhere else to update the state at different points in your app.


export default SearchBar; 