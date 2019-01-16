import React from 'react';

class SearchBar extends React.Component {

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
          <label>Image Search</label>
           <input type="text" onChange={this.onInputChange} />
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