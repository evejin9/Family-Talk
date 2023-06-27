import React from 'react';
import dataPhoto from "../../dataPhoto.json";
import PhotoListItem from './PhotoListItem';


function PhotoList(props) {
  console.log(dataPhoto);
  return (
    <div>
      {dataPhoto.map((post) => 
        <PhotoListItem key={post.id} post={post} />
      )}
    </div>
  );
}

export default PhotoList;