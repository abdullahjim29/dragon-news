import { NavLink } from "react-router-dom";

const CategoryButton = ({ newsCategory }) => {
  console.log(newsCategory);
  return (
    <div id="category" className="join flex join-vertical">
      <NavLink to={`category/${newsCategory.category_id}`} className="btn join-item border-none bg-white text-gray-600 text-base">
        {newsCategory.category_name}
      </NavLink>
    </div>
  );
};

export default CategoryButton;
