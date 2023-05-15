import "./ProductsPage.css";

import { Filters } from "../../Component/Filters/Filters";
import { Navbar } from "../../Component/Navbar/Navbar";
export const ProductsPage = () => {
  return (
    <div className="product_page">
      <Navbar />
      <div className="products_list">
        <Filters />
        <h1>This is product Pages</h1>
      </div>
    </div>
  );
};
