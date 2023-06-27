import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowUpCircleFill } from "react-icons/bs";

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
  padding: 20px 0;
  width: 100%;
  background-color: #efefef;
  border-radius: 10px;
  flex: 1;
  text-align: center;

  .today {
    font-size: 14px;
    font-weight: 600;
  }
`;

const ChatInput = styled.div`
  position: relative;
  width: 100%;

  input {
    margin: 40px 0 20px;
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
    bottom: 30px;
    right: 23px;
  }
`;

function Chat(props) {
  const [newChat, setNewChat] = useState('');
  // const chatList = useSelector(chatListArray);
  const dispatch = useDispatch();

  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  useEffect(() => {
    dispatch(getChatList(chatData));
  }, []);
  
  const handleNewChat = (e) => {
    setNewChat(e.target.value);
  };
  
  const addNewChat = () => {
    dispatch(addChatList(newChat));
    setNewChat('');
  }
  
  return (
    <ChatUi>
      <UserChat>
        <span className='today'>{today}</span>

        {chatData.map((chat) => {
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