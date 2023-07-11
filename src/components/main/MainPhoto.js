import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const StyledMainPhoto = styled.div`
  width: 100%;
  height: 450px;
  /* overflow: hidden; */
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  img {
    width: 100%;
  }
`;

// const StyledImg = styled.img`
//   /* width: 100%;
//   height: 100%; */
//   cursor: pointer;
// `;

// const Edited = styled.input`
//   display: none;
// `;

function MainPhoto(props) {
  const [image, setImage] = useState("https://ifh.cc/g/NAwTpt.jpg");
  const [file, setFile] = useState();
  const fileInput = useRef(null);
  
  const onClickEdit = () => {
    fileInput.current.click();
  };

  const onChangeImage = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setImage("https://ifh.cc/g/NAwTpt.jpg");
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
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <StyledSwiperSlide>
          <img src={image} />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <img src="https://ifh.cc/g/JtPV7K.jpg" />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <img src="https://ifh.cc/g/m85k78.jpg" />
        </StyledSwiperSlide>
      </StyledSwiper>
    </StyledMainPhoto>
  
    // <StyledMainPhoto>
    //   <StyledImg
    //     src={image}
    //     alt='프로필 사진'
    //     onClick={onClickEdit}
    //     title='클릭하여 이미지 변경'
    //   />
    //   <Edited
    //     type='file'
    //     accept='image/jpg, image/png, image/jpeg'
    //     name='mainPhoto'
    //     className='image_upload'
    //     onChange={onChangeImage}
    //     ref={fileInput}
    //   />
    // </StyledMainPhoto>
  );
}

export default MainPhoto;