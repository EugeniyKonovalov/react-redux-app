import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/uiSlice";
import { useNavigate } from "react-router-dom";

const Backdrop = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onCloseModalHandler = () => {
    dispatch(uiAction.onToggleModal());
    navigate(-1);
  };
  return <div className={classes.backdrop} onClick={onCloseModalHandler} />;
};

const ModalOverlay = (props) => {
  return <div className={classes["modal-overlay"]}>{props.children}</div>;
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
