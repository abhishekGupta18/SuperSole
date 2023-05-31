import { useNavigate } from "react-router-dom";
import "./AddressPage.css";

import { useAddressContext } from "../../Context/AddressContext";

export const AddressPage = () => {
  const { addressState, deleteAddress } = useAddressContext();

  const navigate = useNavigate();
  return (
    <div className="address_page">
      <h2 className="address_page_heading">User Address</h2>
      <div className="address_details">
        <button
          className="add_address_btn"
          onClick={() => navigate("/addNewAddress")}
        >
          + Add Address{" "}
        </button>

        <ul className="address_list">
          {addressState?.map((address) => (
            <li>
              <h3>{address.name}</h3>
              <p>{address.street}</p>
              <p>
                {address.city} - {address.zipcode}
              </p>
              <p>
                {address.state} - {address.country}
              </p>
              <p>{address.mobile}</p>
              <div className="address_btn">
                <button className="edit_address_btn">Edit</button>
                <button
                  className="dlt_address_btn"
                  onClick={() => deleteAddress(address._id)}
                >
                  Delete
                </button>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
