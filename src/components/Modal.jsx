import React from "react";

export const Modal = ({ onClose, isOpen, children }) => {
  return <>{isOpen && <div>Modal</div>};</>;
};
