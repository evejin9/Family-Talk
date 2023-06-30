import React from 'react';

import data from "../../data.json";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import { differenceInDays, format } from 'date-fns';
import styled from 'styled-components';
// import differenceInCalendarDays from "@bit/date-fns.date-fns.difference-in-calendar-days";

const StyledSection = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 20px;
  border-radius: 8px;
  color: #333333;
  background-color: #EFEFEF;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;

  & div {
    display: flex;

    p:first-child {
      font-weight: 700;
      margin-right: 20px;
    }
  }
`;

function MainDday(props) {

  const familyBirthDate = data.map(person => {
    const today = new Date();
    const personBirth = new Date(person.birth);
    const thisYearBirth = new Date(`${today.getFullYear()}-${personBirth.getMonth() + 1}-${personBirth.getDate()}`);
    const nextYearBirth = new Date(`${today.getFullYear() + 1}-${personBirth.getMonth() + 1}-${personBirth.getDate()}`);

    return {
      id: person.id,
      name: person.name,
      birth: person.birth,
      thisYearDday: differenceInCalendarDays(today, thisYearBirth),
      nextYearDday: differenceInCalendarDays(today, nextYearBirth)
    }
  });
  // console.log(familyBirthDate); // [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

  const personThisYearDday = familyBirthDate.map(person => person.thisYearDday);
  // console.log(personThisYearDday); // [155, 53, 66, -159, -25, -36, -168]

  const thisYearBirthDday = personThisYearDday.filter(dday => {
    return dday < 0;
  });
  // console.log(thisYearBirthDday); // [-159, -25, -36, -168]

  const showDday = Math.max.apply(null, thisYearBirthDday);

  const showDdayPerson = familyBirthDate.filter(person => {
    return person.thisYearDday === showDday;
  });

  // thisYearBirthDday 배열이 빈 배열이면 nextYearDday로 재확인하기
  
  // 만약 personThisYearDday가 모두 양수이면 nextYearDday로 재확인하기
  // const e = personThisYearDday.filter(day => day < 0);
  // console.log(e);

  return (
    <StyledSection>
      <div>
        {/* 생일이 가장 가까운 사람 보여주기 */}
        <p>D{showDday}</p>
        <p>
          {showDdayPerson[0].name} 생일
        </p>
      </div>
    </StyledSection>
  );
}

export default MainDday;