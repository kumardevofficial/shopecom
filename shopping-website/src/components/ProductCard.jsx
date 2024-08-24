import axios from "axios";
import "../App.css";
const ProductCard = ({
  myId,
  productName,
  productDescription,
  productPrice,
  productImageLink,
  productDiscount,
  productQuantity,
  sellerName,
  removeItem,
}) => {
  const handleDelete = async (theid) => {
    const response = await axios.delete(`http://localhost:3000/${theid}`);
    console.log(response);
    removeItem(response._id);
  };
  return (
    <div className="cardView">
      <h2 className="fs-5" style={{ textAlign: "center" }}>
        {productName}
      </h2>
      {/* <div style={{ boxSizing: "border-box" }}>{productImageLink}</div> */}
      <p>{productDescription}</p>
      <h3>{productPrice}</h3>
      <span>{productDiscount}</span>
      <p>Sold by {sellerName}</p>
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleDelete(myId)}
        >
          Add
        </button>
        <button type="button" className="btn btn-danger">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
