import "./AddressModal.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

import { useAddressContext } from "../../Context/AddressContext";
import { useState } from "react";
import { toast } from "react-toastify";
const dummyAddress = {
  name: "Sourav Gupta",
  street: "7, C.L Road",
  city: "Rewa",
  zipcode: "486001",
  state: "M.P",
  country: "India",
  mobile: "9956324789",
};

export const AddressModal = () => {
  const navigate = useNavigate();
  const {
    addAddress,
    addressInitialState,
    setAddressInitialState,
    resetAddress,
    editAddresss,
    addressState,
  } = useAddressContext();

  const addressHandler = (event) => {
    event.preventDefault();

    const findAddress = addressState?.find(
      (address) => address._id === addressInitialState._id
    );

    if (findAddress) {
      editAddresss(addressInitialState, findAddress._id);
      toast.success("Edit address successfully!");
    } else {
      addAddress({ ...addressInitialState, _id: uuid() });
    }
  };
  console.log(addressInitialState);
  return (
    <div className="add_address_form">
      <h2 className="add_address_heading">Add New Address</h2>
      <form onSubmit={addressHandler} className="add_address_form_details">
        <input
          required
          type="text"
          placeholder="Name"
          value={addressInitialState.name}
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
          value={addressInitialState.street}
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
          value={addressInitialState.city}
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
          value={addressInitialState.zipcode}
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
          value={addressInitialState.state}
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
          value={addressInitialState.country}
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
          value={addressInitialState.mobile}
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
          <button
            type="button"
            className="dummyInputs_btn"
            onClick={() => setAddressInitialState(dummyAddress)}
          >
            Dummy Inputs
          </button>
          <button
            type="button"
            className="reset_btn"
            onClick={() => setAddressInitialState(resetAddress)}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
