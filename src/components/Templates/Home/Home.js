import React from 'react';
import CardMovie from '../../CardMovie/CardMovieContainer';
import Nav from '../../Nav/NavContainer';
import styled from '@emotion/styled'

var white = "#FFFFFF";
var black = "#2D2D2D";
var cyan = "#15c0c1";

const TextTitle = styled.h2`
  color: ${cyan};
  font-family: NetflixBold;
  font-size: 64px;
`
const HomeContainer = styled.div`
  background-color:${white};
`

const Home = ({handleClick, dataPopular, dataBoxOffice}) => (
  <HomeContainer className="home">
    <Nav/> 
    <div className="row">
      <TextTitle className="col-md-12 center-md" key="1">
        Box-Office
      </TextTitle>
      {dataBoxOffice.length > 0 && (
        dataBoxOffice.map(movie => (
          <div className="col-md-4 center-md">
            <CardMovie
              data={movie}
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
    <div className="row">
    <TextTitle className="col-md-12 center-md" key="2">
        Popular
    </TextTitle>
      {dataPopular.length > 0 && (
          dataPopular.map(movie => (
            <div className="col-md-3 center-md">
              <CardMovie
                data={movie}
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
    
    
  </HomeContainer>
);

export default Home;
