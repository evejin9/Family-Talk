import React from 'react';
import styled from 'styled-components';
import {} from 'react-icons/io'
import { IoTicketOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { selectPassList } from '../../features/passSlice';
import { LiaCrownSolid } from 'react-icons/lia'

const StyledDiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 40%;
  height: 200px;
  margin-top: 20px;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  border: 1px solid rgb(172, 172 ,172);
  border-radius: 6px;
`;

const TitleDiv = styled.div`
  font-size: 17px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
`;

const StyledSpan = styled.span`
  margin-bottom: 15px;
  font-size: 14px;
`;

function UserPass(props) {

  const usePass = useSelector(selectPassList)

  console.log(usePass);

  return (
    <StyledDiv>
      <TitleDiv><IoTicketOutline size={25} style={{marginRight: '5px'}} color='#f5cc8d' />Pass information</TitleDiv>
      <StyledSpan><LiaCrownSolid size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>회원등급:  </StyledSpan>
      <StyledSpan><LiaCrownSolid size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>이용권혜택:   </StyledSpan>

    </StyledDiv>
  );
}

export default UserPass;