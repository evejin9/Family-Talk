import React from 'react';
import styled from 'styled-components';

import data from "../data.json";
import familyImg from "../image/family-photo-main.jpg";

const StyledSection = styled.div`
  & + & {
    margin-top: 20px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 500px;
  background: url(${familyImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main(props) {

  // 생일 디데이 구하기
  const today = new Date();
  const familyBirth = data.map((person) => person.birth); // family 생일 배열
  const birthDay = new Date(familyBirth[1]);
  // console.log(familyBirth[1]);

  const monthDay = familyBirth[1].substring(5, 10); // 문자열 추출(월,일 추출)
  const thisYearBirth = `${today.getFullYear()}-${monthDay}`; // 올해의 생일
  // console.log(thisYearBirth);
  const someDay = new Date(thisYearBirth);

  const diffDate = someDay.getTime() - today.getTime();
  const dDayResult = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
  const Day = dDayResult > 0 ? dDayResult * (-1) : `+${dDayResult * (-1)}`;

  if (Day > 0) {
    const nextYearBirth = `${today.getFullYear() + 1}-${monthDay}`;
  }
  console.log(Day);





  
  return (
    <div className='show-content'>
      {/* 가족사진 섹션 */}
      <StyledSection>
        <p>가족사진 영역</p>
        <StyledImg />
        {/* <label for="file">파일</label>
        <input type="file" name="file" id="file" /> */}

      </StyledSection>

      {/* 오늘의 일정 섹션 */}
      <StyledSection>
        <p>오늘의 일정 영역</p>
      </StyledSection>

      {/* 디데이 섹션 */}
      <StyledSection>
        <p>디데이 영역</p>
      </StyledSection>

      {/* 날씨정보 섹션 */}
      <StyledSection>
        <p>날씨 정보 영역</p>
      </StyledSection>
    </div>
  );
}

export default Main;