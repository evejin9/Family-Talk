import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useSelector } from 'react-redux';
import { selectSelectedPass } from '../../features/passSlice';

const PaymentWrapper = styled.div`
  margin-top: 30px;
  border: 4px solid #f5cc8d;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & p {
    font-size: 22px;
  }

  & .membership-content {
    font-size: 14px;
    margin-top: 20px;
  }
`;

const StyledMembership = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .price {
    color: #ccc;
    text-decoration: line-through;
    font-size: 14px
  }
  & p + p {
    margin-left: 10px;
  }
`;

function Payment(props) {
  const pass = useSelector(selectSelectedPass);
  console.log(pass);

  return (
    <PaymentWrapper>
      {pass.id === "0"
      ? <PriceWrapper>
          <p>{pass.membershipName}</p>
        </PriceWrapper>
      : <PriceWrapper>
          <StyledMembership>
            <p>{pass.membershipName}</p>
            <p className='price'>&#92;{pass.price}</p>
            <p>&#92;{pass.discountPrice}/월</p>
          </StyledMembership>
          <div className='membership-content'>{pass.membershipContent}</div>
        </PriceWrapper>
      }
      <Button title="결제" onClick={undefined}/>
    </PaymentWrapper>
  );
}

export default Payment;