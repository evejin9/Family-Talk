import React from 'react';
import styled from 'styled-components';

import familyImg from "../../image/famsta5.jpg";


const StyledImg = styled.img`
  width: 100%;
  height: 500px;
  background: url(${familyImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function MainPhoto(props) {
  return (
    <>
        <StyledImg />
      
    </>
  );
}

export default MainPhoto;