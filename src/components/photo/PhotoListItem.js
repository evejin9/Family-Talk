import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { BsCheck2 } from "react-icons/bs";
import { PiPencil, PiTrash } from "react-icons/pi";
import CommentList from './CommentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import { LogInUser } from '../../features/loginSlice';
import { deletePost, editPost } from '../../features/photoSlice';
import Button from '../ui/Button';

const PhotoLIstItemWrapper = styled.div`
border-radius: 8px;
display: flex;
position: relative;
margin-bottom: 50px;

  .uploadImage{
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 60%;
  max-height: 700px;
  overflow: hidden;
  margin-bottom: 5px;
  justify-content: center;
  background-color:  #000000;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  
  }
}

.mainContent {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  justify-content: space-between;

  .profileImgNameMore {
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 3px;
    img {
      display: inline;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 2%;
    }
    .name {
      width: 75%;
    }
    svg {
      font-size: 25px;
      cursor: pointer;
      color:#acacac;
    }
    button {
    background: none;
    outline: none;
    border: none;
    width: auto;
    padding: 1px;
    }
  }
  .contentAndComment {
    height: auto;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #ccc;
      cursor: pointer;
    }
    .postContent {
      flex-wrap: wrap;
      overflow: hidden;
      height: auto;
      margin-bottom: 3%;
      padding-top: 10px;
      }
    .comment {
      margin-bottom: 3%;
      height: auto;

    }
  }

    .writeComment {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: end;
      width: 100%;
    input {
      background: none;
      outline: none;
      border: none;
      border-bottom: solid 1px black;
      width: 85%;
      }
    button {
      background: none;
      outline: none;
      border: none;
      display: flex;
      align-items: end;
      svg {
        font-size: 20px;
      }
    }
  }
  }
  .editContent {
    width: 100%;
    overflow: auto;
    background: none;
    outline: none;
    border: none;
    border-bottom: solid 1px black;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2px;
      background: #ccc;
      cursor: pointer;
    }
  }
  .editButton {
    display: flex;
    justify-content: end;
    button {
      margin-left: 3%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 20%;
      font-size: 12px;
      padding: 2%;
    }
  } 
`

function PhotoListItem(props) {
  const {post} = props;
  const dispatch = useDispatch()
  const logInUserInfo = useSelector(LogInUser);

  // 게시글 삭제
  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  // 수정 영역
  const [editContent, setEditContent] = useState(post.content);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditPost = () => {
    setIsEditing(true);
  };

  const handleChangeEditContent = (e) => {
    setEditContent(e.target.value);
  };
  
  const handleSaveEdit = () => {
    if (editContent.length < 1){
      alert('내용을 입력해 주세요')
      return;
    }
    dispatch(editPost({ id: post.id, content: editContent }));
    setIsEditing(false);
  };
  
  const handleCancelEdit = () => {
    setEditContent(post.content);
    setIsEditing(false);
  };


  // 댓글영역
  const [comments, setComments] = useState([
    {
      postId: 1,
      commentName: "신돌식",
      commentId: 11,
      commentContent: "좋아보이네😄"
    },
    {
      postId: 1,
      commentName: "이옥분",
      commentId: 12,
      commentContent: "다음에는 같이 가고 싶구나."
    },
    {
      postId: 1,
      commentName: "신앵두",
      commentId: 13,
      commentContent: "나만 빼고 가고..."
    },
    {
      postId: 1,
      commentName: "신형만",
      commentId: 14,
      commentContent: "좋았었지~"
    },
    {
      postId: 1,
      commentName: "신짱구",
      commentId: 15,
      commentContent: "👍"
    },
    {
      postId: 2,
      commentName: "봉미선",
      commentId: 22,
      commentContent: "예쁘게 잘나왔네~"
    },
    {
      postId: 2,
      commentName: "신짱아",
      commentId: 24,
      commentContent: "😁"
    },
    {
      postId: 2,
      commentName: "신짱구",
      commentId: 25,
      commentContent: "호호잇!"
    },
    {
      postId: 3,
      commentName: "신형만",
      commentId: 31,
      commentContent: "감성뭐야~"
    },
    {
      postId: 3,
      commentName: "봉미선",
      commentId: 32,
      commentContent: "이야 예쁘네"
    },
    {
      postId: 3,
      commentName: "신짱아",
      commentId: 33,
      commentContent: "👍"
    },
    {
      postId: 3,
      commentName: "신돌식",
      commentId: 35,
      commentContent: "훅..."
    },
    {
      postId: 4,
      commentName: "신짱구",
      commentId: 41,
      commentContent: "다음에 또 사주세요 ㅋㅋㅋ"
    },
    {
      postId: 4,
      commentName: "신짱아",
      commentId: 42,
      commentContent: "👏"
    },
    {
      postId: 5,
      commentName: "신형만",
      commentId: 51,
      commentContent: "넵~!"
    },
    {
      postId: 5,
      commentName: "신짱아",
      commentId: 52,
      commentContent: "좋습니다😃"
    },
    {
      postId: 5,
      commentName: "신짱구",
      commentId: 54,
      commentContent: "👍👍"
    },
    {
      postId: 6,
      commentName: "신짱구",
      commentId: 61,
      commentContent: "👍"
    }
  ]);
  const [value, setValue] = useState('');
  const logInUSerInfo = useSelector(LogInUser);
  const postId = post.id;
  const filteredComments = comments.filter((comment) => comment.postId === postId);

    const onWriteComment = useCallback((value) => {
      const comment = {
        postId: postId,
        commentId: uuidv4(),
        commentContent: value,
        commentName: logInUSerInfo.name
      }
      setComments(comments => comments.concat(comment))
  }, [])

    const handleChangeComment = (e) => {
      setValue(e.target.value);
    }
    
    const commentHandleSubmit = (e) => {
      if (value.length < 1){
        alert('내용을 입력해 주세요')
        return;
      }
      onWriteComment(value);
      setValue('');
    }

    const handleRemoveComment = useCallback((id) =>{
      setComments(comments => comments.filter((comment) => comment.commentId !== id));
    }, []);

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); 
        commentHandleSubmit();
      }
    };

  return (
    <PhotoLIstItemWrapper>
      <div className='uploadImage'>
        <img src={post.imagePath} alt='img'></img>
      </div>
      <div className='mainContent'>
        <div className='profileContentComment'>
          <div className='profileImgNameMore'>
            <img src={post.profileImage} alt='profileImg'></img>
            <span className='name'>{post.name}</span> 
            {logInUserInfo.name === post.name && 
            (<>
            <button onClick={handleEditPost}><PiPencil /></button>
            <button onClick={handleDelete}><PiTrash /></button>
            </>)}
          </div>
          <div className='contentAndComment'>
            {isEditing ? 
              (
                <div>
                  <textarea 
                    value={editContent}
                    onChange={handleChangeEditContent}
                    className="editContent"
                  />
                    <div className='editButton'>
                    <Button title='취소' onClick={handleCancelEdit} />
                    <Button title='수정' onClick={handleSaveEdit} />
                    </div>
                </div>
              ) : (
                <div className="postContent">{post.content}</div>
              )
            }
            <div className='comment'>
              <CommentList comments={filteredComments} removeComment={handleRemoveComment}/>
            </div>
          </div>
        </div>
          <div className='writeComment'>
            <input type='text' value={value} onChange={handleChangeComment}>
            </input>
            <button type='button' className='commentButton' onClick={commentHandleSubmit} onKeyDown={handleKeyDown}>
              <BsCheck2/>
            </button>
          </div>
      </div>
    </PhotoLIstItemWrapper>
  );
}

export default PhotoListItem;