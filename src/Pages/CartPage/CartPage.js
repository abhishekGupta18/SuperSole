import "./CartPage.css";
import { CardCart } from "../../Component/CartCart/CardCart";

import { useCartContext } from "../../Context/CartContext";
export const CartPage = () => {
  const { cartState } = useCartContext();
  console.log(cartState);
  return (
    <div className="cart_page">
      <ul className="cart_items_list">
        {cartState?.map((item) => (
          <li>
            <CardCart {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
