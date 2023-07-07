import React from 'react';
import styled from 'styled-components';
import MapModal from './MapModal';
import ChatMap from './ChatMap';

const Mychat = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  .chatArea {
    max-width: 70%;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    
    .contentArea {
      margin-top: 5px;
      padding: 10px;
      background-color: #d9d9d9;
      border-radius: 10px;
    };
  };
`;

function MyChatItem(props) {
  const { chat : {id, content, time}, target : { memberId, relation } } = props;

  return (
    <Mychat>
      <span>{time}</span>
      <div className='chatArea'>
        <span>{relation}</span>
        {
          typeof content === 'object'
          ? <ChatMap />
          : content.includes('data:')
            ? <p className='contentArea'><img src={content} /></p>
            : <p className='contentArea'>{content}</p>
        }
      </div>
    </Mychat>
  );
}

export default MyChatItem;