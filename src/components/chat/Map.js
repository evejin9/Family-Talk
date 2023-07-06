import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
// import Marker from "../components/Marker";
import { AiOutlineClose as CloseButton } from "react-icons/ai";

const { kakao } = window;

const MapBox = styled.div`
  /* width: 400px; */
  /* height: 400px; */
  padding: 15px 15px;
  background-color: #fff;
  box-shadow: 3px 4px 10px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  position: relative;
  margin: auto;
  right: 500px;
  top: 150px;
  /* bottom: 0; */
  /* top: 0; */
  /* left: 0; */
  /* right: 0; */
  display: ${props => props.showMapModal ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ModalCloseButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;

  svg {
    color: #f5cc8d;
    font-size: 20px;

    &:hover {
      color: red;
    }
  }
`;

function Map(props) {
  const { showMapModal, setShowMapModal } = props;
  // 현재위치 담는 곳
  const [location, setLocation] = useState("");
  const [map, setMap] = useState();

  // 현재위치 세부조정
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // 현재 위치 가져오기
  useMemo(() => {
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
  }, [navigator.geolocation.getCurrentPosition]);

  // 카카오지도 API 가져오기
  const kakaoMap = () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 3,
    };
    setMap(new kakao.maps.Map(container, options));
  };

  // 화면에 랜더링
  useEffect(() => {
    kakaoMap();
    console.log(location);
  }, [location]);

  return (
    <MapBox showMapModal={showMapModal}>
      <ModalCloseButton>
        <CloseButton className='cursor-point' onClick={() => setShowMapModal(false)} />
      </ModalCloseButton>

      <div className="">
        <div id="map" 
          style={{ 
            width: "350px", 
            height: "350px",
            boxSizing: "border-box", 
            // position: "absolute", 
            // left: '550px', 
            // bottom: '400px',
          }}
        >
          {/* <Marker map={map} location={location} kakao={kakao} /> */}
        </div>
      </div>
    </MapBox>
  );
}

export default Map;