import { Outlet } from "react-router-dom";
import Header from "../Home/Header/Header";
import Menu from "../Home/Menu/Menu";
import Footer from "../Home/Footer/Footer";

export default function MainPage() {
    return (
        <>
            {/* Phần đầu trang*/}
            <Header />
            {/* Phần thanh điều hướng */}
            <Menu />
            {/* Phần thân trang*/}
            <Outlet />
            {/* Phần chân trang */}
            <Footer />
        </>
    )
}
