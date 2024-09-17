import React from 'react';

const TextField = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        {...rest}
      />
    </div>
  );
};

export default TextField;
