import React from 'react';
import styled from 'styled-components';

const ChatUi = styled.div`
  width: 100%;
  height: 100%;
`

const UserChat = styled.div`
  padding: 20px 0;
  font-size: 15px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  flex: 1;
  
  .my-chat {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .chatArea {
      padding: 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
  }

  .other-chat {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

`;

const MyChat = styled.div`
`;

const ChatInput = styled.div`
`;

function Chat(props) {

  return (
    <ChatUi>

      <UserChat>
        <div className='my-chat'>
          <span>21:00</span>
          <div className='chatArea'>
            <span>나</span>
            <p>아빠, 내가 바퀴벌레로 변하면 어떻게 할 거야?</p>
          </div>
        </div>

        <br />

        <div className='other-chat'>
          <img />사진
          <div>
            <span>아빠</span>
            <p>세스코 불러야지</p>
          </div>
          <span>21:00</span>
        </div>


      </UserChat>

      <MyChat>

      </MyChat>

      <ChatInput>
        <input />
      </ChatInput>
    </ChatUi>
  );
}

export default Chat;