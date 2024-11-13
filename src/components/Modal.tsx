import React, { useState } from "react";
type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  title?: string;
};
const Modal = ({ children, isOpen, setIsOpen, title }: Props) => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-custom-gradient-2 text-white p-8 rounded-xl  shadow-3d max-w-md w-full transform transition-transform duration-300 ease-out scale-100">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl">
              &times;
            </button>
            {title && (
              <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
            )}
            <div>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
