import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  border-radius: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 20px;
  box-sizing: border-box;

  &.container_cool{
    background: #005AA7;
    background: -webkit-linear-gradient(to bottom, #005AA7, #FFFDE4);
    background: linear-gradient(to bottom, #005AA7, #FFFDE4);
  }
  &.container_warm{
    background: #FDC830;
    background: -webkit-linear-gradient(to bottom, #F37335, #FDC830);
    background: linear-gradient(to bottom, #F37335, #FDC830);
  }

  & p {
    color: #fff;

    &.temp {
      font-size: 26px;
    }
  }
`;


function MainWeather(props) {
  
  const [weather, setWeather] = useState();
  const [name, setName] = useState();
  const [icon, setIcon] = useState();
  const [temp, setTemp] = useState();
  const [loading, setLoading] = useState(false);
  
  const todayData = () => {
    const week = ['MON', 'THU', 'WED', 'THR', 'FRI', 'SAT', 'SUN'];
    const now = new Date();
    const todayMonth = now.getMonth() > 9 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`;
    const todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
    const dayOfWeek = week[now.getDay()];
    return `${todayMonth}.${todayDate} ${dayOfWeek}`;
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      // console.log("현재 위도 경도는?", latitude, longitude);
      getWeatherByCurrentLocation(latitude, longitude);
    });
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);

  // 현재 위치의 날씨 정보
  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoading(true);
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1eb8c3144c11e82d58bf7e93e3eed28f&units=metric`;
      let reponse = await fetch(url);
      let data = await reponse.json();
      // console.log('데이터 확인', data);
      setWeather(data);
      setName(data.name);
      setIcon(data.weather[0].icon);
      setTemp(data.main.temp);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>로딩</div>
  }

  return (
    <StyledSection className={temp > 26 ? "container_warm" : "container_cool"}>
      <img className="img-fluid" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <p className='temp'>{Math.round(temp)}º</p>
      <p>{todayData()}</p>
      <p>{name}</p>
    </StyledSection>
  );
}

export default MainWeather;

// OpenWeather API 사용

// API key
// 1eb8c3144c11e82d58bf7e93e3eed28f

// http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=1eb8c3144c11e82d58bf7e93e3eed28f


// (참고)
// https://nnuoyos.tistory.com/275?category=571216

// 로딩
// <MoonLoader
// color="#F5CC8D"
// cssOverride={{}}
// loading
// size={30}
// speedMultiplier={0.6}
// />;