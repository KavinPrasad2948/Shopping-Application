import ProductCard from "./ProductCard";

export default function MainLayout({ children }) {
  return (
    <div>
      <ProductCard />

      {children}
    </div>
  );
}
