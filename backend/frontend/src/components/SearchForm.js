import '../assests/App.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const media = [
  {
    title: 'Movie',
    value: 'movie'
  },
  {
    title: 'Podcast',
    value: 'podcast'
  },
  {
    title: 'Music',
    value: 'song'
  },
  {
    title: 'Music video',
    value: 'musicVideo'
  },
  {
    title: 'Audiobook',
    value: 'audiobook'
  },
  {
    title: 'Short film',
    value: 'shortFilm'
  },
  {
    title: 'TV Show',
    value: 'tvShow'
  },
  {
    title: 'Software',
    value: 'software'
  },
  {
    title: 'eBook',
    value: 'ebook'
  }
];

function SearchForm(props) {
  const { inputForm, optionsForm } = props.values;
  const { submitForm, setInputForm, setOptionsForm } = props.methods;

  // error/validation
  const [inputError, setInputError] = useState('');
  const [selectError, setSelectError] = useState('');

  // handle submit
  const handleSubmit = () => {
    setInputError('');
    setSelectError('');

    if (!inputForm) {
      setInputError('Please enter a valid search term');
      return;
    }

    if (!optionsForm) {
      setSelectError('Please select a media type');
      return;
    }

    // clear input fields
    setInputForm('');
    setOptionsForm('');
    submitForm();
  };

  return (
    <Form>
      {/* input field for the name of the artist, actor or author */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter your the name of the artist your search for..."
          value={inputForm}
          onChange={(e) => {
            setInputForm(e.target.value);
          }}
        />
      </Form.Group>
      <p className="errorMessage">{inputError}</p>
      <Form.Select
        aria-label="Default select example"
        className="options"
        value={optionsForm}
        onChange={(e) => setOptionsForm(e.target.value)}
      >
        <option key="All" value="all">
          Select the media
        </option>
        {media.map((val) => {
          return (
            <option key={val.title} value={val.value}>
              {val.title}
            </option>
          );
        })}
      </Form.Select>
      <p className="errorMessage">{selectError}</p>

      <Button variant="success" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
