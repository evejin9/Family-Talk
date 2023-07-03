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
      relation: person.relation,
      birth: person.birth,
      thisYearDday: differenceInCalendarDays(today, thisYearBirth),
      nextYearDday: differenceInCalendarDays(today, nextYearBirth)
    }
  });

  const personThisYearDday = familyBirthDate.map(person => person.thisYearDday); // 가족원전체 올해 생일 디데이
  const personNextYearDday = familyBirthDate.map(person => person.nextYearDday); // 가족원전체 내년 생일 디데이
  const thisYearBirthDday = personThisYearDday.filter(dday => { // 다가올 올해 생일
    return dday <= 0;
  });
  const dDay = thisYearBirthDday.length === 0 ? personNextYearDday : thisYearBirthDday; // 올해 생일이 전부 지났으면 내년생일 배열
  const showDday = Math.max.apply(null, dDay); // 가장 적게남은 보여줄 디데이
  const showDdayPerson = familyBirthDate.filter(person => {
    return person.thisYearDday === showDday || person.nextYearDday === showDday;
  });
  // console.log(showDdayPerson[0]);

  return (
    <StyledSection>
      <div>
        <p>
          {showDday == 0
            ? `D-Day`
            : `D${showDday}`
          }</p>
        <p>
          {`${showDdayPerson[0].name}(${showDdayPerson[0].members})`} 생일
        </p>
      </div>
    </StyledSection>
  );
}

export default MainDday;