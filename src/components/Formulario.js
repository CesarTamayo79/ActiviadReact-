import React from 'react';

const Formulario = ({ children, onSubmit, className = "" }) => {
    return (<form onSubmit={onSubmit} className={`p-3 border rounded ${className}`}>{children}</form>);
};

export default Formulario;
