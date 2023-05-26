import { useWishListContext } from "../../Context/WishListContext";
import { ShoesCard } from "../../Component/ShoesCard/ShoesCard";

import "./Wishlist.css";

export const WishlistPage = () => {
  const { wishListState } = useWishListContext();
  return (
    <div className="wishlList_page">
      <ul>
        {wishListState?.map((item) => (
          <li>
            <ShoesCard {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
