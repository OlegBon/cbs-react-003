import Article from "./Article";

const Articles = ({ data }) => {
    return (
        <>
            {data.map((item, idx) => (
                <Article key={idx} item={item} />
            ))}
        </>
    );
};

export default Articles;