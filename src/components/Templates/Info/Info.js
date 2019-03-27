import React from 'react';
import Nav from '../../Nav/NavContainer';

import styled from '@emotion/styled'

var cyan = "#15c0c1";

// const body

const TextInfo = styled.h2`
  color: ${cyan};
  font-family: NetflixBold;
  font-size: 64px;
  margin: auto;
`


const Info = ({data}) => (
  <div className="home">
    <Nav/>

        <TextInfo>{data.Title}</TextInfo>
    <img src={data.Poster}/>
    <div className="row">
    </div>
    
  </div>
);

export default Info;
