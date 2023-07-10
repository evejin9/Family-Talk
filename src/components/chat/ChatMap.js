import React, { useEffect, useState, useMemo, useRef } from "react";
import styled from "styled-components";
import { AiOutlineClose as CloseButton } from "react-icons/ai";
import axios from "axios";
import { useSelector } from "react-redux";
import { chatListArray } from "../../features/chatSlice";

const ContentArea = styled.div`
  margin-top: 5px;
  padding: 10px;
  background-color: #d9d9d9;
  border-radius: 10px;
  text-align: center;
`;

const { kakao } = window;
const REST_API_KEY = '50bfc417180bd6f04dd51f8484164b3a';
// 현재 위치 세부 조정
const options = {
  enableHighAccuracy: true,
  timeout: 3000,
  maximumAge: 0,
};

function ChatMap(props) {
  const { content: { latitude, longitude }, address } = props;

  const mapDiv = useRef();

  // 지도 객체 담아둘 변수
  const [map, setMap] = useState(null);

  // // 위치 담는 곳
  // const [location, setLocation] = useState({
  //   latitude: 37.4432316,
  //   longitude: 126.570667,
  // });

  // 컴포넌트가 처음 렌더링 될때 지도 생성
  useEffect(() => {
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition 
    });
    
    const options = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 4,
      marker
    };
    
    marker.setMap(new kakao.maps.Map(mapDiv.current, options));
  }, []);
  

  return (
    <ContentArea>
      <div 
        ref={mapDiv}
        style={{ 
          width: "200px", 
          height: "200px",
          boxSizing: "border-box", 
          marginBottom: "10px"
        }}
      >
      </div>
      <p>{address}</p>
    </ContentArea>
  );
}

export default ChatMap;