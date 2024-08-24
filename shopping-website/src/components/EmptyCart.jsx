import { Link } from "react-router-dom";
import "../App.css";
const EmptyCart = () => {
  return (
    <div className="Itemcreate w-25 h-25 m-auto mt-5 mb-5">
      <h4>Cart is empty</h4>
      <Link to="/" class="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default EmptyCart;
