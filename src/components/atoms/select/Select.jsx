import React from "react";

const Select = ({ label, options, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
