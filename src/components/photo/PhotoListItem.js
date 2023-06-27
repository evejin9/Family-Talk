import React from 'react';
import styled from 'styled-components';
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
const PhotoLIstItemWrapper = styled.div`

img {
  min-width: 425px;
  max-width: 425px;
  background-size: cover;
  overflow: hidden;
  margin-bottom: 5px;
}
& + & {
  margin-top: 30px;
}

svg {
  font-size: 25px;
  margin-right: 10px;
}

.content {
  margin-top: 5px;
}
`


function PhotoListItem(props) {
  const { post } = props;
  // console.log(post.imagePath);
  return (
    <PhotoLIstItemWrapper>
      <img src={post.imagePath} alt='img'></img>
      <BsSuitHeart />
      <VscComment />
      <div className='content'>{post.content}</div>
    </PhotoLIstItemWrapper>
  );
}

export default PhotoListItem;