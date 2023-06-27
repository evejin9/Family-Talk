import React from 'react';
import styled from 'styled-components';

const PhotoLIstItemWrapper = styled.div`
display: flex;

img {
  
}
`


function PhotoListItem(props) {
  const { post } = props;
  console.log(post.imagePath);
  return (
    <PhotoLIstItemWrapper>
      <img src={post.imagePath} alt='img'></img>
      <div>{post.content}</div>
    </PhotoLIstItemWrapper>
  );
}

export default PhotoListItem;