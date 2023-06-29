import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { format } from "date-fns";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";

import chatData from "../chatData.json";
import userData from "../data.json";

import MyChatItem from '../components/chat/MyChatItem';
import OtherUserChatItem from '../components/chat/OtherUserChatItem';
import { addChatList, chatListArray, getChatList, } from '../features/chatSlice';


const ChatUi = styled.div`
  width: 100%;
  height: 100%;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-height: 150px;
    max-width: 100%;
  }
`

const UserChat = styled.div`
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;
  background-color: #efefef;
  border-radius: 10px;
  flex: 1;

  overflow-x: hidden;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
    cursor: pointer;
  }

  .today {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
`;

const InputArea = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImgUploadInput = styled.label`
  padding-right: 10px;

  input {
    display:none;
  }

  svg {
    font-size: 30px;
    color: #f5cc8d;

    &:hover {
      color: red;
    }
  }
  
  img {
    max-height: 150px;
    max-width: 100%;
  }
`

const ChatInput = styled.div`
  position: relative;
  /* width: 100%; */
  padding: 10px 63px 10px 20px;
  box-sizing: border-box;
  background-color: #efefef;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* display: flex; */
  
  input {
    width: 100%;
    height: 30px;
    background-color: #efefef;
    border: none;
    flex: 1;
    &:focus {
      outline: none;
    }
  }
  
  img {
    max-height: 150px;
    max-width: 100%;
    display: ${props => props.imgFile ? "none" : "content" };
    /* display: }; */
  }

  svg {
    font-size: 30px;
    color: #f5cc8d;
    position: absolute;
    bottom: 10px;
    right: 23px;

    &:hover {
      color: red;
    }
  }
`;

function Chat(props) {
  const [newChat, setNewChat] = useState('');
  const [imgFile, setImgFile] = useState('');

  const chatList = useSelector(chatListArray);
  const dispatch = useDispatch();

  const date = new Date();
  const today = format(date, `yyyy-MM-dd`);

  const nextId = useRef(3);
  const messageRef = useRef(null);
  const imgRef = useRef();

  useEffect(() => {
    dispatch(getChatList(chatData));
  }, []);
  
  useEffect(() => {    
    messageRef.current.scrollIntoView();
  }, [chatList])
  
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
      setNewChat(reader.result);
    }
  }

  const handleNewChat = (e) => {
    setNewChat(e.target.value);
    // e.preventDefault();
  };
  
  const addNewChat = () => {
    newChat !== '' && 
    
    dispatch(addChatList({newChat, nextId}));
    setNewChat('');
    setImgFile('');
  }
  
  return (
    <ChatUi className='show-content'>
      <UserChat>
        <div className='today'>{today}</div>

        {chatList.map((chat) => {
          return chat.name === '나' ? 
            <MyChatItem chat={chat} key={chat.id} /> : 
            <OtherUserChatItem chat={chat} key={chat.id} userData={userData} />
        })}

        {/* 하단으로 자동 스크롤 하기 위한 div */}
        <div ref={messageRef}></div>

      </UserChat>

      {/* 사진 업로드 input 및 버튼 */}

      {/* 채팅 input 창 */}
      <InputArea>
        <ImgUploadInput>
          <AiOutlinePlusCircle />
          <input 
            type='file' 
            accept='image/*'
            onChange={saveImgFile}
            ref={imgRef}
          />
        </ImgUploadInput>
        
        <ChatInput>
          {imgFile
            ? <img src={imgFile ? imgFile : undefined} imgFile={imgFile} /> 
            : <input 
              type='text'
              value={newChat} 
              onChange={handleNewChat}
              onKeyUp={(e) => {
                if(e.key === 'Enter') {
                  addNewChat();
                  }
              }} 
            />
          }
          
          <BsFillArrowUpCircleFill 
            className='cursor-point' 
            onClick={() => addNewChat()} 
          />
        </ChatInput>
      </InputArea>
    </ChatUi>
  );
}

export default Chat;