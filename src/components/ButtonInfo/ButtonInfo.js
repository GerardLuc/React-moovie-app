import React from 'react';
import styled from '@emotion/styled'

var white = "#FFFFFF";
var black = "#2D2D2D";
var red = "#C03A2B";

const Button = styled.button`
  color: ${black};
  border-radius: 34px;
  padding: 15px 50px;
  border: 2px solid ${black};
  background: ${white}; 
  cursor:pointer;
  :hover {
    color: ${red};
    border: 2px solid ${red};
  }
`
const TextButton = styled.span`
  font-family: NetflixBold;
  font-size: 24px;

`
// eslint-disable-next-line
const ButtonInfo = ({}) => (
  <div className="button-info">
    <Button>
      <TextButton>More Info</TextButton>
    </Button>
  </div>
);

export default ButtonInfo;
