import axios from "axios";
import { useContext, useRef } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronRight, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

export default function Login() {
    //các useRef trong form
    const warningTag = useRef();
    const inputEmailTag = useRef();
    const inputPasswordTag = useRef();
    // Tự động trở về trang chủ nếu như đã đăng nhập rồi
    if (sessionStorage.getItem("User")) {
        window.location.href = "/"
    }
    // Thực hiện sự kiện khi bấm đăng nhập
    function handleLogin(e) {
        e.preventDefault();
        if (inputEmailTag.current.value === '' || inputPasswordTag.current.value === '') {
            warningTag.current.innerText = "Vui lòng điền đầy đủ thông tin";
        } else {
            if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(inputEmailTag.current.value)) {
                warningTag.current.innerText = "Email không hợp lệ";
                return;
            } else {
                warningTag.current.innerText = "";
            }
            if (inputPasswordTag.current.value.length < 6) {
                warningTag.current.innerText = "Mật không tối thiểu 6 kí tự";
            } else {
                warningTag.current.innerText = "";

                // Thực thi khi tất cả thông tin hợp lí
                axios.post("http://localhost:8080/api/authenUser", { Email: inputEmailTag.current.value, PassWord: inputPasswordTag.current.value })
                    .then(res => {
                        // setDataUser(res.data);
                        if (res.data.status === "not found") {
                            alert("Tài khoản không tồn tại");
                        } else {
                            sessionStorage.setItem("cart", JSON.stringify(res.data.Product_Carts))
                            sessionStorage.setItem("Like", JSON.stringify(res.data.Favorite_products))
                            sessionStorage.setItem("User", JSON.stringify({ Id: res.data.Id }));
                            window.location.href = "/Account";
                        }
                    })
                    .catch(err => console.log(err));
            }
        }
    };
    return (
        <div>
            <div>
                <Container style={{ width: 700, height: '100vh' }} className="pt-4">
                    <Row>
                        <Col md={8} className="p-5 bg-white border border-danger">
                            <h3 className="fw-semibold mb-2">Đăng nhập tài khoản</h3>
                            <span ref={warningTag} className="text-danger d-inline-block fs-5 mb-3"></span>
                            <form>
                                <div className="mb-3">
                                    <label className="fw-semibold d-block mb-2" htmlFor="formBasicEmail">Email<span className="text-danger mx-2">*</span></label>
                                    <input ref={inputEmailTag} className="fs-5 px-3 py-2 w-100" style={{ border: '1px solid #eaebf3', outline: 'none' }} type="email" id="formBasicEmail" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <label className="fw-semibold d-block mb-2" htmlFor="formBasicPassword">Mật khẩu<span className="text-danger mx-2">*</span></label>
                                    <input ref={inputPasswordTag} className="fs-5 px-3 py-2 w-100" style={{ border: '1px solid #eaebf3', outline: 'none' }} type="password" id="formBasicPassword" placeholder="Mật khẩu" />
                                </div>
                                <button onClick={(e) => handleLogin(e)} className="w-100 bg-danger border-0 text-white rounded-1 fw-semibold py-2 mt-2" type="submit">
                                    Đăng nhập
                                </button>
                            </form>

                            <div className="d-flex align-items-center mt-4">
                                <div style={{ borderTop: '1px #eaebf3 solid', width: '30%' }}></div>
                                <p className="text-center mb-0" style={{ width: '40%' }}>Hoặc đăng nhập bằng</p>
                                <div style={{ borderTop: '1px #eaebf3 solid', width: '30%' }}></div>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <Image style={{ marginRight: 2, cursor: 'pointer' }} width={110} src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="" />
                                <Image style={{ marginLeft: 2, cursor: 'pointer' }} width={110} src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="" />
                            </div>
                            <div className="text-center mt-4">
                                <span>Bạn quên mật khẩu bấm <Link className="text-info text-decoration-underline">vào đây</Link></span>
                            </div>
                        </Col>
                        <Col md={4} className="bg-danger p-4">
                            <h3 className="text-white">Quyền lợi với thành viên</h3>
                            <ul className="list-unstyled text-white mt-5">
                                <li>Vận chuyển siêu tốc</li>
                                <li className="mt-3">Sản phẩm đa dạng</li>
                                <li className="mt-3">Đổi trả dễ dàng</li>
                                <li className="mt-3">Tích điểm đổi quà</li>
                                <li className="mt-3">Được giảm giá cho lần mua tiếp theo lên đến 10%</li>
                            </ul>
                            <Link to="/register">
                                <Button className="border border-white py-2 px-5 mt-3 fs-4 fw-semibold" style={{ backgroundColor: 'transparent' }}>Đăng ký</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
