import React, { useState } from 'react';

import { useEffect, useRef } from "react";
import { loadPaymentWidget, PaymentWidgetInstance, ANONYMOUS } from "@tosspayments/payment-widget-sdk";

import { uuid } from "react-uuid";
import Button from '../../ui/Button';

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "dXMVAbsDOSTuZGxC_Jinj";

function PayCheckout(props) {
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
    <div>
      <h1>주문서</h1>
      <span>{`${price.toLocaleString()}원`}</span>
      <div>
        <label>
          <input
            type='checkbox'
            onChange={(e) => {
              setPrice(e.target.checked ? price - 5000 : price + 5000)
            }}
          />
          5,000원 할인 쿠폰 적용
        </label>
      </div>
      <div id='payment-widget' />
      <div id='agreement' />
      <Button
        title="결제"
        onClick={handlePayClick}
      />
    </div>
  );
}

export default PayCheckout;