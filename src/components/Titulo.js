import React from "react";

const Titulo = ({ nivel = 1, texto, className = "" }) => {
    const Tag = `h${nivel}`;
    return <Tag className={className}>{texto}</Tag>;
};

export default Titulo;
