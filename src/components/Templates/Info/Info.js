import React from 'react';
import Nav from '../../Nav/NavContainer';

import styled from '@emotion/styled';

var cyan = "#15c0c1";

const Section = styled.section`
  display: flex;
  // justify-content: space-between;
  align-content: flax-start;

  margin: 0 5rem;
  
`

const TextInfo = styled.h2`
  color: ${cyan};
  font-family: NetflixBold;
  font-size: 64px;
  text-align: center;
`

const MiniTitle = styled.span`
  color: ${cyan};
  font-size: 1.2rem;
  margin: 0 0.5rem 0 0;
`

const Article = styled.article`
  padding:  0.5rem;
  text-align: left;
`


const Info = ({data}) => (
  <div className="home">
    <Nav/>

    <TextInfo>{data.Title}</TextInfo>
    <Section>
      <img src={data.Poster} alt="movie poster"/>
      <Article>
          
          <Article><MiniTitle>
          Released:
          </MiniTitle>{data.Released}</Article>
          
          <Article><MiniTitle>
          Runtime: 
          </MiniTitle>{data.Runtime}</Article>
          
          <Article><MiniTitle>
          Genre: 
          </MiniTitle>{data.Genre}</Article>
          
          <Article><MiniTitle>
          Director: 
          </MiniTitle>{data.Director}</Article>

          <Article><MiniTitle>
          Author: 
          </MiniTitle>{data.Writer}</Article>

          <Article><MiniTitle>
          Language: 
          </MiniTitle>{data.Language}</Article>

          <Article><MiniTitle>
          Plot: 
          </MiniTitle>{data.Plot}</Article>

          <Article><MiniTitle>
          Metascore: 
          </MiniTitle>{data.Metascore}</Article>

        {/* {data} */}
    </Article>
    </Section>

  </div>
);

export default Info;
