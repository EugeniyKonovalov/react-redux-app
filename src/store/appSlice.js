import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  posts: [],
  comments: [],
  selectedUserId: null,
  selectedPostId: null,
  detailPosts: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
    setSelectedPostId: (state, action) => {
      state.selectedPostId = action.payload;
    },
    setDetailPosts: (state, action) => {
      state.detailPosts = action.payload;
    },
    addPostAsync: (state, action) => {},
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPostAsync: (state, action) => {},
    editPost: (state, action) => {
      const post = state.posts.find((item) => item.id === action.payload.id);
      if (post) {
        post.title = action.payload.title;
        post.body = action.payload.body;
      }
    },
    deletePostAsync: (state, action) => {},
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
