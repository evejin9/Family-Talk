import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const StyledMainPhoto = styled.div`
  width: 100%;
  height: 50vh;
  border-radius: 8px;
  overflow: hidden;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 200px;
  border: 1px solid #000;
	background-color: #777;
	color: #ffffff;
  position: "relative";
`;

const StyledImg = styled.img`
  /* width: 100%;
  height: 100%; */
  cursor: pointer;
`;

const Edited = styled.input`
  display: none;
`;

function MainPhoto(props) {
  const [image, setImage] = useState("https://i.ibb.co/GcfGvL7/famsta3.jpg");
  const [file, setFile] = useState();
  const fileInput = useRef(null);
  
  // SwiperCore.use([Navigation, Pagination, Autoplay]); // Swiper


  const onClickEdit = () => {
    fileInput.current.click();
  };

  const onChangeImage = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setImage("https://i.ibb.co/GcfGvL7/famsta3.jpg");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  return (
    <StyledMainPhoto>

      <StyledSwiper
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
        }}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        // modules={[Autoplay]}
        // autoplay={{
        //   delay: 500,
        // }}
      >
        <SwiperSlide>첫번째</SwiperSlide>
        <SwiperSlide>두번째</SwiperSlide>
        <SwiperSlide>세번째</SwiperSlide>
        <SwiperSlide>네번째</SwiperSlide>
      </StyledSwiper>
  
      <StyledImg
        src={image}
        alt='프로필 사진'
        onClick={onClickEdit}
        title='클릭하여 이미지 변경'
      />
      <Edited
        type='file'
        accept='image/jpg, image/png, image/jpeg'
        name='mainPhoto'
        className='image_upload'
        onChange={onChangeImage}
        ref={fileInput}
      />
    </StyledMainPhoto>
  );
}

export default MainPhoto;