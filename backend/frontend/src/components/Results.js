import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Results(props) {
  const [favorite, setFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const addFavourite = (data) => {
    // console.log(data.artistName);
    setFavorite((prev) => !prev);
    setFavorites((prev) => [...prev, data]);
  };

  useEffect(() => {
    console.log(favorites);
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
              <button className="starButton" onClick={() => addFavourite(val)}>
                {/* {favorite ? (
                  <i className="fa-solid fa-star starLogo starLogoTrue"></i>
                ) : (
                  <i className="fa-solid fa-star starLogo"></i>
                )} */}
                <i className="fa-solid fa-star starLogo"></i>
              </button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
