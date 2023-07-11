import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { selectMyPass, selectSelectedPass } from '../../../features/passSlice';

function PaySuccess(props) {
  const [searchParams] = useSearchParams();
  const selectedPass = useSelector(selectSelectedPass);
  const dispatch = useDispatch();
  
  // 결제 성공시 이용권 스토어에 저장
  // useEffect(() => {
  //   dispatch(selectMyPass(selectedPass));
  // }, [selectedPass]);

  // 서버로 승인 요청
  return (
    <div>
      <h1>결제 성공</h1>
      <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
      <div>{`결제 금액: ${Number(
        searchParams.get("amount")
      ).toLocaleString()}원`}</div>
    </div>
  );
}

export default PaySuccess;