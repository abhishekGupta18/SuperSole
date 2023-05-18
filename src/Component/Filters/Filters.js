import { useShoesContext } from "../../Context/DataContext";
import "./Filters.css";

import CancelIcon from "@mui/icons-material/Cancel";

export const Filters = () => {
  const { showFilters, showFiltersHandler } = useShoesContext();
  return (
    <div className={showFilters ? `filters ` : `mobile_filters filters `}>
      <div className="options">
        <h3>Filters</h3>
        <button className="clear_btn">Clear</button>
        <button className="cancel_btn" onClick={() => showFiltersHandler()}>
          <CancelIcon />
        </button>
      </div>
      <div className="price_filter">
        <h3>Price</h3>
        <input type="range" />
      </div>
      <div className="category_filter">
        <h3>Categories</h3>
        <label htmlFor="">
          <input type="checkbox" />
          Men
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Women
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Kids
        </label>
      </div>
      <div className="brand_filter">
        <h3>Brands</h3>
        <label>
          <input type="checkbox" />
          Nike
        </label>
        <label>
          <input type="checkbox" />
          Adidas
        </label>
        <label>
          <input type="checkbox" />
          Bata
        </label>
        <label>
          <input type="checkbox" />
          Puma
        </label>
      </div>
      <div className="rating_filter">
        <h3>Rating</h3>
        <label>
          <input type="radio" name="ratingFilter" />4 stars & above
        </label>
        <label>
          <input type="radio" name="ratingFilter" />3 stars & above
        </label>
        <label>
          <input type="radio" name="ratingFilter" />2 stars & above
        </label>
        <label>
          <input type="radio" name="ratingFilter" />1 stars & above
        </label>
      </div>
      <div className="filter_price">
        <h3>Sort By price</h3>
        <label>
          <input type="radio" name="sortByPrice" />
          Low To High
        </label>
        <label>
          <input type="radio" name="sortByPrice" /> High To Low
        </label>
      </div>
    </div>
  );
};
