import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useSelector } from 'react-redux';
import { selectPassList } from '../../features/passSlice';

const PaymentWrapper = styled.div`
  margin-top: 30px;
  border: 2px solid #efefef;
  border-radius: 8px;
  padding: 0 20px;

  & .btn-payment {
    
  }
`;

const PriceWrapper = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 22px;
  }

  & .fare {
    margin-left: 10px;
    display: flex;
    align-items: center;

    & p {
      margin-left: 10px;
    }

    & :first-child {
      color: #ccc;
      text-decoration: line-through;
      font-size: 14px
    }
  }
`;

function Payment({ passInfo }) {
  // console.log(passInfo);
  const passList = useSelector(selectPassList);
  // console.log(passList);


  return (
    <PaymentWrapper>
      <PriceWrapper>
        <p>{passInfo[1].id}인권</p>
        <div className='fare'>
          <p>&#92;{passInfo[1].price}</p>
          <p>&#92;{passInfo[1].discountPrice}/월</p>
        </div>
      </PriceWrapper>
      <Button className='btn-payment' title="결제" onClick={undefined}/>
    </PaymentWrapper>
  );
}

export default Payment;