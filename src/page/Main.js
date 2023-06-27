import React from 'react';
import styled from 'styled-components';
// import dayjs from 'dayjs';

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

  // var date = dayjs();
  // console.log(date.format("YYYY-MM-DD"));

  // 생일 디데이 구하기
  // const today = dayjs();
  // const familyBirthDate = data.map(person => person.birth); // 생년월일 배열
  // // console.log(familyBirth);
  // const familyBirthday = (familyBirthDate.map(date => date.substring(5, 10))).sort(); // 생일(월일) 추출하여 생일별 순차적용
  // console.log(familyBirthday);

  // familyBirthday


  // console.log(today.format("MM-DD"));


  
  // const aa = dayjs(familyBirth[0]);
  // console.log(aa.format("MM-DD"));






  // console.log(dayjs(familyBirth).format("YY-MM-DD"));
  // console.log(familyBirth.sort());

  // const birthDay = dayjs(familyBirth[1]);
  // console.log(birthDay.format("YYYY-MM-DD"));
  // console.log(familyBirth[1]);

  // const monthDay = familyBirth[1].substring(5, 10); // 문자열 추출(월,일 추출)
  // const thisYearBirth = `${today.getFullYear()}-${monthDay}`; // 올해의 생일
  // console.log(thisYearBirth);
  // const someDay = new Date(thisYearBirth);
  // const diffDate = someDay.getTime() - today.getTime();
  // const dDayResult = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
  // const Day = dDayResult > 0 ? dDayResult * (-1) : `+${dDayResult * (-1)}`;





  
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