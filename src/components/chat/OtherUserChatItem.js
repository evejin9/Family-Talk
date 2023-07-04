import React from 'react';
import styled from 'styled-components';

const OtherUserChat = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .profile {
    width: 50px;
    border-radius: 50%;
  }

  .chatArea {
    max-width: 60%;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    .contentArea {
      margin-top: 5px;
      padding: 10px;
      background-color: #d9d9d9;
      border-radius: 10px;
    }
  }
`;

function OtherUserChatItem(props) {
  const { chat : {id, name, content, time}, userData, target : { memberId, relation } }  = props;

  return (
    <OtherUserChat>
      {userData.map(user => {
        return user.id === memberId && <img className='profile' key={user.id} src={user.imagePath} />
      })}
      <div className='chatArea'>
        <span>{relation}</span>
        {
          content.includes('data:image')
          ? <p className='contentArea'><img src={content} /></p>
          : <p className='contentArea'>{content}</p>
        }
      </div>
      <span>{time}</span>
    </OtherUserChat>
  );
}

export default OtherUserChatItem;