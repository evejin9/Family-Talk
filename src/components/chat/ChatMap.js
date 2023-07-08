import React, { useEffect, useState, useMemo, useRef } from "react";
import styled from "styled-components";
import { AiOutlineClose as CloseButton } from "react-icons/ai";
import axios from "axios";

const ContentArea = styled.div`
  margin-top: 5px;
  padding: 10px;
  background-color: #d9d9d9;
  border-radius: 10px;
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

  const mapDiv = useRef();

  // 지도 객체 담아둘 변수
  const [map, setMap] = useState(null);

  // 위치 담는 곳
  const [location, setLocation] = useState({
    latitude: 37.4432316,
    longitude: 126.570667,
  });
  const [address, setAddress] = useState("");

  // 컴포넌트가 처음 렌더링 될때 지도 생성
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.4432316, 126.6991234),
      level: 4
    };
    setMap(new kakao.maps.Map(mapDiv.current, options));
  }, []);

  useEffect(() => {
    const markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition 
    });
    marker.setMap(map);
  }, [location]);

  // 현재 위치 가져오기
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function success(position) {
    setLocation({ 
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  function error() {
    setLocation({
      latitude: 33.450701,
      longitude: 126.570667,
    });
    console.log("위치 받기 실패");
  }

  // axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${location.longitude}&y=${location.latitude}&input_coord=WGS84`
  // ,{ headers: { Authorization:`KakaoAK ${REST_API_KEY}` }}
  // )
  // .then(res => {
  //   setAddress(res.data.documents[0].address.address_name);
  // })
  // .catch(error => console.log(error))

  return (
    <ContentArea>
      <div 
        ref={mapDiv}
        style={{ 
          width: "200px", 
          height: "200px",
          boxSizing: "border-box", 
        }}
      >
      </div>
    </ContentArea>
  );
}

export default ChatMap;