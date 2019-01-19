import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  // The ES6 fat arrow function binds the 'this' context to the
  // class containing the method (i.e. SearchBar)
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  // When something is entered/deleted from the input element, this is an event (object).
  // The value of the input element is stored on the e.target.value property.
  // We pass the event object into the onChange callback so we can access e.target.value
  // and set it on the state object's term property. This is then assigned to the input 
  // element's value attribute (which would hold the same value if it wasn't assigned this.state.term!) 
  // onFormSubmit is called when the user presses enter.
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
          <label>Image Search</label>
           <input 
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;

/**
 * onInputChange() is named like this by convention: on + name-of-element + Change
 * e.g. onTextareaChange
 * Could be named anything though as long as it matches the name passed to the 
 * onChange prop.
 * 
 * this.onInputChange is a callback function, but don't put () on the end 
 * or it will be called every time SearchBar renders.
 * 
 * onChange is a built in React prop used for input elements. Others 
 * include onClick and onSubmit. The callback function passed to onChange will be 
 * called whenever the user changes text in an input.
 */