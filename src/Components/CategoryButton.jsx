import { NavLink } from "react-router-dom";

const CategoryButton = ({ newsCategory }) => {
  return (
    <div id="category" className="join flex join-vertical">
      <NavLink to={`/category/${newsCategory.category_id}`} className="btn join-item  bg-white text-gray-600 text-base border-none">
        {newsCategory.category_name}
      </NavLink>
    </div>
  );
};

export default CategoryButton;
