import { useShoesContext } from "../../Context/DataContext";
import "./Filters.css";

import CancelIcon from "@mui/icons-material/Cancel";

export const Filters = () => {
  const { showFilters, showFiltersHandler } = useShoesContext();
  return (
    <div className={showFilters ? `filters ` : `mobile_filters filters `}>
      <div className="options">
        <h3>Filters</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="clear_btn">CLEAR</button>
          <button className="cancel_btn" onClick={() => showFiltersHandler()}>
            <CancelIcon />
          </button>
        </div>
      </div>
      <hr />
      <div className="price_filter">
        <h3>Price</h3>
        <input type="range" />
      </div>
      <hr />
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
      <hr />
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
      <hr />
      <div className="rating_filter">
        <h3>Rating</h3>
        <input type="range" min="0" max="5" />
      </div>
      <hr />
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
