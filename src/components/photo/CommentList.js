import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import { LogInUser } from '../../features/loginSlice';


// const CommentListWrapper = styled.div`
// overflow: auto;
// `

function CommentList({comments, removeComment}) {
  const logInUserInfo = useSelector(LogInUser);

  return (
    <div>
      {comments.map((comment) => 
        <Comment 
          key={comment.commentId} 
          id={comment.commentId} 
          commentName={comment.commentName} 
          commentContent={comment.commentContent} 
          removeComment={removeComment}
          isAuthor={comment.commentName === logInUserInfo.name}
        />)}
    </div>
  );
}

export default CommentList;