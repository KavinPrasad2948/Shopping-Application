import { useContext, lazy } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
const Navbar = lazy(() => import("./Navbar"));

export default function ProductCard() {
  const { products } = useContext(ProductContext);
  const productList = products.products || [];

 

  return (
    <div>
      <Navbar />
    <div className="cart-container">
      <div className="row d-flex justify-content-center ">
        {productList.map((product) => (
          <div key={product.id} className="col-md-4  mb-4">
            <Link
              to={`/product/${product.id}`}
              className="text-decoration-none"
            >
              <div className="card">
                <div className="card-header">
                <img
                  src={product.images[0]}
                  className="card-img-top img-fluid"
                  alt={product.title}
                  style={{ display: "block" }}
                />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-danger">{product.title}</h5>
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
    </div>
  );
}
