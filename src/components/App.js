import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// The program flow exits the axios.get method before a response is received from the api.
// So we need a .then function that we pass a callback...that processes the data when it's
// returned.
class App extends React.Component {
  onSearchSubmit(term) {
    // http get request
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },  
      headers: {
        Authorization: 'Client-ID 746af259ec449cd27e683513f8d561f25869fb0123d756e56f28ca81f31c32d1' 
      }
    }).then(response => {
      console.log(response.data.results);
    })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}


export default App; 