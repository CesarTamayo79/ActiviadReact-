import React from 'react';
const Enlace = ({ href, text, target = "_self", className = "" }) => {
    return (<a
        href={href} target={target} rel={target == "_blank" ? "noopener noreferrer" : undefined} className={`link-primary text-decoration-none ${className}`}>{text}</a>);
};
export default Enlace