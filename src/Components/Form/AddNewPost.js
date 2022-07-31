import React from "react";
import Modal from "../UI/Modal";
import PostForm from "./PostForm";
import { useSelector } from "react-redux";

const AddNewPost = () => {
  const isShowModal = useSelector((state) => state.ui.showModal);
  return (
    <>
      {isShowModal && (
        <Modal>
          <PostForm />
        </Modal>
      )}
    </>
  );
};

export default AddNewPost;
