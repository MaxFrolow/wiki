import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <div className="item-main">
      <h2 className="item-title">{props.title}</h2>
      <p className="item-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit orem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <button className="btn item-button" onClick={modalHandler}>
        Delete
      </button>
      {modalIsOpen ? <Modal  onCancel={modalHandler} onConfirm={modalHandler}/> : null }
      {modalIsOpen ? <Backdrop onClick={modalHandler} /> : null }
    </div>
  );
}

export default Todo;
