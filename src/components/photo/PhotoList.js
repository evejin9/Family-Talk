import React from 'react';
import dataPhoto from "../../dataPhoto.json";
import PhotoListItem from './PhotoListItem';
import styled from 'styled-components';
import CommentList from './CommentList';

const PhotoListWrapper = styled.div`

`

function PhotoList(props) {
  // console.log(dataPhoto);
  return (
    <PhotoListWrapper>
      {dataPhoto.map((post) => 
        <PhotoListItem key={post.id} post={post} />
      )}
    </PhotoListWrapper>
  );
}

export default PhotoList;