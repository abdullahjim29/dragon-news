import { useLoaderData } from "react-router-dom";

const News = () => {
    const newsData = useLoaderData();
    const news = newsData.data;
    console.log(news);
    return (
        <div>
           {
            <p>Found for this categro {news.length} News</p>
           }
        </div>
    );
};

export default News;