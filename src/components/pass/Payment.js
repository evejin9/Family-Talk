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

const PaymentWrapper = styled.div`
  margin-top: 30px;
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

const PaymentModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: aqua;
`;

function Payment(props) {
  const selectedpass = useSelector(selectSelectedPass);
  // console.log(selectedpass.id);
  const navigate = useNavigate();

  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(50000);

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
    // console.log('결제버튼 누름');

    try {
      // 결제 버튼 누르면 결제창 띄우기
      await paymentWidget?.requestPayment({
        orderId: uuid(),
        orderName: "토스 티셔츠 외 2건",
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
                <p className='price'>&#92;{selectedpass.price}</p>
                <p>&#92;{selectedpass.discountPrice}/월</p>
              </StyledMembership>
              <div className='membership-content'>{selectedpass.membershipContent}</div>
            </PriceWrapper>
          }
          {/* <Button title="결제" onClick={() => {navigate("/pass/payment")}}/> */}
          <Button title="결제" onClick={handlePayClick}/>
        </PaymentWrapper>
      }
    </>
  );
}

export default Payment;