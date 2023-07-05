import React, { useCallback, useEffect, useState } from 'react';
import PhotoList from '../components/photo/PhotoList';
import  dataPhoto  from "../dataPhoto.json";
// import { initPhotoList } from '../utils/local-storage.util';
import { useSelector } from 'react-redux';
import { uuid } from "react-uuid";
import { LogInUser } from '../features/loginSlice';
import EditPhoto from '../components/photo/EditPhoto';
import WritePhoto from "../components/photo/WritePhoto";
import styled from 'styled-components';

const PhotoWrapper = styled.div`
.hidden {
  display: none;
}
`

function Photo() {
  // useEffect(() => {
  //   // console.log(dataPhoto);
  //   initPhotoList(dataPhoto)
  // }, [])
  const [posts, setPosts] = useState([]);
  
  
  const logInUSerInfo = useSelector(LogInUser)

  const handleInsert = useCallback((imagePath, content) => {
    const post = {
      name: logInUSerInfo.name,
      profileImage: logInUSerInfo.imagePath,
      imagePath,
      content
    }
    setPosts(posts => posts.concat(post))
  }, [])


  return (
    <PhotoWrapper className='show-content'>
        <PhotoList post={dataPhoto} />

        <div className='hidden'>
          <WritePhoto onInsert={handleInsert}/>
          <EditPhoto />
        </div>
    </PhotoWrapper>
    
  );
}

export default Photo;