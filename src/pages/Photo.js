import React, { useCallback, useEffect, useState } from 'react';
import PhotoList from '../components/photo/PhotoList';
import { uuid } from "react-uuid";

function Photo() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dbPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(dbPosts)
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);
  console.log(posts);
  // const handleRemove = useCallback((id) => {
  //   setPosts(posts => posts.filter((post) => post.id !== id))
  // }, [])



  return (
    <div className='show-content'>
        <PhotoList posts={posts} />
    </div>
  );
}

export default Photo;