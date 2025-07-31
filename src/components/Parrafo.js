import React from "react";

const Parrafo = ({ texto, className = "" }) => {
    return <p className={className}>{texto}</p>;
};

export default Parrafo;
