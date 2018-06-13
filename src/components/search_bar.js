// Class for Search Bar UI
// (c) Chris Lowe May 2018

// {Component} means create a const of that component called Component
// This is a class-based component vs a function-based one since we need additional logic
import React, {Component} from 'react';

class SearchBar extends Component {
  // called when a new instances of a class are created
  // designed to initialize variables
  constructor(props) {
    super(props);

    // only change state directly in a constructor
    this.state = { term: ''};
  }
  // defining a method on the React class
  // every class must have a render function
  // if the state of a class object changes, it calls render again
  render() {
    // create a new element called 'input' and assign the property 'onChange'
    // return <input onChange={(this.onInputChange)} />;

    // could also be written as this to be more concise
    // return <input onChange={event => console.log(event.target.value)} />;
    return (
      <div>
      <input
        value = {this.state.value}
        onChange = {event => this.setState({term: event.target.value})} />
      </div>
    );

  }

  // detect the change from input search bar
  // onInputChange(event) {
  //   // console.log(event.target.value);
  //   this.setState({term: event.target.value});
  // }

}

// make the SearchBar UI element exportable for other classes
export default SearchBar;
