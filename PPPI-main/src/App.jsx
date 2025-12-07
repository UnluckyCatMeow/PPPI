import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CategorySection from "./components/CategorySection";
import Register from "./pages/Register";
import { fetchProducts } from "./api/products";
import { fetchCategories } from "./api/categories";

import "./Menu.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchCategories(), fetchProducts()])
      .then(([cats, prods]) => {
        setCategories(cats);
        setProducts(prods);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              {categories.map((cat) => (
                <CategorySection
                  key={cat.id}
                  category={cat}
                  products={products.filter((p) => p.category_id === cat.category_id)}
                />
              ))}
            </>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


