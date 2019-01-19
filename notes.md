
* The App component renders the SearchBar component.
* When a user enters a term and hits enter, the JSX <form> element runs the onFormSubmit() 
  method passed to it.
* SearchBar's onFormSubmit() method prevents the form automatically being submitted and invokes
  the callback function passed as a prop into SearchBar.
* This callback is onSearchSubmit.
* onSearchSubmit does a get request and returns a 'response' object (could name it anything).
* It then accesses the image-specific data ('results') and assigns it to the images property on 
  the state object.
* Setting state means the App component (and its child, SearchBar) rerender.
* This renders the length of the image array (number of images) under the search bar.