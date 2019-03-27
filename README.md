# Movie App 🎥

A Web Application made in React and CSS-in-JS  ([emotion](https://github.com/emotion-js/emotion)) for fun 🍿🍿🍿.

Functionality: Get data from Trakt api and Omdb api. Lists of Like and Watched movie. You can also check component to the [Storybook App](https://github.com/storybooks/storybook)

# Prerequisites

In order to run Movie App, you need Node, npm or yarn installed on your system.

Also, you must provide values for the following environment variables in file [api.js](./src/helpers/api.js):

```javascript
const TRAKT_API_KEY = "Your Trakt api key";
const OMDB_API_KEY = "Your OMDB api key";
```

How to specify the API Keys? Go to the website of those services and ask for one! :-)

- [Trakt Api Docs](https://trakt.docs.apiary.io/#)
- [Omdb Api Docs](http://www.omdbapi.com/)

# Install and usage

These instructions can be followed to run Movie App from a Bash terminal:

``` bash
git clone https://gitlab.com/Agillmann/react-movie-app.git
cd movie-app
```

Npm:

```bash
npm install
npm start
```

or Yarn:

```bash
yarn
yarn start
```

## Storybook App

``` bash
yarn run storybook
```

And then you can access the Web App by opening http://localhost:3000 on your web browser and acces the [Storybook App](http://localhost:9009).

# Credits

Adrien Gillmann - [Gitlab](https://gitlab.com/Agillmann/)