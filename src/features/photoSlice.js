import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid'



const initialState = {
  postList: [
    {
      name: "봉미선",
      id: 1,
      profileImage: "https://ifh.cc/g/gBs70s.jpg",
      imagePath: "https://i.ibb.co/LNNGFfw/Kakao-Talk-20230629-182526404.jpg",
      content: "우리 가족 첫 바다여행!!",
      comments: [
        {
        commentName: "신돌식",
          commentId: 11,
          commentContent: "좋아보이네😄엄청나게 긴 댓글 쓰면 제대로 잘 내려갈까 안되면 어떡하지 제발 됐으면 좋겠다!!!!!!!"
        },
        {
          commentName: "이옥분",
          commentId: 12,
          commentContent: "다음에는 같이 가고 싶구나."
        },
        {
          commentName: "신앵두",
          commentId: 13,
          commentContent: "나만 빼고 가고..."
        },
        {
          commentName: "신형만",
          commentId: 14,
          commentContent: "좋았었지~"
        },
        {
          commentName: "신짱구",
          commentId: 15,
          commentContent: "👍"
        }
      ]
    },
    {
      name: "신형만",
      id: 2,
      profileImage: "https://ifh.cc/g/zFXKrc.jpg",
      imagePath: "https://i.ibb.co/BVFcm86/famsta2.jpg",
      content: "차에서 두근두근",
      comments: [
        {
          commentName: "봉미선",
          commentId: 22,
          commentContent: "예쁘게 잘나왔네~"
        },
        {
          commentName: "신짱아",
          commentId: 24,
          commentContent: "😁"
        },
        {
          commentName: "신짱구",
          commentId: 25,
          commentContent: "호호잇!"
        }
      ]
    },
    {
      name: "신짱구",
      id: 3,
      profileImage: "https://ifh.cc/g/Z2RB1f.jpg",
      imagePath: "https://i.ibb.co/GcfGvL7/famsta3.jpg",
      content: "평화로운 우리의 여름",
      comments: [
        {
          commentName: "신형만",
          commentId: 31,
          commentContent: "감성뭐야~"
        },
        {
          commentName: "봉미선",
          commentId: 32,
          commentContent: "이야 예쁘네"
        },
        {
          commentName: "신짱아",
          commentId: 33,
          commentContent: "👍"
        },
        {
          commentName: "신돌식",
          commentId: 35,
          commentContent: "훅..."
        }
      ]
    },
    {
      name: "봉미선",
      id: 4,
      profileImage: "https://ifh.cc/g/gBs70s.jpg",
      imagePath: "https://i.ibb.co/rk1jbCH/Kakao-Talk-20230629-182517255.jpg",
      content: "오랜만에 외식~~",
      comments: [
        {
          commentName: "신짱구",
          commentId: 41,
          commentContent: "다음에 또 사주세요 ㅋㅋㅋ"
        },
        {
          commentName: "신짱아",
          commentId: 42,
          commentContent: "👏"
        }
      ]
    },
    {
      name: "봉미선",
      id: 5,
      profileImage: "https://ifh.cc/g/gBs70s.jpg",
      imagePath: "https://i.ibb.co/nzMzDkf/famsta5.jpg",
      content: "살인 진드기 조심!!!",
      comments: [
        {
          commentName: "신형만",
          commentId: 51,
          commentContent: "넵~!"
        },
        {
          commentName: "신짱아",
          commentId: 52,
          commentContent: "좋습니다😃"
        },
        {
          commentName: "신짱구",
          commentId: 54,
          commentContent: "👍👍"
        }
      ]
    },
    {
      name: "신짱아",
      id: 6,
      profileImage: "https://ifh.cc/g/RRjyQz.jpg",
      imagePath: "https://i.ibb.co/f4Bf8V8/famsta6.jpg",
      content: "삼겹살 홈파티!!",
      comments: [
        {
          commentName: "신짱구",
          commentId: 61,
          commentContent: "👍"
        }
      ]
    }
  ],
}

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    getPostList: (state, { payload: post }) => {
      state.postList = post;
    },
    addPostList: (state, { payload: { logInUSerInfo, content, image } }) => {
      state.postList.unshift({
        name: logInUSerInfo.name,
        id: uuidv4(),
        memberId: logInUSerInfo.id,
        content: content,
        imagePath: image,
        profileImage: logInUSerInfo.imagePath,
        comments: [
          {
            commentName: logInUSerInfo.name,
            commentId: uuidv4(),
            // commentContent: commentContent
          }
        ]
      });
    },
    // addComment: (state, {payload:  logInUSerInfo, commentContent}) => {
    //   // item = { id, title, price, count } 를 받아옴
    //   // console.log(item);
    //   const targetComment = state.comments.find((comment) => comment.commentId === comment.commentId);
    //     state.cartList.push(
    //       {
    //         commentName: logInUSerInfo.name,
    //         commentId: uuidv4(),
    //         commentContent: commentContent
    //     })
    // },
    deletePost(state, action) {
      const id = action.payload;
      state.postList = state.postList.filter(post => post.id !== id);
      state.selectedTitle = null;
    },
    // editPost: (state, { payload: { id, imagePath, content } }) => {
    //   const postIndex = state.postList.findIndex(post => post.id === id);
    //   if (postIndex !== -1) {
    //     state.postList[postIndex].imagePath = imagePath;
    //     state.postList[postIndex].content = content;
    //   }
    // }
  }
});

export const { getPostList, addPostList, deletePost, editPost, addComment } = photoSlice.actions;

export const postLists = (state) => state.photo.postList; 
export const comments = (state) => state.photo.comment;

export default photoSlice.reducer;