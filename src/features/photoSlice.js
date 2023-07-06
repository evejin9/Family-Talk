import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  postList: [
    {
      "name": "봉미선",
      "id": 1,
      "profileImage": "https://ifh.cc/g/gBs70s.jpg",
      "imagePath": "https://i.ibb.co/LNNGFfw/Kakao-Talk-20230629-182526404.jpg",
      "content": "우리 가족 첫 바다여행!!",
      // "comments": [
      //   {
      //   "name": "신돌식",
      //     "id": 11,
      //     "content": "좋아보이네😄"
      //   },
      //   {
      //     "name": "이옥분",
      //     "id": 12,
      //     "content": "다음에는 같이 가고 싶구나."
      //   },
      //   {
      //     "name": "신앵두",
      //     "id": 13,
      //     "content": "나만 빼고 가고..."
      //   },
      //   {
      //     "name": "신형만",
      //     "id": 14,
      //     "content": "좋았었지~"
      //   },
      //   {
      //     "name": "신짱구",
      //     "id": 15,
      //     "content": "👍"
      //   }
      // ]
    },
    {
      "name": "신형만",
      "id": 2,
      "profileImage": "https://ifh.cc/g/zFXKrc.jpg",
      "imagePath": "https://i.ibb.co/BVFcm86/famsta2.jpg",
      "content": "차에서 두근두근",
      // "comments": [
      //   {
      //     "name": "봉미선",
      //     "id": 22,
      //     "content": "예쁘게 잘나왔네~"
      //   },
      //   {
      //     "name": "신짱아",
      //     "id": 24,
      //     "content": "😁"
      //   },
      //   {
      //     "name": "신짱구",
      //     "id": 25,
      //     "content": "호호잇!"
      //   }
      // ]
    },
    {
      "name": "신짱구",
      "id": 3,
      "profileImage": "https://ifh.cc/g/Z2RB1f.jpg",
      "imagePath": "https://i.ibb.co/GcfGvL7/famsta3.jpg",
      "content": "평화로운 우리의 여름",
      "comments": [
        {
          "name": "신형만",
          "id": 31,
          "content": "감성뭐야~"
        },
        {
          "name": "봉미선",
          "id": 32,
          "content": "이야 예쁘네"
        },
        {
          "name": "신짱아",
          "id": 33,
          "content": "👍"
        },
        {
          "name": "신돌식",
          "id": 35,
          "content": "훅..."
        }
      ]
    },
    {
      "name": "봉미선",
      "id": 4,
      "profileImage": "https://ifh.cc/g/gBs70s.jpg",
      "imagePath": "https://i.ibb.co/rk1jbCH/Kakao-Talk-20230629-182517255.jpg",
      "content": "오랜만에 외식~~",
      "comments": [
        {
          "name": "신짱구",
          "id": 41,
          "content": "다음에 또 사주세요 ㅋㅋㅋ"
        },
        {
          "name": "신짱아",
          "id": 42,
          "content": "👏"
        }
      ]
    },
    {
      "name": "봉미선",
      "id": 5,
      "profileImage": "https://ifh.cc/g/gBs70s.jpg",
      "imagePath": "https://i.ibb.co/nzMzDkf/famsta5.jpg",
      "content": "살인 진드기 조심!!!",
      "comments": [
        {
          "name": "신형만",
          "id": 51,
          "content": "넵~!"
        },
        {
          "name": "신짱아",
          "id": 52,
          "content": "좋습니다😃"
        },
        {
          "name": "신짱구",
          "id": 54,
          "content": "👍👍"
        }
      ]
    },
    {
      "name": "신짱아",
      "id": 6,
      "profileImage": "https://ifh.cc/g/RRjyQz.jpg",
      "imagePath": "https://i.ibb.co/f4Bf8V8/famsta6.jpg",
      "content": "삼겹살 홈파티!!",
      "comments": [
        {
          "name": "신짱구",
          "id": 61,
          "content": "👍"
        }
      ]
    }
  ],
  comments: []
  
}

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    getPostList: (state, { payload: post }) => {
      state.postList = post;
    },
    addPostList: (state, { payload: { logInUSerInfo, nextId, content, image } }) => {
      console.log(nextId);
      console.log(content);
      console.log(image);
      state.postList.unshift({
        name: logInUSerInfo.name,
        id: `${nextId.current += 1}`,
        memberId: logInUSerInfo.id,
        content: content,
        imagePath: image,
        profileImage: logInUSerInfo.imagePath,
      });
    },
    getComments: (state, {payload: comment}) => {
      state.comments = comment;
    },
    addComments: (state, {payload: { logInUSerInfo, nextId, comment } }) => {
      console.log(nextId);
      console.log(comment);
      state.comments.push({
        name: logInUSerInfo.name,
        id: `${nextId.current += 1}`,
        content: comment,
      })
    }
  }
});

export const { getPostList, addPostList, getComments, addComments } = photoSlice.actions;

export const postLists = (state) => state.photo.postList; 
export const comments = (state) => state.photo.comment;

export default photoSlice.reducer;