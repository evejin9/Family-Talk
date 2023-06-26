import React from 'react';
import styled from 'styled-components';

const ChatUi = styled.div`
  width: 100%;
  height: 100%;
`

function Chat(props) {
  return (
    <ChatUi>
        <p> 채팅 </p>
    </ChatUi>
  );
}

export default Chat;