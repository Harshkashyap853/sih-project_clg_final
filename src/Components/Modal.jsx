import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg relative max-w-4xl w-full"
        onClick={e => e.stopPropagation()}
      >
        {content}
        <button
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
