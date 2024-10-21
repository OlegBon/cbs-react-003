// Topics імпортуємо data

import data from '../data/data.json';

const Topics = () => {
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

export default Topics;