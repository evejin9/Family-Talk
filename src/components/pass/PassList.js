import React from 'react';
import PassListItem from './PassListItem';
import styled from 'styled-components';
import { getAllPassList, selectPassList } from '../../features/passSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';

const PassWrapper = styled.div`

  & .question {
    color: #aaa;
    font-size: 12px;
    margin-top: 20px;
  }
`;

function PassList({ passInfo }) {

  const dispatch = useDispatch();
  const passList = useSelector(selectPassList);
  // console.log(passList);

  const handleGetAllPassList = () => {
    // dispatch(getAllPassList('여기에 값을 보냄'));
  };
  
  return (
    <PassWrapper>
      {/* {passInfo.map((pass) => <PassListItem key={pass.id} pass={pass} />)} */}

      {/* {passList.map(pass => <PassListItem key={pass.id} pass={pass} />)} */}
      <p className='question'>※ 7인 이상 이용권은 별도 문의 바랍니다.</p>

    <Button onClick={handleGetAllPassList} />
    </PassWrapper>
  );
}

export default PassList;