import React from 'react';

const Tabla = ({ cabecera, datos, className }) => {
    return (
        <table className={`table ${className}`}>
            <thead>
                <tr>
                    {cabecera.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {datos.map((fila, index) => (
                    <tr key={index}>
                        {fila.map((celda, i) => (
                            <td key={i}>{celda}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Tabla;
