import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ChangePassword() {
    // đăng xuất
    function HandleOut() {
        sessionStorage.removeItem("User");
        window.location.href = "/Login"
    }
    // Tự động chuyển về trang login nếu như chưa đăng nhập
    if (!sessionStorage.getItem("User")) {
        window.location.href = "/Login";
    }
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
                                    <Link to="/Account" className="mt-4 d-block" style={{ cursor: 'pointer' }}>Thông tin tài khoản</Link>
                                    <Link to="/Account/Order" className="mt-4 d-block" style={{ cursor: 'pointer' }}>Đơn hàng của bạn</Link>
                                    <Link to="/Account/ChangePassWord" className="text-danger mt-4 d-block" style={{ cursor: 'pointer' }}>Đổi mật khẩu</Link>
                                    <li className="mt-4" style={{ cursor: 'pointer' }}>Sổ địa chỉ (2)</li>
                                    <li onClick={() => HandleOut()} className="mt-4" style={{ cursor: 'pointer' }}>Đăng xuất</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="bg-white p-3">
                                <h3>ĐỔI MẬT KHẨU</h3>
                                <p className="mt-4">Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít nhất 8 kí tự</p>
                                <Form>
                                    <Form.Group className="mt-4">
                                        <Form.Label>Mật khẩu cũ *</Form.Label>
                                        <Form.Control className="fs-5 px-3 py-2" placeholder="Mật khẩu cũ"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mt-4">
                                        <Form.Label>Mật khẩu mới *</Form.Label>
                                        <Form.Control className="fs-5 px-3 py-2" placeholder="Mật khẩu mới"></Form.Control>
                                    </Form.Group>
                                    <Form.Group className="mt-4">
                                        <Form.Label>Xác nhận lại mật khẩu *</Form.Label>
                                        <Form.Control className="fs-5 px-3 py-2" placeholder="Xác nhận lại mật khẩu"></Form.Control>
                                    </Form.Group>

                                    <Button className="mt-5 bg-danger border-0 py-2 px-4 fs-4">Đặt lại mật khẩu</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
