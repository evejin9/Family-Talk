import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import { comments } from '../../features/photoSlice';


const CommentListWrapper = styled.div`

`

function CommentList(props) {
const commentss = useSelector(comments)
console.log(commentss);
  return (
    <CommentListWrapper>
      {/* {commentss.map((comment) => <Comment key={comment.id} name={comments.name} comment={comment} />)} */}
    </CommentListWrapper>
  );
}

export default CommentList;