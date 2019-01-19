import React from 'react';
// Can use any name for what you import from unsplash.js, just has to match
// it's use later in the code (unsplash.get). This effectively assigns an 
// instance of the axios client to the 'variable' named 'unsplash'.
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// 
class App extends React.Component {

  state = { images: []};

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}


export default App; 