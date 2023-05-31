import "./AddressModal.css";

export const AddressModal = () => {
  return (
    <div className="add_address_form">
      <h2 className="add_address_heading">Add New Address</h2>
      <form className="add_address_form_details">
        <input required type="text" placeholder="Name" />
        <input required type="text" placeholder="Street" />
        <input required type="text" placeholder="City" />
        <input required type="text" placeholder="Zipcode" />
        <input required type="text" placeholder="State" />
        <input required type="text" placeholder="Country" />
        <input required type="text" placeholder="Mobile Number" />
        <div className="cancel_add_btn">
          <button className="address_add_btn">Add</button>
          <button className="address_dlt_btn">Cancel</button>
        </div>
        <div className="dummyInputs_reset_btn">
          <button className="dummyInputs_btn">Dummy Inputs</button>
          <button className="reset_btn">Reset</button>
        </div>
      </form>
    </div>
  );
};
