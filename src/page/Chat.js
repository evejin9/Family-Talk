import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import dayjs from "dayjs";

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

const ChatInput = styled.div`
  position: relative;
  width: 100%;

  input {
    margin-top: 40px;
    padding: 0 63px 0 20px;
    box-sizing: border-box;
    background-color: #efefef;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
  }

  svg {
    font-size: 30px;
    color: #f5cc8d;
    position: absolute;
    bottom: 10px;
    right: 23px;
  }
`;

function Chat(props) {
  const [newChat, setNewChat] = useState('');

  const chatList = useSelector(chatListArray);
  const dispatch = useDispatch();

  const myChat = new Set(chatList);
  const myChat2 = [...myChat];

  const date = dayjs();
  const today = date.format(`YYYY-MM-DD`);

  const nextId = useRef(3);

  useEffect(() => {
    dispatch(getChatList(chatData));
  }, []);
  
  const handleNewChat = (e) => {
    setNewChat(e.target.value);
  };
  
  const addNewChat = () => {
    newChat !== '' &&
    dispatch(addChatList({newChat, nextId}));
    setNewChat('');
  }
  
  return (
    <ChatUi className='show-content'>
      <UserChat>
        {/* <div className='today'>2023-06-26</div> */}
        <div className='today'>{today}</div>

        {myChat2.map((chat) => {
          return chat.name === '나' ? 
            <MyChatItem chat={chat} key={chat.id} /> : 
            <OtherUserChatItem chat={chat} key={chat.id} userData={userData} />
        })}

      </UserChat>

      {/* 채팅 input 창 */}
      <ChatInput>
        <input 
          value={newChat} 
          onChange={handleNewChat}
          onKeyUp={(e) => {
            if(e.key === 'Enter') {
              addNewChat();
            }
          }} 
        />
        <BsFillArrowUpCircleFill onClick={() => addNewChat()} />
      </ChatInput>
    </ChatUi>
  );
}

export default Chat;