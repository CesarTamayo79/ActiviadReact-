import React from 'react';

const Input = ({ type, placeholder, value, onChange, name, className = "", required = false }) => {
    return (<input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} name={name} className={`form-control ${className}`} />);
};

export default Input;
