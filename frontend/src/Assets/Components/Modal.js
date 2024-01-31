import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { onClose, children } = this.props;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
