import { useShoesContext } from "../../Context/DataContext";
import { ShoesCard } from "../../Component/ShoesCard/ShoesCard";
import { useFilterContext } from "../../Context/FiltersContext";

import "./ProductsPage.css";

import { Filters } from "../../Component/Filters/Filters";

import TuneIcon from "@mui/icons-material/Tune";
import ShoesGif from "../../Asset/shoes gif.gif";

export const ProductsPage = () => {
  const { state, showFiltersHandler, isLoading } = useShoesContext();
  const { searchFilterData } = useFilterContext();
  return isLoading ? (
    <img src={ShoesGif} alt="gif" className="shoes_loader" />
  ) : (
    <div className="products_list">
      <div className="products_filters">
        {" "}
        <Filters />
      </div>

      <div className="products_Items">
        <div className="products_list_heading">
          <h3>Showing All Shoes</h3>
          <button className="tuneIcon_btn" onClick={() => showFiltersHandler()}>
            <TuneIcon />
          </button>
        </div>
        <ul>
          {searchFilterData?.map((item) => (
            <li>
              <ShoesCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
