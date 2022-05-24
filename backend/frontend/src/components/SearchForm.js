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
    value: 'music'
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
  },
  {
    title: 'All',
    value: 'all'
  }
];

function SearchForm(props) {
  const { inputForm, optionsForm } = props.values;
  const { submitForm, setInputForm, setOptionsForm } = props.methods;

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter your search item"
          value={inputForm}
          onChange={(e) => setInputForm(e.target.value)}
        />
      </Form.Group>

      <Form.Select
        aria-label="Default select example"
        className="options"
        value={optionsForm}
        onChange={(e) => setOptionsForm(e.target.value)}
      >
        <option>Select the media</option>
        {media.map((val) => {
          return (
            <option key={val.title} value={val.value}>
              {val.title}
            </option>
          );
        })}
      </Form.Select>
      <br />
      <Button variant="success" onClick={submitForm}>
        Success
      </Button>
    </Form>
  );
}

export default SearchForm;
