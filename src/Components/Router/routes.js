import ErrorPage from "../../Pages/ErrorPage";
import Post from "../../Pages/Post";
import {
  ERROR_ROUTE,
  HOME_ROUTE,
  NEW_POST,
  POST_ROUTE,
} from "../../utils/router-constants";
import AddNewPost from "../Form/AddNewPost";

import UserPosts from "../Posts/UserPosts";
import Home from "./../../Pages/Home";

export const routes = [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: NEW_POST,
    element: <AddNewPost />,
  },
  {
    path: POST_ROUTE + ":userId",
    element: <UserPosts />,
  },
  {
    path: POST_ROUTE + ":userId/:postId",
    element: <Post />,
  },
  {
    path: ERROR_ROUTE,
    element: <ErrorPage />,
  },
];
