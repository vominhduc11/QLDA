
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
import Login from "./Login/Login";
import Register from "./Register/Register";
import Customer_page from "./Customer_page/Customer_page";
import Order from "./Order/Order";
import ChangePassword from "./ChangePassword/ChangePassword";
import { memo } from "react";
import All_Product from "./All_Product/All_Product";
import Outstanding_products from "./Outstanding_products/Outstanding_products";
import Discharge from "./Discharge/Discharge";
import Accessory from "./Accessory/Accessory";
import Suggest from "./Suggest/Suggest";
import FlaseSale from "./FlashSale/FlaseSale";
import Pay from "./Pay/Pay";
import MainPage from "./App/MainPage";
import CheckOut from "./CheckOut/CheckOut";


function App() {
    const locationCategory = decodeURIComponent(useLocation().pathname).slice(10);
    const locationProduct = decodeURIComponent(useLocation().pathname).slice(9);

    // thiết lập giá trị mảng rỗng khi không tồn tại
    if (!sessionStorage.getItem("Like") || !sessionStorage.getItem("User")) {
        sessionStorage.setItem("Like", JSON.stringify([]));
    }

    if (!sessionStorage.getItem("cart") || !sessionStorage.getItem("User")) {
        sessionStorage.setItem("cart", JSON.stringify([]));
    }

    return (
        <div id="App">
            <Routes>
                <Route path="/" element={<MainPage />} >
                    <Route path="/" element={<Main />} />
                    <Route path="/All_Product" element={<All_Product />} />
                    <Route path={`/product/${locationProduct}`} element={<Product />} />
                    <Route path="/Introduce" element={<Introduce />} />
                    <Route path="/QuestionCommon" element={<QuestionCommon />} />
                    <Route path="/Hiring" element={<Hiring />} />
                    <Route path="/Interact" element={<Interact />} />
                    <Route path={`/category/${locationCategory}`} element={<Category />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/Favorite" element={<Favorite />} />
                    <Route path="/Account" element={<Customer_page />} />
                    <Route path="/Account/Order" element={<Order />} />
                    <Route path="/Account/ChangePassWord" element={<ChangePassword />} />
                    <Route path="/Outstanding_products" element={<Outstanding_products />} />
                    <Route path="/Discharge" element={<Discharge />} />
                    <Route path="/Accessory" element={<Accessory />} />
                    <Route path="/Suggest" element={<Suggest />} />
                    <Route path="/FlashSale" element={<FlaseSale />} />
                </Route>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Pay" element={<Pay />} />
                <Route path="/CheckOut" element={<CheckOut />} />
            </Routes>
        </div>
    );
}

export default memo(App);
