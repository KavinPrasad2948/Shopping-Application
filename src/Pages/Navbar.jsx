// Navbar.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { CartTotal } = useCart();
  
  return (
    <nav className="navbar navbar-expand-lg container-fluid py-4">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand text-dark" to="/">
          Shopping
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
          </ul>
          <form className="d-flex cart1">
            <Link to="/cart" className="btn btn-outline-dark d-flex cart">
              <span className="cart-Name">
                Cart
               </span>
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {CartTotal}
              </span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
