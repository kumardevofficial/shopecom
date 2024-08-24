import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link text-white" to="/">
                Product List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/search-item">
                Serach Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/create-product">
                Create Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">
                My Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#">
                Login / Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
