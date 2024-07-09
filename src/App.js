
import Header from "./Home/Header/Header";
import Menu from "./Home/Menu/Menu";
import Main from "./Home/Main/Main";
import Footer from "./Home/Footer/Footer";
import "./globleStyle.css"
import { Route, Routes, useLocation } from "react-router-dom";
import Product from "./Product/Product";
import Introduce from "./introduce/Introduce";
import QuestionCommon from "./QuestionCommon/QuestionCommon";
import Hiring from "./Hiring/Hiring";
import Interact from "./interact/Interact";
import Category from "./Category/Category";
import Cart from "./Cart/Cart";
import Favorite from "./Favorite/Favorite";
import Compare from "./Compare/Compare";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Customer_page from "./Customer_page/Customer_page";
import Order from "./Order/Order";
import ChangePassword from "./ChangePassword/ChangePassword";
import { memo, useEffect, useState } from "react";
import LoadPage from "./LoadPage/LoadPage";
import axios from "axios";


function App() {

  const locationCategory = decodeURIComponent(useLocation().pathname).slice(10);
  const locationProduct = decodeURIComponent(useLocation().pathname).slice(9);


  return (
    <div id="App">
      {/* Phần đầu trang*/}
      <Header />
      {/* Phần thanh điều hướng */}
      <Menu />
      {/* Phần thân trang*/}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={`/product/${locationProduct}`} element={<Product />} />
        <Route path="/Introduce" element={<Introduce />} />
        <Route path="/QuestionCommon" element={<QuestionCommon />} />
        <Route path="/Hiring" element={<Hiring />} />
        <Route path="/Interact" element={<Interact />} />
        <Route path={`/Category/${locationCategory}`} element={<Category />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Compare" element={<Compare />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Account" element={<Customer_page />} />
        <Route path="/Account/Order" element={<Order />} />
        <Route path="/Account/ChangePassWord" element={<ChangePassword />} />
      </Routes>
      {/* Phần chân trang */}
      <Footer />
    </div>
  );
}

export default memo(App);
