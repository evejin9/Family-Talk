import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 34px;
  padding: 8px 16px;
  border: 2px solid #efefef;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #F5CC8D;
  }
`;

function Button({ title, onClick }) {
  return (
    <StyledButton onClick={onClick}>{title || '버튼'}</StyledButton>
  );
}

export default Button;