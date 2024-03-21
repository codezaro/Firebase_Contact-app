// import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { AddUpdateContact } from "./AddUpdateContact";
export const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="h-screen grid w-screen backdrop-blur absolute top-0 z-40">
          <div className="min-h-[200px] m-auto min-w-[80%] relative z-50 bg-white p-3">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};
