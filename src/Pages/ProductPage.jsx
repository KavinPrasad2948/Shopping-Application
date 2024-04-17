import { useContext, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { ToastContainer,toast } from "react-toastify";
import'react-toastify/dist/ReactToastify.css';

const Navbar = lazy(() => import("./Navbar"));

export default function ProductPage() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const productList = products.products || [];
  const { addItemToCart, removeItemFromCart, cartItems } = useCart();


  const product = productList.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Loading...</div>; 
  }

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addItemToCart(product);
      toast(" 🛒 Product successfully added to your cart! 🎉")
    } else {
      removeItemFromCart(product.id);
      toast("🗑️ Product removed from your cart. 😔")
    }
  };

  return (
    <div>
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar />
      </Suspense>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.images[0]}
              className="img-fluid"
              alt={product.title}
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">{product.title}</h2>
            <h3 className="text-danger">Brand: {product.brand}</h3>
            <h4 className="mb-4">Price: ${product.price}</h4>
            <p>{product.description}</p>
            <p>Rating: {product.rating}</p>
            <div>
            <button className="btn btn-outline-dark" onClick={handleAddToCart}>
              {isInCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
            <ToastContainer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
