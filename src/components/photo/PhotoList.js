// import React, { useEffect, useState } from 'react';
import dataPhoto from "../../dataPhoto.json";
import PhotoListItem from './PhotoListItem';
import styled from 'styled-components';
// import CommentList from './CommentList';
import { useFetcher, useLocation, useNavigate } from 'react-router-dom';
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
// import { getPhotoList } from '../../utils/local-storage.util';

const PhotoListWrapper = styled.div`
  .writePhotoButton {
    position: fixed;
    bottom: 40px;
    left: 583px
  }
  .writePhotoButton{
      background: none;
      outline: none;
      border: none;
      height: 100%;
      /* line-height: 100%; */
      display: flex;
      align-items: end;
      svg {
        font-size: 40px;
        opacity: .8;
        color: rgb(245, 204, 141);;
        &:hover {
          color: red;
        }
      }
    }
`

function PhotoList(props) {
  const [posts, setPosts] = useState(dataPhoto)
  console.log(posts);
  // ([
  //   {
  //     name: "아빠",
  //     id: 2,
  //     profileImage: "https://i.ibb.co/zNJwG5W/dad.jpg",
  //     imagePath: "https://i.ibb.co/BVFcm86/famsta2.jpg",
  //     content: "차에서 두근두근"
  //   },
  //   {
  //     name: "나",
  //     id: 3,
  //     profileImage: "https://i.ibb.co/ryrvrSy/boy.jpg",
  //     imagePath: "https://i.ibb.co/GcfGvL7/famsta3.jpg",
  //     content: "평화로운 우리의 여름"
  //   }
  // ]);
  const location = useLocation();
  const userInfo = { ...location.state };


  // console.log(post);
  // console.log(content);
  // const posts = dataPhoto

  const writePhotoSubmit = () => {
    navigate('/photo/writePhoto')
    // console.log(userInfo.content);
    // console.log(userInfo.id);
    // console.log(userInfo.name);
    // console.log(userInfo.image);
    // console.log(userInfo.name);
    // console.log(userInfo.profileImage);
    // console.log(userInfo);
    // console.log(posts);
    // postsId = useState(0);
    console.log(userInfo.name);
    setPosts(
      {
        name: userInfo.name,
        id: userInfo.id,
        profileImage: userInfo.profileImage,
        imagePath: userInfo.profileImage,
        content: userInfo.content,
      }
    )
    console.log("1"+posts);
  }
  const navigate = useNavigate('/')

  // const [photoList, setPhotoList] = useState([])

  // useEffect(() => {
  //   const res = getPhotoList()
  //   setPhotoList(res)
  // }, [])

  return (
    <PhotoListWrapper>
      {posts.map((post) => 
        <PhotoListItem key={post.id} post={post} />
      )}
      <button className='writePhotoButton' onClick={writePhotoSubmit}><BsPlusCircleFill/></button>
    </PhotoListWrapper>
  );
}

export default PhotoList;