import React from 'react';
import ButtonInfo from '../ButtonInfo/ButtonInfoContainer';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

var white = "#FFFFFF";
// var black = "#2D2D2D";
// var red = "#C03A2B";
// var blue = '#014CB7';

const CardContainer = styled.div`
  min-height: 500px;
  max-width: 400px;
  margin: 30px auto;
`

const FlipCardInner = styled.div`
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
  width: 100%;
  :hover {
    transform: rotateY(180deg);
  }
`
const FlipCardFront = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;  
  transform-style: preserve-3d;
  backface-visibility: hidden;
  overflow: hidden;
  width: 100%;
`
const FlipCardBack = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 10px;
  left: 0;
  right: 0; 
  top: 75px;
  background-color:white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  translate3d(0,0,0);
  backface-visibility: hidden;
  transform: rotateY(180deg);
`

const Image = styled.img`
  width: auto;
`
const TextSpan = styled.h3`
`
const ButtonLike = styled.button`
  background:${white};
  border: none;
  cursor:pointer;
`
const ButtonWatched = styled.button`
  background:${white};
  border: none;
  cursor:pointer;
`
const IconLike = styled.i`
  font-size:34px;
`
const IconWatched = styled.i`
  font-size:34px;
`


const CardMovie = ({id, title, rating, genre, poster, handleClickLike, colorLike, handleClickWatched, colorWatched}) => (
  <CardContainer className="card-movie">
    <FlipCardInner className="row">
      <FlipCardFront className="col-md-12">
        <Image src={poster} alt="poster"/>
      </FlipCardFront>
      <FlipCardBack className="col-md-12"> 
        <div className="row">
          <ButtonLike onClick={handleClickLike} className="col-md-offset-3 col-md-2" style={{color:colorLike}}>
            <IconLike className="fas fa-heart"/>
          </ButtonLike>
          <ButtonWatched onClick={handleClickWatched} className="col-md-offset-2 col-md-2" style={{color:colorWatched}}>
            <IconWatched className="fas fa-eye"/>
          </ButtonWatched>
          <h2 className="col-md-12">{title}</h2>
          <Link className="col-md-12" to={`/info/${id}`} key={id}>
            <ButtonInfo/>
          </Link>
          <div className="col-md-12">
            <TextSpan>{rating}</TextSpan>
            <TextSpan>{genre}</TextSpan>
          </div>
        </div>
      </FlipCardBack>
      
    </FlipCardInner>
  </CardContainer>
);

export default CardMovie;
