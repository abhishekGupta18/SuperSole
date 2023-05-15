import "./Filters.css";

export const Filters = () => {
  return (
    <div className="filters">
      <div className="options">
        <h3>Filters</h3>
        <button className="clear_btn">Clear</button>
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
          kids
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
          <input type="radio" name="ratingFilter" />4 stars and above
        </label>
        <label>
          <input type="radio" name="ratingFilter" />3 stars and above
        </label>
        <label>
          <input type="radio" name="ratingFilter" />2 stars and above
        </label>
        <label>
          <input type="radio" name="ratingFilter" />1 stars and above
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
