import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavButton from './FavButton.js';

export default function Results(props) {
  // create values from props
  const { results } = props.values;

  return (
    <>
      {results.map((val, idx) => {
        return (
          <Card className="card" key={idx} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{val.artistName}</Card.Title>
              <Card.Text>
                Title: {val.trackCensoredName}
                <br />
                Media: {val.kind}
                <br />
                Genre: {val.primaryGenreName}
                <br />
                Release Date: {val.releaseDate}
              </Card.Text>
              <Button
                className="loadMediaButton"
                variant="primary"
                onClick={() => window.open(val.artistViewUrl)}
              >
                View artist
              </Button>

              <FavButton
                data={val}
                values={{ favorites: props.values.favorites }}
                methods={{ setFavorites: props.methods.setFavorites }}
              />
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
