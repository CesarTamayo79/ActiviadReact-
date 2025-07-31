const Lista = ({ elementos = [], className }) => (
    <ul className={className}>
        {elementos.map((el, index) => (
            <li key={index} className="list-group-item">{el}</li>
        ))}
    </ul>
);
export default Lista;
