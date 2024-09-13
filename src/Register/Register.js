import axios from "axios";
import { useRef } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
    // các thẻ ref trong form đăng nhập
    const warningTag = useRef();
    const inputSurnameTag = useRef();
    const inputNameTag = useRef();
    const inputPhoneTag = useRef();
    const inputEmailTag = useRef();
    const inputPassWordTag = useRef();
    // Thực hiện sự kiện khi bấm đăng kí
    function handleRegister(e) {
        e.preventDefault();
        if (inputEmailTag.current.value === '' || inputPassWordTag.current.value === '' || inputPhoneTag.current.value === '' || inputNameTag.current.value === '' || inputSurnameTag.current.value === '') {
            warningTag.current.innerText = "Vui lòng điền đầy đủ thông tin";
        } else {
            if (!(/^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/).test(inputPhoneTag.current.value)) {
                warningTag.current.innerText = "Số điện thoại không hợp lệ";
                return;
            } else {
                warningTag.current.innerText = "";
            }
            if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(inputEmailTag.current.value)) {
                warningTag.current.innerText = "Email không hợp lệ";
                return;
            } else {
                warningTag.current.innerText = "";
            }
            if (inputPassWordTag.current.value.length < 6) {
                warningTag.current.innerText = "Mật không tối thiểu 6 kí tự";
                return;
            } else {
                warningTag.current.innerText = "";

                // Thực thi khi tất cả thông tin hợp lí
                axios.post("http://localhost:8080/api/ResgisterUser", { Name: inputSurnameTag.current.value + " " + inputNameTag.current.value, Phone: inputPhoneTag.current.value, Email: inputEmailTag.current.value, Password: inputPassWordTag.current.value })
                    .then(res => {
                        if (res.data === "Success") {
                            alert("Đăng kí tài khoản thành công")
                        } else {
                            warningTag.current.innerText = res.data;
                        }
                    })
                    .catch(err => console.log(err));
            }
        }
    };
    return (
        <div>
            <div>
                <Container style={{ width: 700, height: "100vh" }} className="pt-4">
                    <Row>
                        <Col md={8} className="p-5 bg-white border border-danger">
                            <h3 className="fw-semibold mb-2">Đăng ký tài khoản</h3>
                            <span ref={warningTag} className="text-danger d-inline-block fs-5 mb-3"></span>
                            <form>
                                <div className="mb-3">
                                    <label className="fw-semibold d-block mb-2" htmlFor="formBasicEmail">Họ<span className="text-danger mx-2">*</span></label>
                                    <input ref={inputSurnameTag} className="fs-5 px-3 py-2 w-100" style={{ border: '1px solid #eaebf3', outline: 'none' }} type="text" id="formBasicEmail" placeholder="Họ" />
                                </div>
                                <div className="mb-3">
                                    <label className="fw-semibold d-block mb-2" htmlFor="formBasicEmail">Tên<span className="text-danger mx-2">*</span></label>
                                    <input ref={inputNameTag} className="fs-5 px-3 py-2 w-100" style={{ border: '1px solid #eaebf3', outline: 'none' }} type="text" id="formBasicEmail" placeholder="Tên" />
                                </div>
                                <div className="mb-3">
                                    <label className="fw-semibold d-block mb-2" htmlFor="formBasicPassword">Số điện thoại<span className="text-danger mx-2">*</span></label>
                                    <input ref={inputPhoneTag} className="fs-5 px-3 py-2 w-100" style={{ border: '1px solid #eaebf3', outline: 'none' }} type="text" id="formBasicPassword" placeholder="Số điện thoại" />
                                </div>
                                <div className="mb-3">
                                    <label className="fw-semibold d-block mb-2" htmlFor="formBasicEmail">Email<span className="text-danger mx-2">*</span></label>
                                    <input ref={inputEmailTag} className="fs-5 px-3 py-2 w-100" style={{ border: '1px solid #eaebf3', outline: 'none' }} type="email" id="formBasicEmail" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <label className="fw-semibold d-block mb-2" htmlFor="formBasicPassword">Mật khẩu<span className="text-danger mx-2">*</span></label>
                                    <input ref={inputPassWordTag} className="fs-5 px-3 py-2 w-100" style={{ border: '1px solid #eaebf3', outline: 'none' }} type="password" id="formBasicPassword" placeholder="Mật khẩu" />
                                </div>
                                <button onClick={(e) => handleRegister(e)} className="w-100 bg-danger border-0 text-white rounded-1 fw-semibold py-2 mt-2" type="submit">
                                    Đăng ký
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
                            <Link to="/Login">
                                <Button className="border border-white py-2 px-5 mt-3 fs-4 fw-semibold" style={{ backgroundColor: 'transparent' }}>Đăng nhập</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
