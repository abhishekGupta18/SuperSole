import "./LandingPage.css";

import { useNavigate } from "react-router-dom";

import { useFilterContext } from "../../Context/FiltersContext";

import shoesPoster from "../../Asset/poster1.png";
import shoesPoster2 from "../../Asset/poster3.png";
import adidas from "../../Asset/Adidas.png";
import bata from "../../Asset/Bata.png";
import nike from "../../Asset/Nike.png";
import puma from "../../Asset/Puma.png";
import reebok from "../../Asset/Reebok.png";
import fila from "../../Asset/fila.webp";
import skethers from "../../Asset/skethers.jpeg";
import levis from "../../Asset/levis.png";

import maleShoes from "../../Asset/male-shoes.jpg";
import femaleShoes from "../../Asset/female-shoes.jpg";
import kidShoes from "../../Asset/kids-shoes.jpg";

export const LandingPage = () => {
  const { filterDispatch, filterState } = useFilterContext();
  const navigate = useNavigate();

  return (
    <div className="landing_page">
      <div className="not_nav">
        <div>
          <img className="poster" src={shoesPoster2} alt="poster" />
        </div>
        <h3 className="brandd_heading">Brands</h3>
        <div className="brands">
          <img src={adidas} alt="adidas" className="brand_img" />
          <img src={bata} alt="bata" className="brand_img" />
          <img src={nike} alt="nike" className="brand_img" />
          <img src={puma} alt="puma" className="brand_img" />
          <img src={reebok} alt="reebok" className="brand_img" />
          <img src={fila} alt="fila" className="brand_img" />
          <img src={skethers} alt="skethers" className="brand_img" />
          <img src={levis} alt="levis" className="brand_img" />
        </div>
        <h3 className="category_heading">Shop By Category</h3>
        <div className="shop_by_category">
          <div className="male_shoes">
            <img className="category_img" src={maleShoes} alt="" />
            <button
              className="category_btn"
              onClick={() => {
                filterDispatch({ type: "filter_by_category", payload: "Men" });
                navigate("/products");
              }}
            >
              Shop For Men
            </button>
          </div>
          <div className="female_shoes">
            <img className="category_img" src={femaleShoes} alt="" />
            <button
              className="category_btn"
              onClick={() => {
                filterDispatch({
                  type: "filter_by_category",
                  payload: "Women",
                });
                navigate("/products");
              }}
            >
              Shop For Female
            </button>
          </div>
          <div className="kid_shoes">
            <img className="category_img" src={kidShoes} alt="" />
            <button
              className="category_btn"
              onClick={() => {
                filterDispatch({ type: "filter_by_category", payload: "Kids" });
                navigate("/products");
              }}
            >
              Shop For Kid
            </button>
          </div>
        </div>
        <img src={shoesPoster} alt="" />
        <hr />
      </div>
    </div>
  );
};
