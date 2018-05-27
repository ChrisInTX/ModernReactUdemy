// Class for Search Bar UI
// (c) Chris Lowe May 2018

// {Component} means create a const of that component called Component
// This is a class-based component vs a function-based one since we need additional logic
import React, {Component} from 'react';

class SearchBar extends Component {
  // defining a method on the React class
  // every class must have a render function
  render() {
    return <input />;
  }
}

// make the SearchBar UI element exportable for other classes
export default SearchBar;
