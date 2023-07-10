import React, { useState } from 'react';
import Myprofile from '../components/mypage/Myprofile';
import UserPass from '../components/mypage/UserPass';
import DetailedProfile from '../components/mypage/DetailedProfile';
import styled from 'styled-components';
import EditModal from '../components/mypage/EditModal';


const DetailedWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  border: 2px solid   #f5cc8d;
  margin-top: 10px;
  border-radius: 10px;
`;


function Mypage({selectedImage , handleImageChange}) {
  const [editModal, setEditModal] = useState(false);

  const openModal = () => {
    setEditModal(true)
  };

  const closeModal = () => {
    setEditModal(false)
  }

  

  return (
    <div className='show-content'>
      <Myprofile selectedImage={selectedImage} handleImageChange={handleImageChange}  />
      <DetailedWrapper>
        <UserPass />
        <DetailedProfile openModal={openModal} />
      </DetailedWrapper>
        <div style={{position:'absolute', top:'28%', right: '10%'}}>
        {editModal && <EditModal closeModal={closeModal}/>}
        </div>
    </div>
  );
}

export default Mypage;