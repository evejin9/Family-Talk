import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useSelector } from 'react-redux';
import { selectSelectedPass } from '../../features/passSlice';
import { useNavigate } from 'react-router';
import { loadPaymentWidget, PaymentWidgetInstance, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { uuid } from "react-uuid";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "dXMVAbsDOSTuZGxC_Jinj";

const Wrapper = styled.div`
  margin-top: 50px;

  & p {
    font-size: 25px;
  }
`;

const PaymentWrapper = styled.div`
  margin-top: 20px;
  border: 4px solid #f5cc8d;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .unselected{
    padding: 10px 0;

    :first-child{
      font-size: 20px;
    }
  }
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
  const selectedpass = useSelector(selectSelectedPass);
  // console.log(selectedpass.id);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <p>결제 정보</p>
      {selectedpass.id === ""
      ? <PaymentWrapper>
          <p className='unselected'>선택된 이용권이 없습니다.</p>
          <p className='unselected'>이용권을 선택하세요.</p>
        </PaymentWrapper>
      : <PaymentWrapper>
          {selectedpass.id === "0"
          ? <PriceWrapper>
              <p>{selectedpass.membershipName}</p>
            </PriceWrapper>
          : <PriceWrapper>
              <StyledMembership>
                <p>{selectedpass.membershipName}</p>
                <p className='price'>&#92;{Number(selectedpass.price).toLocaleString()}</p>
                <p>&#92;{Number(selectedpass.discountPrice).toLocaleString()}/월</p>
              </StyledMembership>
              <div className='membership-content'>{selectedpass.membershipContent}</div>
            </PriceWrapper>
          }
          <Button title="결제" onClick={() => {navigate("/pass/payment")}}/>
        </PaymentWrapper>
      }
    </Wrapper>
  );
}

export default Payment;