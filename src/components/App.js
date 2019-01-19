import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// 
class App extends React.Component {
  async onSearchSubmit(term) {
    // http get request
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },  
      headers: {
        Authorization: 'Client-ID 746af259ec449cd27e683513f8d561f25869fb0123d756e56f28ca81f31c32d1' 
      }
    });

      console.log(response.data.results);
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