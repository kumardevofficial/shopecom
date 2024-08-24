import axios from "axios";
import { useRef } from "react";

const CreateProduct = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await axios.post("http://localhost:3000/post-me", data);
      console.log(response);
    } catch (err) {
      console.log("There is some error in data sending", err);
    }
  };

  return (
    <div
      className="w-50"
      style={{ margin: "auto", marginTop: "1rem", marginBottom: "1rem" }}
    >
      <form className="formlist" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter Product Name"
            name="productName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <input
            type="text"
            className="form-control"
            id="productDescription"
            placeholder="Enter 100 word Product Description"
            name="productDescription"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Enter Product Price"
            name="productPrice"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImageLink">Product Image Link</label>
          <input
            type="text"
            className="form-control"
            id="productImageLink"
            placeholder="Enter product image link"
            name="productImageLink"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDiscount">Product Discount</label>
          <input
            type="number"
            className="form-control"
            id="productDiscount"
            placeholder="Enter product Discount in percentage"
            name="productDiscount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productQuantity">Product Quantity</label>
          <input
            type="number"
            className="form-control"
            id="productQuantity"
            placeholder="Enter product quantity"
            name="productQuantity"
          />
        </div>
        <div className="form-group">
          <label htmlFor="sellerName">Seller Name</label>
          <input
            type="text"
            className="form-control"
            id="sellerName"
            placeholder="Enter Seller Name"
            name="sellerName"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
