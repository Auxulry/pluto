import React from 'react';

const Modal = ({
 isOpen,
 onClose,
 children,
 width,
}) => {
  if (!isOpen) return null; // Render nothing if the modal is closed

  const classes = width
    ? `bg-white p-6 rounded-lg shadow-lg w-96 relative ${width}`
    : 'bg-white p-6 rounded-lg shadow-lg w-96 relative'

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50'>
      <div className={classes}>
        {children}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default Modal;
