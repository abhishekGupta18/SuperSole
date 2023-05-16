import { useShoesContext } from "../../Context/DataContext";
import { ShoesCard } from "../../Component/ShoesCard/ShoesCard";

import "./ProductsPage.css";

import { Filters } from "../../Component/Filters/Filters";
import { Navbar } from "../../Component/Navbar/Navbar";
export const ProductsPage = () => {
  const { shoesData } = useShoesContext();
  return (
    <div className="product_page">
      <Navbar />
      <div className="products_list">
        <Filters />
        <div className="produtsItems">
          <ul>
            {shoesData?.map((item) => (
              <li>
                <ShoesCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
