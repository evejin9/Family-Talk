import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getAllPassList, selectPassList } from '../../features/passSlice';

const StyledListItem = styled.div`
  width: 100%;
  height: 90px;
  border: 2px solid #efefef;
  border-radius: 8px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }

  & .fare {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p {
      margin-left: 10px
    }

    & :first-child {
      color: #ccc;
      text-decoration: line-through;
      font-size: 14px
    }
  }
  & + & {
    margin-top: 20px;
  }
`;

function PassListItem({ pass }) {
  const dispatch = useDispatch();
  console.log(dispatch(getAllPassList()));
  const selectPass = useSelector(selectPassList);
  
  // const handlePass = () => {
  //   // console.log(pass);
  //   // dispatch(paymentPass);
  //   console.log(selectPass);

  // };

  return (
    <StyledListItem onClick={undefined}>
      <p>{pass.id}인권</p>
      <div className='fare'>
        <p>&#92;{pass.price}</p>
        <p>&#92;{pass.discountPrice}/월</p>
      </div>


    </StyledListItem>
  );
}

export default PassListItem;