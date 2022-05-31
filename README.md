# iTunes-api

iTunes music api built using Express for backend and React for frontend

## Installation

    - The project is broken up into 2 parts
        - Backend
        - Frontend

# install backend

    - To install backend
        - cd to the backend folder
        - type 'npm ci' into the terminal

# install Frontend

    - To install frontend
        - cd to the frontend folder
        - type 'npm ci' into the terminal

### launching the apps

    - First launch the backend before the frontend
    - To start the backend app
        - cd to the backend folder
        - type 'npm start' into the terminal
    - To start the frontend app
        - cd to the frontend folder
        - type 'npm start' into the terminal

#### How to use the app

    - The app is pretty straight forward and user friendly\
    - Once the backend server is up and running and the frontend has been started
    - You will see a simple form to fill out
    - The form consists of:
        - A text input to put the name of the song/movie/book etc or the name of the artist/actor or author
        - The second input field is a dropdown which consist of the type of media
        - Once you fill out the form, hit the search button
    - The frontend will then send the information from the form to the backend/server
    - The server will run a fetch using iTunes api which will send back a payload of results
    - You will then see cards on the frontend
    - These cards consist of:
        - The name of the artist/actor/author;
        - Information on the type of media;
        - The name of the song/movie/book;
        - A link to the iTunes versions; and
        - A little heart to add the media to your favorites list
    - Your favorites list:
        - On the top right of the screen, there is button that opens a tab that will contain a list of your favorited media
        - Click the button to open and close the tab
        - The tab will contain a list of your favorited media
        - As well as a link to the iTunes version
        - And a heart if you want to un-favorite the media
            - Unfavoriting the media will remove it from your favorites tab

##### App security

    - There were no API keys used in this app

###### Link to the deployed version of the app

-
