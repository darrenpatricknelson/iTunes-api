import './assests/App.css';
import React, { useState } from 'react';
import Favorites from './components/Favorites.js';
import Results from './components/Results.js';
import SearchForm from './components/SearchForm.js';

export const searchItunesAPI = async (searchResult, optionsForm) => {
  const response = await fetch(`/api/${searchResult}&${optionsForm}`);
  return new Promise(async (resolve, reject) => {
    if (response.ok) {
      try {
        const data = await response.json();
        resolve(data);
      } catch (err) {
        console.log({ err });
      }
    }

    reject(response.statusText);
  });
};

function App() {
  // create hooks
  const [inputForm, setInputForm] = useState(''); // value from the input field
  const [optionsForm, setOptionsForm] = useState(''); // value from the options field
  const [error, setError] = useState(null); // for the error message
  const [errorMessage, setErrorMessage] = useState(''); // the error message
  const [isLoading, setIsLoading] = useState(false); // while the backend searchs the api
  const [isLoaded, setIsLoaded] = useState(false); // after the backends search is complete

  const [favorites, setFavorites] = useState([]); // State for the results and favorites tab

  const [data, setData] = useState(null); // The data returned from the api search

  // results

  const submitForm = () => {
    setIsLoading(true);
    setIsLoaded(false);
    setError(false);

    // replace white spaces in the search with '+' and lowercase
    const searchResult = inputForm.replace(/\s/g, '+').toLowerCase();

    searchItunesAPI(searchResult, optionsForm).then((data) => {
      // console.log(data);
      const payload = data.payload;
      if (!data.success) {
        setIsLoading(false);
        setError(true);
        setErrorMessage(
          'Failed to load media resource. Check your search input'
        );
        return;
      }

      setIsLoading(false);
      setData(payload);
      setIsLoaded(true);
    });
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
          {error && <h3>{errorMessage}</h3>}
          {isLoading && <p>Loading...</p>}
          {isLoaded && (
            <Results
              values={{ results: data, favorites: favorites }}
              methods={{ setFavorites: setFavorites }}
            />
          )}
        </div>
      </div>
      <Favorites
        values={{ favorites: favorites }}
        methods={{ setFavorites: setFavorites }}
      />
    </div>
  );
}

export default App;
