import React from 'react';
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineExclamationCircle, AiOutlineCloseCircle, AiOutlineClose } from 'react-icons/ai';

const alertStyles = {
  success: 'bg-green-100 border-green-400 text-green-700',
  info: 'bg-blue-100 border-blue-400 text-blue-700',
  warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
  error: 'bg-red-100 border-red-400 text-red-700',
};

const iconStyles = {
  success: <AiOutlineCheckCircle className="text-green-700" size={20} />,
  info: <AiOutlineInfoCircle className="text-blue-700" size={20} />,
  warning: <AiOutlineExclamationCircle className="text-yellow-700" size={20} />,
  error: <AiOutlineCloseCircle className="text-red-700" size={20} />,
};

const Alert = ({ type = 'success', title, message, onClose }) => {
  return (
    <div className={`border-l-4 p-4 flex items-center justify-between rounded-md ${alertStyles[type]}`}>
      <div className="flex items-center">
        {iconStyles[type]}
        <div className="ml-3">
          <p className="font-semibold">{title}</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <AiOutlineClose size={18} />
      </button>
    </div>
  );
};

export default Alert;
