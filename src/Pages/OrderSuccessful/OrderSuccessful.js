import "./OrderSuccessful.css";
import ShoesChangingGif from "../../Asset/shoesChanging Gif.gif";
export const OrderSuccessful = () => {
  return (
    <div className="order_placed">
      <p>Order Placed Successfully!🤩</p>
      <img src={ShoesChangingGif} alt="" />
    </div>
  );
};
