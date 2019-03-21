import React from 'react';
import CardMovie from '../../CardMovie/CardMovieContainer';
import Nav from '../../Nav/NavContainer';
import styled from '@emotion/styled'

var white = "#FFFFFF";
var black = "#2D2D2D";
var red = "#C03A2B";

const TextTitle = styled.h2`
  color: ${red};
  font-family: NetflixBold;
  font-size: 64px;
`
const Home = ({handleClick, dataPopular, dataBoxOffice}) => (
  <div className="home">
    <Nav/>
    
    <div className="row">
      <TextTitle className="col-md-12 center-md" key="1">
        Box-Office
      </TextTitle>
      {dataBoxOffice.length > 0 && (
        dataBoxOffice.map(movie => (
          <div className="col-md-4 center-md">
            <CardMovie
              dataBoxOffice={movie}
              id={movie.imdbID}
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              rating={movie.imdbRating}
              genre={movie.Genre}
            />
          </div>
        ))
      )}
    </div>

    <TextTitle className="col-md-12 center-md" key="2">
        Popular
    </TextTitle>
    <div className="row">
      {dataPopular.length > 0 && (
          dataPopular.map(movie => (
            <div className="col-md-3 center-md">
              <CardMovie
                dataPopular={movie}
                id={movie.imdbID}
                key={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                rating={movie.imdbRating}
                genre={movie.Genre}
              />
            </div>
          ))
        )}
    </div>
    
    
  </div>
);

export default Home;
