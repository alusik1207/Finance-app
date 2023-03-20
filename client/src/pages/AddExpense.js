import React, { useCallback } from "react";
import "./AddExpense.scss";

function AddExpense({ children, open, onClose, title }) {
  const handleClose = useCallback((e) => {
    if (e.target.classList.contains("modal_wraper")) {
      onClose();
    }
  });
  if (!open) {
    return null;
  }
  return (
    <div className="modal_wraper" onClick={handleClose}>
      <div className="modal_frame">
        <div className="modal_heading">
          <h4 className="modal_title">{title}</h4>
          <div className="modal_closer" onClick={onClose}>X</div>
        </div>
        <div className="modal_body">{children}</div>
        
      </div>
    </div>
  );
}

export default AddExpense;
