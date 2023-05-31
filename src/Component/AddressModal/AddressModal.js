import "./AddressModal.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

import { useAddressContext } from "../../Context/AddressContext";
import { useState } from "react";

export const AddressModal = () => {
  const navigate = useNavigate();
  const { addAddress } = useAddressContext();
  const [addressInitialState, setAddressInitialState] = useState({
    name: "",
    street: "",
    city: "",
    zipcode: "",
    state: "",
    country: "",
    mobile: "",
  });

  const addressHandler = (event) => {
    event.preventDefault();
    console.log(addressInitialState);
    addAddress({ ...addressInitialState, _id: uuid() });
  };
  return (
    <div className="add_address_form">
      <h2 className="add_address_heading">Add New Address</h2>
      <form onSubmit={addressHandler} className="add_address_form_details">
        <input
          required
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              name: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="Street"
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              street: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="City"
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              city: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="Zipcode"
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              zipcode: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="State"
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              state: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="Country"
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              country: e.target.value,
            })
          }
        />
        <input
          required
          type="text"
          placeholder="Mobile Number"
          onChange={(e) =>
            setAddressInitialState({
              ...addressInitialState,
              mobile: e.target.value,
            })
          }
        />
        <div className="cancel_add_btn">
          <button type="submit" className="address_add_btn">
            Add
          </button>
          <button
            className="address_dlt_btn"
            onClick={() => navigate("/userAddress")}
          >
            Cancel
          </button>
        </div>
        <div className="dummyInputs_reset_btn">
          <button className="dummyInputs_btn">Dummy Inputs</button>
          <button className="reset_btn">Reset</button>
        </div>
      </form>
    </div>
  );
};
