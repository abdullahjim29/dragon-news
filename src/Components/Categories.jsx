import { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton";

const Categories = () => {
  const [newsCategories, setNewsCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setNewsCategories(data.data.news_category));
  }, []);

  return (
    <div className="">
      <div className="mt-5">
        {newsCategories.map((newsCategory) => (
          <CategoryButton
            key={newsCategory.category_id}
            newsCategory={newsCategory}
          ></CategoryButton>
        ))}
      </div>
    </div>
  );
};

export default Categories;
