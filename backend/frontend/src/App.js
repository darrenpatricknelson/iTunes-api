import './assests/App.css';
import React, { useState } from 'react';
import Favorites from './components/Favorites.js';
import Results from './components/Results.js';
import SearchForm from './components/SearchForm.js';

function App() {
  const [inputForm, setInputForm] = useState('');
  const [optionsForm, setOptionsForm] = useState('');

  // results

  const [inputForm2, setInputForm2] = useState('');
  const [optionsForm2, setOptionsForm2] = useState('');
  const submitForm = () => {
    setInputForm('');
    setOptionsForm('');

    // results
    setInputForm2(inputForm);
    setOptionsForm2(optionsForm);
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
          {/* <Results /> */}
          {/* Results */}
          {inputForm2}
          <br />
          {optionsForm2}
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
