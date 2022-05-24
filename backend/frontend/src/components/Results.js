import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Results(props) {
  // create values from props
  if (props.values.data) {
    const { results } = props.values.data;
  }
  //   console.log(results);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>artistName</Card.Title>
        <Card.Text>
          Media: (kind)
          <br />
          Genre: (primaryGenreName)
          <br />
          Release Date: (releaseDate)
          <br />
          Title: (trackCensoredName)
        </Card.Text>
        <Button variant="primary">
          <a
            href="https://music.apple.com/us/artist/rihanna/63346553?uo=4"
            target="blank"
          >
            (artistViewUrl)
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}
