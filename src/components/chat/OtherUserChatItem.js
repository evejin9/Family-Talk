import React from 'react';
import styled from 'styled-components';

const OtherUserChat = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  img {
    width: 50px;
    border-radius: 50%;
  }
  .chatArea {
      padding: 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .contentArea {
      margin-top: 5px;
      padding: 10px;
      background-color: #d9d9d9;
      border-radius: 10px;
    }
`;

function OtherUserChatItem(props) {
  const { chat : {id, name, content, time}, userData } = props;

  return (
    <OtherUserChat>
      {userData.map(user => {
        return user.name === name && <img key={user.id} src={user.imagePath} />
      })}
      <div className='chatArea'>
        <span>{name}</span>
        <p className='contentArea'>{content}</p>
      </div>
      <span>{time}</span>
    </OtherUserChat>
  );
}

export default OtherUserChatItem;