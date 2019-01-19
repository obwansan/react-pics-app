import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// 
class App extends React.Component {

  state = { images: []};

  // A callback function passed down to the SearchBar child component.
  // Refactored to a fat arrow function to bind the this context of this.setState
  onSearchSubmit = async (term) => {
    // http get request
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },  
      headers: {
        Authorization: 'Client-ID 746af259ec449cd27e683513f8d561f25869fb0123d756e56f28ca81f31c32d1' 
      }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}


export default App; 