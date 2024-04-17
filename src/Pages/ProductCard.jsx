import { useContext, lazy } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ToastContainer,toast } from "react-toastify";
const Navbar = lazy(() => import("./Navbar"));

export default function ProductCard() {
  const { products } = useContext(ProductContext);
  const productList = products.products || [];
  
  const { addItemToCart, removeItemFromCart, cartItems } = useCart();

  const handleAddToCart = (productId) => {
    const product = productList.find((product) => product.id === productId);
    const isInCart = cartItems.some((item) => item.id === productId);
    if (!isInCart) {
      addItemToCart(product);
      toast(" 🛒 Product successfully added to your cart! 🎉");
    } else {
      removeItemFromCart(productId);
      toast("🗑️ Product removed from your cart. 😔");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="row d-flex justify-content-center container-fluid m-0 ">
        {productList.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Link
              to={`/product/${product.id}`}
              className="text-decoration-none"
            >
              <div className="card">
                <img
                  src={product.images[0]}
                  className="card-img-top img-fluid"
                  alt={product.title}
                  style={{ display: "block" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text" style={{ marginBottom: "1rem" }}>
                    {product.description}
                  </p>
                  <h6 className="card-text">Price: ${product.price}</h6>
                  
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
