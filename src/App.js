import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "./store/appSlice";
import AppRouter from "./Components/Router/AppRouter";
import Layout from "./Components/Layout/Layout";
import { uiAction } from "./store/uiSlice";
import ErrorsNotification from "./Components/UI/ErrorsNotification";
import Modal from "./Components/UI/Modal";

function App() {
  const dispatch = useDispatch();
  const errorNotification = useSelector((state) => state.ui.notification);
  const fetchUsers = useCallback(async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(appActions.setUsers(res.data));
      })
      .catch((error) => {
        dispatch(
          uiAction.showErrors({
            status: "error",
            title: "Error",
            message: error.message,
          })
        );
      });
  }, [dispatch]);
  const fetchPosts = useCallback(async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        dispatch(appActions.setPosts(res.data));
      })
      .catch((error) => {
        dispatch(
          uiAction.showErrors({
            status: "error",
            title: "Error",
            message: error.message,
          })
        );
      });
  }, [dispatch]);
  const fetchComments = useCallback(async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => {
        dispatch(appActions.setComments(res.data));
      })
      .catch((error) => {
        dispatch(
          uiAction.showErrors({
            status: "error",
            title: "Error",
            message: error.message,
          })
        );
        dispatch(uiAction.onToggleModal());
      });
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [fetchPosts, fetchUsers, fetchComments]);

  return (
    <>
      {errorNotification && (
        <Modal>
          <ErrorsNotification
            status={errorNotification.status}
            title={errorNotification.title}
            message={errorNotification.message}
          />
        </Modal>
      )}
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
