import React from 'react';
import { useSearchParams } from "react-router-dom";

function PaySuccess(props) {
  const [searchParams] = useSearchParams();

  // 서버로 승인 요청
  return (
    <div>
      <h1>결제 성공</h1>

    </div>
  );
}

export default PaySuccess;