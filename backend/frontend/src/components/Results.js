import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavButton from './FavButton.js';

// this component will display the results of the api search
export default function Results(props) {
  // deconstruct props
  const { results } = props.values;

  // renders a card for each media returned by the api search
  // that card will display certain information
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
