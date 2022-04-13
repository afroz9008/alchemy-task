import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductForm from "./Pages/ProductForm";
import Products from "./Pages/Products";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:productPath" element={<ProductForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
