import React from 'react';
import styled from 'styled-components';
import { BsFillArrowUpCircleFill } from "react-icons/bs";

import chatData from "../chatData.json";
import userData from "../data.json";
import MyChatItem from '../components/chat/MyChatItem';
import OtherUserChatItem from '../components/chat/OtherUserChatItem';

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
  width: 85%;
  background-color: #efefef;
  border-radius: 10px;
  flex: 1;
  text-align: center;
`;

const ChatInput = styled.div`
  position: relative;

  input {
    margin: 10px;
    background-color: #efefef;
    width: 355px;
    height: 50px;
    border-radius: 10px;
    border: none;
  }

  svg {
    font-size: 30px;
    color: #f5cc8d;
    position: absolute;
    bottom: 20px;
    right: 23px;
  }
`;

function Chat(props) {

  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

  return (
    <ChatUi>
      <UserChat>
      {today}
        {chatData.map((chat) => {
          return chat.name === '나' ? 
            <MyChatItem chat={chat} key={chat.id} />
            : <OtherUserChatItem chat={chat} key={chat.id} userData={userData} />
        })}
      </UserChat>

      {/* 채팅 input 창 */}
      <ChatInput>
        <input />
        <BsFillArrowUpCircleFill />
      </ChatInput>
    </ChatUi>
  );
}

export default Chat;