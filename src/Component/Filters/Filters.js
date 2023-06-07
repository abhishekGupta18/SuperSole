import { useShoesContext } from "../../Context/DataContext";
import { useFilterContext } from "../../Context/FiltersContext";

import "./Filters.css";

import CancelIcon from "@mui/icons-material/Cancel";

export const Filters = () => {
  const { showFilters, showFiltersHandler } = useShoesContext();
  const { filterDispatch, filterState } = useFilterContext();

  return (
    <div className={showFilters ? `filters ` : `mobile_filters filters `}>
      <div className="options">
        <h3>Filters</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            className="clear_btn"
            onClick={() => filterDispatch({ type: "clear_filters" })}
          >
            CLEAR
          </button>
          <button className="cancel_btn" onClick={() => showFiltersHandler()}>
            <CancelIcon />
          </button>
        </div>
      </div>
      <hr />
      <div className="price_filter">
        <h3>Price</h3>

        <input
          type="range"
          min="0"
          max="7999"
          onClick={(e) =>
            filterDispatch({ type: "filter_by_price", payload: e.target.value })
          }
        />
        <div className="low_to_high">
          <p>₹ 0</p>
          <p>₹ 7999</p>
        </div>
      </div>
      <hr />
      <div className="category_filter">
        <h3>Categories</h3>
        <label>
          <input
            type="checkbox"
            checked={filterState?.category?.includes("Men")}
            onClick={() =>
              filterDispatch({ type: "filter_by_category", payload: "Men" })
            }
          />
          Men
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterState?.category?.includes("Women")}
            onClick={() =>
              filterDispatch({ type: "filter_by_category", payload: "Women" })
            }
          />
          Women
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterState?.category?.includes("Kids")}
            onClick={() =>
              filterDispatch({ type: "filter_by_category", payload: "Kids" })
            }
          />
          Kids
        </label>
      </div>
      <hr />
      <div className="brand_filter">
        <h3>Brands</h3>
        <label>
          <input
            type="checkbox"
            checked={filterState?.brands?.includes("NIKE")}
            onClick={() =>
              filterDispatch({ type: "filter_by_brand", payload: "NIKE" })
            }
          />
          Nike
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterState?.brands?.includes("ADIDAS")}
            onClick={() =>
              filterDispatch({ type: "filter_by_brand", payload: "ADIDAS" })
            }
          />
          Adidas
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterState?.brands?.includes("BATA")}
            onClick={() =>
              filterDispatch({ type: "filter_by_brand", payload: "BATA" })
            }
          />
          Bata
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterState?.brands?.includes("PUMA")}
            onClick={() =>
              filterDispatch({ type: "filter_by_brand", payload: "PUMA" })
            }
          />
          Puma
        </label>
      </div>
      <hr />
      <div className="rating_filter">
        <h3>Rating</h3>
        <input
          type="range"
          min="0"
          max="5"
          step="1"
          list="steplist"
          onClick={(e) =>
            filterDispatch({
              type: "filter_by_rating",
              payload: e.target.value,
            })
          }
        />
        <datalist id="steplist">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </datalist>
      </div>
      <hr />
      <div className="filter_price">
        <h3>Sort By price</h3>
        <label>
          <input
            type="radio"
            name="sortByPrice"
            checked={filterState?.sort?.includes("lowToHigh")}
            onClick={() =>
              filterDispatch({ type: "sort_by_price", payload: "lowToHigh" })
            }
          />
          Low To High
        </label>
        <label>
          <input
            type="radio"
            name="sortByPrice"
            checked={filterState?.sort?.includes("highToLow")}
            onClick={() =>
              filterDispatch({ type: "sort_by_price", payload: "highToLow" })
            }
          />{" "}
          High To Low
        </label>
      </div>
    </div>
  );
};
