import React from 'react';

const Input = ({
  id,
  label,
  placeholder,
  onChange,
  value,
  type = 'text',
  autocomplete = 'off',
  disabled,
  ...props
}) => {
  return (
    <div {...props}>
      <input
        id={id}
        value={value}
        className="mr-5 px-4 py-2 h-9 w-full border text-gray-900 rounded-md placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-2"
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
        aria-label={label}
        autoComplete={autocomplete}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
