import React, { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);

  function handleModalBtnClick() {
    setShowModal(!showModal);
  }

  function onClose() {
    setShowModal(false);
  }
  return (
    <div className="container">
      <button className="btn btn-open--modal" onClick={handleModalBtnClick}>
        Open Modal
      </button>

      {showModal && <Modal onClose={onClose} />}
    </div>
  );
};

export default ParentComponent;
