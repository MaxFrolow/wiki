function Modal(props) {
    function confirmHandler(){
        props.onConfirm();
    }
    function cancelHandler(){
        props.onCancel();
    }

  return (
    <div className="modal-main">
      <div className="modal-text">
        <h2>Are you sure?</h2>
      </div>
      <div className="modal-btn-panel">
        <button className="btn modal-btn btn-cancel" onClick={cancelHandler}>Cancel</button>
        <button className="btn modal-btn btn-confirm" onClick={confirmHandler}>Confirm</button>
      </div>
    </div>
  );
}

export default Modal;
