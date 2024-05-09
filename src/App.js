import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SingleProductPage from "./Pages/SingleProductPage/SingleProductPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/our-products' element={<CategoryPage />} />
            <Route path='/category-product-page' element={<ProductPage />} />
            <Route path='/product-page' element={<SingleProductPage />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/contact-us' element={<ContactPage />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
