import axios from "axios";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Order() {
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
        axios.post("http://localhost:8080/api/Order", { Id: JSON.parse(sessionStorage.getItem("User")).Id })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <div className="bg-white py-3">
                <Container style={{ width: 1200 }} className="d-flex align-items-center">
                    <span><AiOutlineHome size={22} color="#f72c0f" /></span>
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
                                <p><span className="fw-semibold">Xin chào</span>,<span className="fw-semibold text-danger">{ } !</span></p>
                                <ul className="list-unstyled mt-5">
                                    <Link to="/Account" className="mt-4 d-block" style={{ cursor: 'pointer' }}>Thông tin tài khoản</Link>
                                    <Link to="/Account/Order" className="text-danger mt-4 d-block" style={{ cursor: 'pointer' }}>Đơn hàng của bạn</Link>
                                    <Link to="/Account/ChangePassWord" className="mt-4 d-block" style={{ cursor: 'pointer' }}>Đổi mật khẩu</Link>
                                    <li className="mt-4" style={{ cursor: 'pointer' }}>Sổ địa chỉ (2)</li>
                                    <li onClick={() => HandleOut()} className="mt-4" style={{ cursor: 'pointer' }}>Đăng xuất</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="bg-white p-3">
                                <h3>ĐƠN HÀNG CỦA BẠN</h3>
                                <table className="table table-borderless mt-4">
                                    <thead>
                                        <tr className="bg-danger">
                                            <th>Đơn hàng</th>
                                            <th>Ngày</th>
                                            <th>Địa chỉ</th>
                                            <th>Giá trị đơn hàng</th>
                                            <th>TT thanh toán</th>
                                            <th>Mua hàng tại</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1005</td>
                                            <td>19/05/2024</td>
                                            <td>âu cơ, Thành phố Thủ Đức, TP Hồ Chí Minh, Vietnam</td>
                                            <td>15.819.000<sup className="text-decoration-underline">đ</sup></td>
                                            <td>Chưa thanh toán</td>
                                            <td>Website</td>
                                        </tr>
                                        <tr>
                                            <td>#1005</td>
                                            <td>19/05/2024</td>
                                            <td>âu cơ, Thành phố Thủ Đức, TP Hồ Chí Minh, Vietnam</td>
                                            <td>15.819.000<sup className="text-decoration-underline">đ</sup></td>
                                            <td>Chưa thanh toán</td>
                                            <td>Website</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
