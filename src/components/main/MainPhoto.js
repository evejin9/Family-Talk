import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import familyImg from "../../images/main-photo.jpg";
import { MdEdit } from "react-icons/md";

const MainPhotoStyled = styled.div`
  width: 100%;
  position: relative;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 40vh;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const Edited = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;

  svg {
    font-size: 25px;
    color: #282c34;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }
  & input {
    display: none;
  }
`;

function MainPhoto(props) {
  const [image, setImage] = useState("https://i.ibb.co/GcfGvL7/famsta3.jpg");
  const [file, setFile] = useState();
  const fileInput = useRef(null);

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
    <MainPhotoStyled>
      <StyledImg
        src={image}
        alt='프로필 사진'
        onClick={onClickEdit}
        title='클릭하여 이미지 변경'
      />
      <Edited>
        {/* <MdEdit onClick={onClickEdit} /> */}
        <input
          type='file'
          accept='image/jpg, image/png, image/jpeg'
          name='mainPhoto'
          className='image_upload'
          onChange={onChangeImage}
          ref={fileInput}
        />
      </Edited>
    </MainPhotoStyled>
  );
}

export default MainPhoto;