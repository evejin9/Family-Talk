import React, { useEffect, useState, useMemo, useRef } from "react";
import styled from "styled-components";
import { AiOutlineClose as CloseButton } from "react-icons/ai";
import axios from "axios";

const MapBox = styled.div`
  padding: 15px 15px;
  background-color: #fff;
  box-shadow: 3px 4px 10px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  position: relative;
  margin: auto;
  right: 500px;
  top: 150px;
  display: ${props => props.showMapModal ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .addressBox {
    padding-bottom: 10px;
  }
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
  // 위치 담는 곳
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");


  // 현재 위치 세부 조정
  var options = {
    enableHighAccuracy: true,
    timeout: 3000,
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

  const { kakao } = window;
  const REST_API_KEY = '50bfc417180bd6f04dd51f8484164b3a'

  
  useEffect(() => {
    const container = document.getElementById("staticMap");
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
    
    let geocoder = new kakao.maps.services.Geocoder();
    
    geocoder.addressSearch(location, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      
        let marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        
        map.setCenter(coords);
        
        marker.setMap(map);
      }
    });
  }, [location]);
  
  axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${location.longitude}&y=${location.latitude}&input_coord=WGS84`
  ,{ headers: { Authorization:`KakaoAK ${REST_API_KEY}` }}
  )
  .then(res => {
    setAddress(res.data.documents[0].address.address_name);
  })
  .catch(error => console.log(error))

    
  return (
    <MapBox showMapModal={showMapModal}>
      <ModalCloseButton>
        <CloseButton className='cursor-point' onClick={() => setShowMapModal(false)} />
      </ModalCloseButton>

      <p className="addressBox">{address}</p>
      <div id="staticMap" 
        style={{ 
          width: "350px", 
          height: "350px",
          boxSizing: "border-box", 
        }}
      >
      </div>
    </MapBox>
  );
}

export default Map;