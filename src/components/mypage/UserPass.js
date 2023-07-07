import React from 'react';
import styled from 'styled-components';
import {} from 'react-icons/io'
import { IoTicketOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { selectPassList } from '../../features/passSlice';
import { LiaCrownSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 40%;
  height: 200px;
  margin-top: 20px;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  border: 2px solid #f5cc8d;
  border-radius: 6px;
  padding: 2px;
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

const StyledButton = styled.button`
  width: 90px;
  height: 30px;
  border-radius: 6px;
  outline: none;
  font-size: 13px;
  background-color: #fff;
  border: 2px solid #acacac;
  margin-left: 170px;

  &:hover {
    background-color: #f5cc8d;
  }
`;



function UserPass(props) {

  const usePass = useSelector(selectPassList)
  const navigate = useNavigate()
  // console.log(usePass);

  const goPassPage = () => {
    navigate('/pass')
  }

  return (
    <StyledDiv>
      <TitleDiv><IoTicketOutline size={25} style={{marginRight: '5px'}} color='#f5cc8d' />Pass information</TitleDiv>
      <StyledSpan><LiaCrownSolid size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>
        회원등급:  { '비회원'}
      </StyledSpan>
      <StyledSpan><LiaCrownSolid size={25} style={{marginRight: '5px'}} color='#f5cc8d'/>
        이용권혜택:  { '비회원'}
      </StyledSpan>
      <StyledButton onClick={goPassPage}>이용권 구매</StyledButton>
    </StyledDiv>
  );
}
// {usePass[1].membershipName}
// {usePass[1].membershipContent}
export default UserPass;