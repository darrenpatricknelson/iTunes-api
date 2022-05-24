import './assests/App.css';
import React, { useState } from 'react';
import Favorites from './components/Favorites.js';
import Results from './components/Results.js';
import SearchForm from './components/SearchForm.js';

function App() {
  const searchItunesAPI = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        // return response;
        console.log(response);
      });
  };

  // create hooks
  const [inputForm, setInputForm] = useState(''); // value from the input field
  const [optionsForm, setOptionsForm] = useState(''); // value from the options field
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  const [data, setData] = useState(null);

  // results

  const [url, setUrl] = useState('');
  const submitForm = () => {
    // replace white spaces in the search with '+' and lowercase
    const searchResult = inputForm.replace(/\s/g, '+').toLowerCase();

    // validation (we don't want the media to be empty)
    if (optionsForm === '') {
      var optionsResult = 'all';
    } else {
      var optionsResult = optionsForm;
    }
    // build the url
    setUrl(`https://itunes.apple.com/search?term=${searchResult}&limit=10`);

    searchItunesAPI(url);
  };

  return (
    <div className="App">
      <div className="formAndResults">
        <div className="form">
          <SearchForm
            values={{
              inputForm: inputForm,
              optionsForm: optionsForm
            }}
            methods={{
              submitForm: submitForm,
              setInputForm: setInputForm,
              setOptionsForm: setOptionsForm
            }}
          />
        </div>
        <div className="results">
          {error && <h1>{error}</h1>}
          {!isLoaded && <p>Search for your favourite media</p>}
          {isLoaded && <Results values={{ data: data }} />}
        </div>
      </div>
      <div className="favorites">
        {/* <Favorites /> */}
        Favorites
      </div>
    </div>
  );
}

export default App;
