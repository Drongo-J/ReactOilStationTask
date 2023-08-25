import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import OilSection from "./components/OilSectionComponent/OilSection";
import ProductSection from "./components/ProductSectionComponent/ProductSection";
import { OILS } from "./data/oils";
import { PRODUCTS } from "./data/products";
import Buy from "./components/BuyComponent/Buy";

function App() {
  const [oils, setOils] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [oilTotalPrice, setOilTotalPrice] = useState(0);
  const [productTotalPrice, setProductTotalPrice] = useState(0);

  useEffect(() => {
    setOils(OILS);
    setProducts(PRODUCTS);
  }, []);

  useEffect(() => {
    setTotalPrice(Number(productTotalPrice) + Number(oilTotalPrice));
  }, [productTotalPrice, oilTotalPrice]);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="sections-container">
          <OilSection
            oils={oils}
            oilTotalPrice={oilTotalPrice}
            setOilTotalPrice={setOilTotalPrice}
          />
          <ProductSection
            products={products}
            setProductTotalPrice={setProductTotalPrice}
          />
          <Buy totalPrice={totalPrice} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
