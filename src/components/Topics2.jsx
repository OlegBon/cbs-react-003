// Topics2 передаємо data

const Topics2 = ({ data }) => {
    return (
        <>
            {data.map((obj, idx) => (
                <li key={idx}>
                    <a href={obj.href}>{obj.title}</a>
                </li>
            ))}
        </>
    );
};

export default Topics2;