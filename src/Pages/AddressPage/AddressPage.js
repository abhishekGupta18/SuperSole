import "./AddressPage.css";

export const AddressPage = () => {
  const dataAddress = {
    name: "Adarsh Balika",
    street: "6, Vijay Nagar",
    city: "Indore",
    state: "Madhya Pradesh",
    zipcode: "452061",
    country: "India",
    mobile: "9936702189",
  };
  return (
    <div className="address_page">
      <h2 className="address_page_heading">User Address</h2>
      <div className="address_details">
        <button className="add_address_btn">+ Add Address </button>
        <h3>{dataAddress.name}</h3>
        <p>{dataAddress.street}</p>
        <p>
          {dataAddress.city} - {dataAddress.zipcode}
        </p>
        <p>
          {dataAddress.state} - {dataAddress.country}
        </p>
        <p>{dataAddress.mobile}</p>
        <div className="address_btn">
          <button className="edit_address_btn">Edit</button>
          <button className="dlt_address_btn">Delete</button>
        </div>
      </div>
    </div>
  );
};
