import React from 'react';
import styled from 'styled-components';
import familyImg from "../../image/famsta5.jpg";
import { MdEdit } from "react-icons/md";

const MainPhotoStyled = styled.div`
  position: relative;
`;
const StyledImg = styled.img`

  width: 100%;
  height: 500px;
  background: url(${familyImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Edited = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;

  svg {
    font-size: 25px;
    color: #ccc;
    cursor: pointer;

    &:hover {
      color: #282c34;
    }
  }
`;

function MainPhoto(props) {
  return (
    <MainPhotoStyled>
      <StyledImg />
      <Edited
        onClick={() => {
          
        }}
      >
        <MdEdit />
      </Edited>
    </MainPhotoStyled>
  );
}

export default MainPhoto;