import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PhotoList from './PhotoList';
import WritePhoto from './WritePhoto';
import EditPhoto from './EditPhoto';
import CommentList from './CommentList';
import dataPhoto from "../../dataPhoto.json";
import { uuid } from "react-uuid";
import { useSelector } from 'react-redux';
import { LogInUser } from '../../features/loginSlice';

const PhotoDataWrapper = styled.div`
`



function PhotoData() {
  const [posts, setPosts] = useState([]);

  const logInUSerInfo = useSelector(LogInUser)

  const handleInsert = useCallback((imagePath, content) => {
    const post = {
      id: uuid(),
      name: logInUSerInfo.name,
      profileImage: logInUSerInfo.imagePath,
      imagePath:"",
      content: ''
    }
    setPosts(posts => posts.concat(post))
  }, []);

  const handleRemove = useCallback((id) => {
    setPosts(posts => posts.filter((post) => post.id !== id))
  })





  return (
    <PhotoDataWrapper>
      <PhotoList />
      <WritePhoto />
      <EditPhoto />
      <CommentList />
    </PhotoDataWrapper>
  );
}

export default PhotoData;