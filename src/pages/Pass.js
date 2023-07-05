import React from 'react';
import styled from 'styled-components';

const PassTitle = styled.div`

  & h1 {
    font-size: 30px;
    padding-top: 10px;
  }
  .title-content {
    font-size: 14px;
    color: #acacac;
    margin-top: 30px;
  }
`;

const PassEvent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  font-size: 20px;

  .event-title {
    color: #f5cc8d;
    margin-right: 10px;
  }
`;

const PassWrapperUl = styled.ul`
  width: 100%;

  & li {
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
      .line-through {
        color: #ccc;
        text-decoration: line-through;
        font-size: 14px
      }
      .free-exp {
        color: #f5cc8d;
        font-size: 18px;
      }
    }
  }

  & li + li {
    margin-top: 20px;
  }

  .question {
    color: #aaa;
    font-size: 12px;
    margin-top: 20px;
  }
`;

const Payment = styled.div`
  margin-top: 30px;
`;

const PrecautionsUl = styled.ul`
  margin: 25px 0;
  color: #aaa;

  li {
    font-size: 12px;
    padding: 8px 0;
  }
`;

function Pass(props) {
  return (
    <div className='show-content'>
      <PassTitle>
        <h1>FAMILY TALK 이용권 구매</h1>
        <p className='title-content'>가족 구성원과 더욱 돈독하고 행복한 시간을 공유해보세요.</p>
      </PassTitle>

      <PassEvent>
        <p className='event-title'>EVENT!</p>
        <p>3인권 30일 무료체험</p>
      </PassEvent>

      <PassWrapperUl>
        <li>
          <p>1인권</p>
          <p>&#92;1,500/월</p>
        </li>
        <li>
          <p>2인권</p>
          <div className='fare'>
            <p>&#92;3,000</p>
            <p>&#92;2,800/월</p>
          </div>
        </li>
        <li>
          <p>3인권</p>
          <div className='fare'>
            <p>&#92;4,500 </p>
            <p className='line-through'>&#92;4,200/월</p>
            <p className='free-exp'>무료체험</p>
          </div>
        </li>
        <li>
          <p>4인권</p>
          <div className='fare'>
            <p>&#92;6,000</p>
            <p>&#92;5,000/월</p>
          </div>
        </li>
        <li>
          <p>6인권</p>
          <div className='fare'>
            <p>&#92;9,000</p>
            <p>&#92;6,500/월</p>
          </div>
        </li>
        <p className='question'>※ 7인 이상 이용권은 별도 문의 바랍니다.</p>
      </PassWrapperUl>

      {/* 결제정보 */}
      <Payment>
        <div>결제</div>
      </Payment>

      <PrecautionsUl>
        <li>이용권 구매 즉시 할인 가격이 적용되며, 할인 기간이 종료된 이후부터는 정상가로 결제됩니다.</li>
        <li>할인특가 이용권 구매 시, 이용권 종료일로부터 2개월 내에는 프로모션 재가입이 제한되어 정상가로만 구매가 가능하며, 이용권 약정을 충족하지 못하거나 기존 이용 이력에 따라 할인 프로모션 참여가 제한 될 수 있습니다.</li>
        <li>할인 프로모션에 따라 결제수단이 상이할 수 있습니다.</li>
        <li>결제 금액은 부가세&#40;VAT&#41; 포함되어 있으며, 해외 원화 결제&#40;DCC&#41;에 따른 추가 수수료가 발생할 수 있습니다.</li>
        <li>자동 결제 해지는 결제 예정일 최소 24시간 전에 해지 신청 해야 합니다. 결제 예정일 전 24시간 이내에는 자동 결제를 해지해도 이용권이 결제될 수 있습니다.</li>
        <li>모바일 기기는 휴대폰 외 태블릿도 포함됩니다.</li>
        <li>이용권의 결제방법 변경 및 해지 신청은 패밀리톡 PC웹&#40;familytalk.com&#41; &#62; 내정보 &#62; 이용권/결제정보 &#62; 패밀리톡 이용권에서 확인하실 수 있습니다.</li>
      </PrecautionsUl>
    </div>
  );
}

export default Pass;