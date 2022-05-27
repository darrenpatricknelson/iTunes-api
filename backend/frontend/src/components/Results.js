import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FavButton from './FavButton.js';

export default function Results(props) {
  const [favorites, setFavorites] = useState([]);

  const addFavourite = (data) => {
    // what this function does is check the favorites array
    // if the array.length is equal to 0, it will add the new media as a favorite
    if (favorites.length === 0) {
      setFavorites((prev) => [...prev, data]);
      return;
    }

    // if the aray.length is not equal to 0,
    // it will check to see if the new media being add already exists inside of the array
    // if it does, it will then delete that media
    // My thinking is, the user cant/ doesnt want 2 sets of the same media in his/her favourite
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i] === data) {
        favorites.splice(i, 1);
        return;
      }
    }

    // if both the above checks are passed
    // the new media will simply be added
    setFavorites((prev) => [...prev, data]);
  };

  useEffect(() => {
    console.log({ favorites });
  }, [favorites]);

  // create values from props
  const results = props.values;

  return (
    <>
      {results.map((val, idx) => {
        return (
          <Card key={idx} style={{ width: '18rem' }}>
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

              <FavButton data={val} methods={addFavourite} />
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
