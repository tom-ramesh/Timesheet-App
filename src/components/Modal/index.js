import React from "react";
import "./index.scss";

const Modal = ({ isOpen, toggleOpen, children, label }) => {
  const handleModalClose = () => toggleOpen(false);
  return (
    isOpen && (
      <>
        <div className="modal__back-drop" onClick={handleModalClose}></div>
        <div
          className="modal__container"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal__header">
            <label>{label}</label>
            <span onClick={handleModalClose}>X</span>
          </div>
          <div>{children}</div>
        </div>
      </>
    )
  );
};

export default Modal;
