import { useNavigate } from "react-router-dom";

import { useWishListContext } from "../../Context/WishListContext";
import { ShoesCard } from "../../Component/ShoesCard/ShoesCard";

import "./Wishlist.css";

import EmptyWishlist from "../../Asset/empty_wishlist.png";

export const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishListState } = useWishListContext();
  return (
    <div className="wishlList_page">
      <ul>
        {wishListState?.length === 0 ? (
          <div className="empty_wishlist">
            {" "}
            <img src={EmptyWishlist} alt="" /> <p>Your Wishlist Is Empty!</p>
            <button onClick={() => navigate("/products")}>
              Explore the store
            </button>
          </div>
        ) : (
          wishListState?.map((item) => (
            <li>
              <ShoesCard {...item} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
