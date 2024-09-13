import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Customer_page() {
    const [user, setUser] = useState({});

    // đăng xuất
    function HandleOut() {
        sessionStorage.removeItem("User");
        window.location.href = "/Login"
    }
    // Tự động chuyển về trang login nếu như chưa đăng nhập
    if (!sessionStorage.getItem("User")) {
        window.location.href = "/Login";
    }
    useEffect(() => {
        if (sessionStorage.getItem("User")) {
            axios.post("http://localhost:8080/api/FindUser", { Id: JSON.parse(sessionStorage.getItem("User")).Id })
                .then(res => setUser(res.data))
                .catch(err => console.log(err));
        }
    }, [])
    return (
        <div>
            <div className="bg-white py-3">
                <Container style={{ width: 1200 }} className="d-flex align-items-center">
                    <Link to="/"><AiOutlineHome size={22} color="#f72c0f" /></Link>
                    <span className="mx-3"><FaChevronRight color="#f72c0f" /></span>
                    <span style={{ color: '#f72c0f' }}>Trang khách hàng</span>
                </Container>
            </div>
            <div className="pt-5">
                <Container style={{ width: 1200 }}>
                    <Row>
                        <Col md={3}>
                            <div className="bg-white p-3">
                                <h3>TRANG TÀI KHOẢN</h3>
                                <p><span className="fw-semibold">Xin chào</span>,<span className="fw-semibold text-danger">{user.Name} !</span></p>
                                <ul className="list-unstyled mt-5">
                                    <Link to="/Account" className="text-danger mt-4 d-block" style={{ cursor: 'pointer' }}>Thông tin tài khoản</Link>
                                    <Link to="/Account/Order" className="mt-4 d-block" style={{ cursor: 'pointer' }}>Đơn hàng của bạn</Link>
                                    <Link to="/Account/ChangePassWord" className="mt-4 d-block" style={{ cursor: 'pointer' }}>Đổi mật khẩu</Link>
                                    <li className="mt-4" style={{ cursor: 'pointer' }}>Sổ địa chỉ (2)</li>
                                    <li onClick={() => HandleOut()} className="mt-4" style={{ cursor: 'pointer' }}>Đăng xuất</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="bg-white p-3">
                                <h3>THÔNG TIN TÀI KHOẢN</h3>
                                <ul className="list-unstyled mt-5">
                                    <li className="mt-4">
                                        <span className="fw-semibold">Họ tên:</span>
                                        <span>{user.Name}</span>
                                    </li>
                                    <li className="mt-4">
                                        <span className="fw-semibold">Email:</span>
                                        <span>{user.Email}</span>
                                    </li>
                                    <li className="mt-4">
                                        <span className="fw-semibold">Điện thoại:</span>
                                        <span>{user.Phone}</span>
                                    </li>
                                    {/* <li className="mt-4">
                                        <span className="fw-semibold">Công ty:</span>
                                        <span>HUTECH</span>
                                    </li>
                                    <li className="mt-4">
                                        <span className="fw-semibold">Địa chỉ:</span>
                                        <span>âu cơ, Thành phố Thủ Đức, TP Hồ Chí Minh, Vietnam</span>
                                    </li> */}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
