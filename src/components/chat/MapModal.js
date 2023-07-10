import React, { useEffect, useState, useMemo, useRef } from "react";
import styled from "styled-components";
import { AiOutlineClose as CloseButton } from "react-icons/ai";
import axios from "axios";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addMapInfo } from "../../features/chatSlice";

const MapBox = styled.div`
  padding: 15px 15px;
  background-color: #fff;
  box-shadow: 3px 4px 10px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  position: absolute;
  margin: 0 auto;
  left: -400px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .addressBox {
    font-size: 15px;
    padding-bottom: 10px;
  }

  .addButton {
    padding-top: 5px;
    font-size: 30px;
    color: #f5cc8d;
    bottom: 10px;
    right: 23px;
    
    &:hover {
      color: red;
    }
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

const { kakao } = window;
const REST_API_KEY = '50bfc417180bd6f04dd51f8484164b3a';

// 현재 위치 세부 조정
const options = {
  enableHighAccuracy: true,
  timeout: 3000,
  maximumAge: 0,
};

function MapModal(props) {
  const { showMapModal, setShowMapModal, nextId, logInUser } = props;
  const mapDiv = useRef();

  // 지도 객체 담아둘 변수
  const [map, setMap] = useState(null);

  // 위치 담는 곳
  const [location, setLocation] = useState({
    latitude: 37.4432316,
    longitude: 126.570667,
  });
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();


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

    map?.setCenter(markerPosition);
    
    marker.setMap(map);
  }, [location]);

  // 주소-좌표 변환
  useEffect(() => {

    // const getAddress = async () => {
    //   await axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${location.longitude}&y=${location.latitude}&input_coord=WGS84`
    //   ,{ headers: { Authorization:`KakaoAK ${REST_API_KEY}` }}
    //   )
    //   .then(res => {
    //     setAddress(res.data.documents[0]?.address.address_name);
    //   })
    //   .catch(error => console.log(error))
    // }

    const getAddress = async () => {
      try {
        await axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${location.longitude}&y=${location.latitude}&input_coord=WGS84`
        ,{ headers: { Authorization:`KakaoAK ${REST_API_KEY}` }}
        )
        .then(res => {
          console.log(res);
          if (res.status === 200 )
          setAddress(res.data.documents[0]?.address.address_name);
        })
        
      } catch (error) {
        console.log(error);
      }
    }
    
    getAddress();
  }, [address]);

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

  const addNewChat = () => {
    location !== '' && 
    
    dispatch(addMapInfo({location, nextId, logInUser}));
    setShowMapModal(false);
  }

  return (
    <MapBox showMapModal={showMapModal}>
      <ModalCloseButton>
        <CloseButton className='cursor-point' onClick={() => setShowMapModal(false)} />
      </ModalCloseButton>

      <p className="addressBox">{address}</p>
      <div 
        ref={mapDiv}
        style={{ 
          width: "350px", 
          height: "350px",
          boxSizing: "border-box", 
        }}
      >
      </div>
      <BsFillArrowUpCircleFill 
        className='cursor-point addButton' 
        onClick={() => addNewChat()} 
      />
    </MapBox>
  );
}

export default MapModal;