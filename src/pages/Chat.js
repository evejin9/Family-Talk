import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { format } from "date-fns";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineClose as CloseButton } from "react-icons/ai";
import { BiSolidMap } from "react-icons/bi";

import chatData from "../chatData.json";
import userData from "../data.json";

import MyChatItem from '../components/chat/MyChatItem';
import OtherUserChatItem from '../components/chat/OtherUserChatItem';
import { addChatList, chatListArray, getChatList, } from '../features/chatSlice';
import { LogInUser } from '../features/loginSlice';
import Map from '../components/chat/Map';


const ChatUi = styled.div`
  width: 500px;
  max-height: 700px;
  padding: 10px 15px;
  background-color: #fff;
  box-shadow: 3px 4px 10px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;


  img {
    max-height: 150px;
    max-width: 100%;
  }
`

const UserChat = styled.div`
  width: 100%;
  /* height: 80%; */
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
  padding: 10px 63px 10px 20px;
  box-sizing: border-box;
  background-color: #efefef;
  width: 100%;
  /* height: 100%; */
  border-radius: 10px;
  /* display: flex; */
  
  input {
    width: 100%;
    height: 30px;
    font-size: 14px;
    background-color: #efefef;
    border: none;
    flex: 1;
    &:focus {
      outline: none;
    }
  }
  
  .addButton {
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

const InputImgArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    max-height: 150px;
    max-width: 90%;
    display: ${props => props.src ? "none" : "content" };
  }
  svg {
    color: #f5cc8d;
    font-size: 20px;
    margin: 5px;
    &:hover {
      color: red;
    }
  }
`;

const ModalCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;

  svg {
    color: #f5cc8d;
    font-size: 20px;

    &:hover {
      color: red;
    }
  }
`;

function Chat(props) {
  const { setShowChatModal, setShowMapModal } = props;

  const [newChat, setNewChat] = useState('');
  const [imgFile, setImgFile] = useState('');

  const chatList = useSelector(chatListArray);
  const logInUser = useSelector(LogInUser);

  const dispatch = useDispatch();

  const date = new Date();
  const today = format(date, `yyyy-MM-dd`);


  const nextId = useRef(chatData.length);
  const messageRef = useRef(null);
  const imgRef = useRef();

  useEffect(() => {
    dispatch(getChatList(chatData));
  }, []);
  
  useEffect(() => {    
    messageRef.current.scrollIntoView();
  }, [chatList]);
  
  const saveImgFile = (e) => {
    const targetFile = e.target.files;
    if (targetFile.length === 0 ) {
      return;
    }

    const saveFile = targetFile[0];
    const reader = new FileReader();

    reader?.readAsDataURL(saveFile);
    reader.onloadend = () => {
      setImgFile(reader.result);
      setNewChat(reader.result);
      e.target.value = '';
    }
  }

  const handleNewChat = (e) => {
    setNewChat(e.target.value);
    // e.preventDefault();
  };
  
  const addNewChat = () => {
    newChat !== '' && 
    
    dispatch(addChatList({newChat, nextId, logInUser}));
    setNewChat('');
    setImgFile('');
  }
  
  const handleShowChatModal = () => {
    setShowChatModal(false);
    setShowMapModal(false);
    setImgFile('');
    setNewChat('');
  }

  return (
    <ChatUi >
      <ModalCloseButton>
        <CloseButton className='cursor-point' onClick={handleShowChatModal} />
      </ModalCloseButton>

      <UserChat>
        <div className='today'>{today}</div>

        {chatList.map((chat) => {
          const target = logInUser.members.find((a) => a.memberId === chat.memberId);

          return (
            target.relation === '나' ? 
            <MyChatItem chat={chat} key={chat.id} target={target} /> : 
            <OtherUserChatItem chat={chat} key={chat.id} userData={userData} target={target} />
          )
        })}

        {/* 하단으로 자동 스크롤 하기 위한 div */}
        <div ref={messageRef}></div>
      </UserChat>

      {/* 사진 업로드 input 및 버튼 */}
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

        <BiSolidMap className='cursor-point' style={{ fontSize: "30px" }} onClick={() => setShowMapModal(true)} />
        
        {/* 채팅 input 창 */}
        <ChatInput>
          {imgFile? 
            <InputImgArea>
              <img src={imgFile ? imgFile : undefined} /> 
              <CloseButton 
                onClick={() => {
                  setImgFile('') 
                  setNewChat('')
                }}
              />
            </InputImgArea>
            : <input 
                type='text'
                value={newChat} 
                onChange={handleNewChat}
                onKeyUp={(e) => {
                  if(e.key === 'Enter') {
                    addNewChat();
                  } else if (e.key === 'Escape') {
                      setShowChatModal(false);
                      setNewChat('');
                    }
                }} 
              />
          }
          
          <BsFillArrowUpCircleFill 
            className='cursor-point addButton' 
            onClick={() => addNewChat()} 
          />
        </ChatInput>
      </InputArea>
    </ChatUi>
  );
}

export default Chat;