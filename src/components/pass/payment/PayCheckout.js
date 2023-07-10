import React, { useState } from 'react';

import { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { selectSelectedPass } from '../../../features/passSlice';
import { loadPaymentWidget, PaymentWidgetInstance, ANONYMOUS } from "@tosspayments/payment-widget-sdk";

import uuid from "react-uuid";
import Button from '../../ui/Button';
import styled from 'styled-components';

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "dXMVAbsDOSTuZGxC_Jinj";

const PassTitle = styled.div`
  & h1 {
    font-size: 30px;
    margin: 20px;
  }
`;

const StyledOrder = styled.div`
  
  .order-title {
    margin-top: 80px;
    font-size: 25px;
    text-align: center;
  }
  .price {
    font-size: 20px;
  }
`;

const PriceArea = styled.div`
  padding-top: 50px;
  p {
    font-size: 20px;
  }
  & div + div {
    margin-top: 20px;
  }
  .membership-name {
    display: flex;
    justify-content: space-between;
  }
  .price {
    display: flex;
    justify-content: space-between;
  }
  .coupon {
    display: flex;
    justify-content: space-between;

    .no-coupon {
      font-size: 15px;
    }
  }
`;

const PaymentMethod = styled.div`
  margin: 30px 0;
  border: 1px solid #eee;

  .btn-payment {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
`;

function PayCheckout(props) {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const selectedpass = useSelector(selectSelectedPass);
  const [price, setPrice] = useState(Number(selectedpass.discountPrice));
  
  useEffect(() => {
    (async () => {
      // 결제 위젯 초기화
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      // 결제 위젯 렌더링
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        price
      );
      // 이용 약관 렌더링
      paymentWidget.renderAgreement("#agreement");
      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })()
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }
    // 금액 업데이트
    paymentMethodsWidget.updateAmount(
      price,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    )
  }, [price]);

  const handlePayClick = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      // 결제 버튼 누르면 결제창 띄우기
      await paymentWidget?.requestPayment({
        orderId: uuid(),
        // orderName: "토스 티셔츠 외 2건",
        orderName: selectedpass.membershipName,
        customerName: "김토스",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <PassTitle>
        <h1>FAMILY TALK 이용권 구매</h1>
      </PassTitle>
      <StyledOrder>
        <h2 className='order-title'>주문서</h2>
        <PriceArea>
          <div className='membership-name'>
            <p>구매 이용권</p>
            <p>{selectedpass.membershipName}</p>
          </div>
          <div className='price'>
            <p>결제금액</p>
            <span>{`${price.toLocaleString()}원`}</span>
          </div>
          <div className='coupon'>
            <p>쿠폰</p>
            <div>
              {price <= '1000'
              ? <p className='no-coupon'>사용가능한 쿠폰이 없습니다.</p>
              : <label>
                  <input
                    type='checkbox'
                    onChange={(e) => {
                      setPrice(e.target.checked ? price - 1000 : price + 1000)
                    }}
                  />
                  1,000원 할인 쿠폰 적용
                </label>
              }
            </div>
          </div>
        </PriceArea>
        <PaymentMethod>
          <div id='payment-widget' />
          <div id='agreement' />
          <div className='btn-payment'>
            <Button
              title="결제"
              onClick={handlePayClick}
            />
          </div>
        </PaymentMethod>
      </StyledOrder>
    </>
  );
}

export default PayCheckout;