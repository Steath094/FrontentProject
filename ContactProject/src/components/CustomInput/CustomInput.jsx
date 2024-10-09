import React from 'react';

const CustomInput = ({ label, type, value, placeholder, onChange, readOnly }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-semibold text-gray-600">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        className="border-b border-gray-400 focus:outline-none focus:border-black transition duration-300"
      />
    </div>
  );
};

export default CustomInput;
