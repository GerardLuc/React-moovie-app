import React from 'react';
import Nav from '../../Nav/NavContainer';
import CardMovie from '../../CardMovie/CardMovieContainer';

import styled from '@emotion/styled';

var cyan = "#15c0c1";

// const CardMovie = styled.section`
//   width
// `

const TextH2 = styled.h2`
  color: ${cyan};
  font-family: NetflixBold;
  font-size: 32px;
  text-align: center;
`

const List = ({dataLike, dataWatched}) => (
  <div className="home">
    <Nav/>
    <TextH2>
        Liked
      </TextH2>
    <div className="row">
      
      {dataLike.length > 0 && (
        dataLike.map(movie => (
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
      <TextH2>
        Watched
    </TextH2>
    <div className="row">
    
      {dataWatched.length > 0 && (
        dataWatched.map(movie => (
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
    
  </div>
);

export default List;
