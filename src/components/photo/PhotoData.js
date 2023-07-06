import React from 'react';
import WritePhoto from "./WritePhoto";
import PhotoList from "./PhotoList";
import CommentList from "./CommentList";

function PhotoData(props) {
  const [posts, setPosts] = useState([]);
  
  const handleInsert = useCallback((imagePath, content) => {
    const post = {
      id: uuid(),
      name: logInUSerInfo.name,
      profileImage: logInUSerInfo.imagePath,
      image,
      content
    }
    setPosts(posts => posts.concat(post))
  }, []);

  console.log(content);


  
  return (
  <div>
    <PhotoList content={content}/>  
    <WritePhoto onInsert={handleInsert}/>
    <CommentList/>
  </div>
  );
}

export default PhotoData;