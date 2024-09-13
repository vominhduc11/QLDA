import axios from "axios";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { CiCircleCheck } from "react-icons/ci";
import { FaPrint } from "react-icons/fa";
import { NumericFormat } from "react-number-format";

export default function CheckOut() {

    function handleContinue() {
        axios.delete(`http://localhost:8080/api/deleteAllProduct_Cart/${JSON.parse(sessionStorage.getItem("User")).Id}`)
            .then(res => {
                if (res.data === 'success') {
                    sessionStorage.removeItem("cart");
                    sessionStorage.removeItem("InfoOrder");
                    window.location.href = "/";
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container style={{ width: 1200 }}>
            <div className="py-3"><span className="text-info fs-1">Poco Shop</span></div>
            <Row>
                <Col md={7}>
                    <div className="d-flex align-items-center mb-3">
                        <CiCircleCheck size={80} className="text-success" />
                        <div className="mx-2">
                            <h4 className="fw-semibold">Cảm ơn bạn đã đặt hàng</h4>
                            <p>Một email các nhận đã được gửi tới {JSON.parse(sessionStorage.getItem("InfoOrder")).Email}.<br />Xin vui lòng kiểm tra email của bạn</p>
                        </div>
                    </div>
                    <div>
                        <Row className="border p-3">
                            <Col md={6}>
                                <div style={{ height: 154 }}>
                                    <h2>Thông tin mua hàng</h2>
                                    <p>{JSON.parse(sessionStorage.getItem("InfoOrder")).Name}</p>
                                    <p>{JSON.parse(sessionStorage.getItem("InfoOrder")).Email}</p>
                                    <p>+84{JSON.parse(sessionStorage.getItem("InfoOrder")).Phone}</p>
                                </div>
                                <div>
                                    <h2>Phương thức thanh toán</h2>
                                    <p>{JSON.parse(sessionStorage.getItem("InfoOrder")).Payment_methods}</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div style={{ height: 154 }}>
                                    <h2>Địa chỉ nhận hàng</h2>
                                    <p>{JSON.parse(sessionStorage.getItem("InfoOrder")).Name}</p>
                                    <p>{JSON.parse(sessionStorage.getItem("InfoOrder")).Address}</p>
                                    <p>Phường {JSON.parse(sessionStorage.getItem("InfoOrder")).Ward}, Quận {JSON.parse(sessionStorage.getItem("InfoOrder")).District}, {JSON.parse(sessionStorage.getItem("InfoOrder")).Province}</p>
                                    <p>+84{JSON.parse(sessionStorage.getItem("InfoOrder")).Phone}</p>
                                </div>
                                <div>
                                    <h2>Phương thức vận chuyển</h2>
                                    <p>Giao hàng tận nơi</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="bg-white">
                        <div className="px-3 py-2">
                            <span className="fw-semibold">Đơn hàng #1010(1)</span>
                        </div>
                        <div style={{ borderTop: "1px #ebebeb solid" }} className="px-3 pb-3">
                            <ul className="list-unstyled mb-0">
                                {JSON.parse(sessionStorage.getItem("cart")).map(item =>
                                    <li key={item.Id} className="d-flex justify-content-between align-items-center mt-3">
                                        <div className="d-flex  align-items-center">
                                            <div className="position-relative d-inline-block border rounded-2">
                                                <Image width={50} src={item.Image} alt="" />
                                                <span style={{ height: 15, width: 15, top: -5, right: -5 }} className="position-absolute d-inline-flex bg-info text-white justify-content-center align-items-center rounded-circle fs-6 morethan2lines">{item.quantity}</span>
                                            </div>
                                            <p className="mx-2">{item.Name}</p>
                                        </div>
                                        <span><NumericFormat value={item.Reduced_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup></span>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div style={{ borderTop: "1px #ebebeb solid" }} className="px-3 py-2">
                            <div className="d-flex justify-content-between my-2">
                                <span>Tạm tính</span>
                                <span><NumericFormat value={JSON.parse(sessionStorage.getItem("cart")).reduce((total, init) => total + init.Reduced_price * init.quantity, 0)} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup></span>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <span>Phí vận chuyển</span>
                                <span><NumericFormat value={JSON.parse(sessionStorage.getItem("InfoOrder")).TransportFee} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup></span>
                            </div>
                        </div>
                        <div style={{ borderTop: "1px #ebebeb solid" }} className="d-flex justify-content-between align-items-center px-3 py-2">
                            <span>Tổng cộng</span>
                            <span className="text-info fs-2"><NumericFormat value={JSON.parse(sessionStorage.getItem("cart")).reduce((total, init) => total + init.Reduced_price * init.quantity, 0) + JSON.parse(sessionStorage.getItem("InfoOrder")).TransportFee} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup></span>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="d-flex align-items-center justify-content-center py-5">
                <Button onClick={handleContinue} className="fs-4 px-4 py-3 mx-3">Tiếp tục mua hàng</Button>
                <span className="d-inline-flex align-items-center mx-3">
                    <FaPrint size={20} className="text-info" />
                    <span className="fs-4 text-info mx-2">In</span>
                </span>
            </div>
        </Container>
    )
}
