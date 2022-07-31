import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { appActions } from "../store/appSlice";

function* addPostAsync(action) {
  try {
    const addPost = async () =>
      await axios({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: action.payload,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
    const response = yield call(addPost);
    yield put(appActions.addPost(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* deletePostAsync(action) {
  try {
    const deletePost = async () =>
      await axios({
        method: "delete",
        url: `https://jsonplaceholder.typicode.com/posts/${action.payload}`,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });

    const response = yield call(deletePost);
    yield put(appActions.deletePost(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* editPostAsync(action) {
  try {
    const editPost = async () =>
      await axios({
        method: "put",
        url: `https://jsonplaceholder.typicode.com/posts/${action.payload.id}`,
        data: action.payload,
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
    const response = yield call(editPost);
    yield put(appActions.editPost(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* appSaga() {
  yield takeEvery(appActions.addPostAsync, addPostAsync);
  yield takeEvery(appActions.deletePostAsync, deletePostAsync);
  yield takeEvery(appActions.editPostAsync, editPostAsync);
}
export default appSaga;
