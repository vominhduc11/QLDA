import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";

export default function Order() {
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
                                <p><span className="fw-semibold">Xin chào</span>,<span className="fw-semibold text-danger">Võ Minh Đức !</span></p>
                                <ul className="list-unstyled mt-5">
                                    <li className="text-danger mt-4">Thông tin tài khoản</li>
                                    <li className="mt-4">Đơn hàng của bạn</li>
                                    <li className="mt-4">Đổi mật khẩu</li>
                                    <li className="mt-4">Sổ địa chỉ (2)</li>
                                    <li className="mt-4">Đăng xuất</li>
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
