import React from 'react';
const Boton = ({ texto, onClick, type = "button", className = "" }) => {
    return (<button onClick={onClick} className={`btn btn-primary ${className}`}>{texto}</button>);
};
export default Boton;