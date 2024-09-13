import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FaChevronLeft, FaRegUserCircle } from "react-icons/fa";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export default function Pay() {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionDistrict, setSelectedOptionDistrict] = useState('');
    const [selectedOptionWard, setSelectedOptionWard] = useState('');
    const [transportFee, setTransportFee] = useState(0);
    const [user, setUser] = useState({});

    const EmailTag = useRef();
    const NameTag = useRef();
    const PhoneTag = useRef();
    const AddressTag = useRef();

    const handleOrder = () => {
        const EmailValue = EmailTag.current.value;
        const NameValue = NameTag.current.value;
        const PhoneValue = PhoneTag.current.value;
        const AddressValue = AddressTag.current.value;

        // console.log(EmailValue, NameValue, PhoneValue, AddressValue, selectedOption, selectedOptionDistrict, selectedOptionWard, transportFee)
        function getSelectedRadioValue(name) {
            // Lấy tất cả các thẻ input type radio có cùng tên
            var radios = document.getElementsByName(name);

            // Lặp qua các thẻ radio để kiểm tra xem thẻ nào được chọn
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    return radios[i].nextElementSibling.innerText;
                }
            }

            // Trường hợp không có thẻ radio nào được chọn
            return null;
        }

        sessionStorage.setItem("InfoOrder", JSON.stringify({
            Email: EmailValue,
            Name: NameValue,
            Phone: PhoneValue,
            Address: AddressValue,
            Province: selectedOption,
            District: selectedOptionDistrict,
            Ward: selectedOptionWard,
            TransportFee: transportFee,
            Payment_methods: getSelectedRadioValue('btnRadio'),
            TransportFee: transportFee
        }))
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value);

        const province = provinces.find(province => province.Name === event.target.value);
        if (province) {
            setDistricts(province.districts);
        } else {
            setDistricts([]);
            setWards([]);
            setTransportFee(0);
        }
    };

    const handleChangeDistrict = (event) => {
        setSelectedOptionDistrict(event.target.value);

        const district = districts.find(district => district.Name === event.target.value);
        if (district) {
            setWards(district.wards);
            // setTransportFee(40000);
        } else {
            setWards([]);
            setTransportFee(0);
        }
    };

    const handleChangeWard = (event) => {
        setSelectedOptionWard(event.target.value);

        const ward = wards.find(ward => ward.Name === event.target.value);
        if (ward) {
            setTransportFee(40000);
        } else {
            setTransportFee(0);
        }
    };

    useEffect(() => {
        axios.get("http://localhost:8080/api/GetAllAddress")
            .then(res => setProvinces(res.data))
            .catch(err => console.log(err))

        axios.post("http://localhost:8080/api/FindUser", { Id: JSON.parse(sessionStorage.getItem("User")).Id })
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="bg-white">
            <Container style={{ width: 1200 }}>
                <Row style={{ height: "100vh" }}>
                    <Col md={8}>
                        <h2 className="text-info fs-1 py-3">Poco Shop</h2>
                        <Row>
                            <Col md={6}>
                                <div className="d-flex justify-content-between">
                                    <span className="fw-semibold">Thông tin nhận hàng</span>
                                    <span className="text-info d-flex align-items-center">
                                        <span className="mx-1">
                                            <FaRegUserCircle />
                                        </span>
                                        Đăng nhập
                                    </span>
                                </div>
                                <div className="d-flex flex-column">
                                    <input ref={EmailTag} className="p-2 mt-3 no-outline" value={user.Email} placeholder="Email" type="email" />
                                    <input ref={NameTag} className="p-2 mt-3 no-outline" value={user.Name} placeholder="Họ và tên" type="text" />
                                    <input ref={PhoneTag} className="p-2 mt-3 no-outline" value={user.Phone} placeholder="Số điện thoại (tùy chọn)" type="text" />
                                    <input ref={AddressTag} className="p-2 mt-3 no-outline" placeholder="Địa chỉ (tùy chọn)" type="text" />
                                    <select value={selectedOption} onChange={handleChange} className="p-2 mt-3 no-outline" type="text">
                                        <option value="---">---</option>
                                        {provinces.length !== 0 && provinces.map(province =>
                                            <option key={province.Id} value={province.Name}>{province.Name}</option>
                                        )}
                                    </select>
                                    <select disabled={districts.length !== 0 ? false : true} value={selectedOptionDistrict} onChange={handleChangeDistrict} className="p-2 mt-3 no-outline" type="text">
                                        <option>---</option>
                                        {districts.map(district =>
                                            <option key={district.Id}>{district.Name}</option>
                                        )}
                                    </select>
                                    <select disabled={wards.length !== 0 ? false : true} value={selectedOptionWard} onChange={handleChangeWard} className="p-2 mt-3 no-outline" type="text">
                                        <option>---</option>
                                        {wards.map(ward =>
                                            <option key={ward.Id}>{ward.Name}</option>
                                        )}
                                    </select>
                                    <textarea className="p-2 mt-3 no-outline" placeholder="Ghi chú (tùy chọn)" type="text" />
                                </div>
                            </Col>
                            <Col md={6}>
                                {transportFee === 0 && <div>
                                    <span className="fw-semibold">Vận chuyển</span>
                                    <div className="bg-info px-4 py-3 rounded-2 mt-2">Vui lòng nhập thông tin giao hàng</div>
                                </div>}
                                {transportFee !== 0 && <div>
                                    <span className="fw-semibold">Vận chuyển</span>
                                    <div className="px-4 py-3 rounded-2 mt-2 border d-flex justify-content-between">
                                        <span>Giao hàng tận nơi</span>
                                        <div>
                                            <span><NumericFormat value={transportFee} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /></span>
                                            <sup className="text-decoration-underline">đ</sup>
                                        </div>
                                    </div>
                                </div>}
                                <div className="mt-5">
                                    <span className="fw-semibold">Thanh toán</span>
                                    <div className="mt-2">
                                        <div className="d-flex align-items-center justify-content-between border border-secondary p-3 rounded-top-2">
                                            <div className="d-flex align-items-center">
                                                <input name="btnRadio" type="radio" />
                                                <span className="mx-3">Chuyển khoản</span>
                                            </div>
                                            <FaRegMoneyBill1 size={20} />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between border border-secondary border-top-0 p-3 rounded-bottom-2">
                                            <div className="d-flex align-items-center">
                                                <input name="btnRadio" type="radio" />
                                                <span className="mx-3">Thu hộ (COD)</span>
                                            </div>
                                            <FaRegMoneyBill1 size={20} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <div style={{ borderLeft: "1px #ebebeb solid" }} className="h-100">
                            <h2 style={{ borderBottom: "1px #ebebeb solid" }} className="fs-3 fw-semibold p-4">Đơn hàng (1 sản phẩm)</h2>
                            <div className="py-3 px-4">
                                <ul style={{ borderBottom: "1px #ebebeb solid" }} className="list-unstyled mb-0 pb-4">
                                    {JSON.parse(sessionStorage.getItem("cart")).map(item =>
                                        <li key={item.Id} className="d-flex justify-content-between align-items-center mt-3">
                                            <div className="d-flex align-items-center">
                                                <div className="position-relative">
                                                    <Image width={50} src={item.Image} alt="" />
                                                    <span style={{ height: 15, width: 15, top: -5, right: -5 }} className="position-absolute d-inline-flex bg-info text-white justify-content-center align-items-center rounded-circle fs-6">{item.quantity}</span>
                                                </div>
                                                <p className="mx-3 morethan2lines">{item.Name}</p>
                                            </div>
                                            <span><NumericFormat value={item.Reduced_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup></span>
                                        </li>
                                    )}
                                </ul>
                                <div className="py-3 d-flex align-items-center">
                                    <input className="p-2 w-100" placeholder="Nhập mã giảm giá" />
                                    <Button style={{ width: 105, marginLeft: 10 }} className="px-4 py-3 fs-5" disabled>Áp dụng</Button>
                                </div>
                                <div className="py-3" style={{ borderTop: "1px #ebebeb solid" }}>
                                    <p className="d-flex justify-content-between mb-0 my-2">
                                        <span>Tạm tính</span>
                                        <span><NumericFormat value={JSON.parse(sessionStorage.getItem("cart")).reduce((total, init) => total + init.Reduced_price * init.quantity, 0)} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup></span>
                                    </p>
                                    <p className="d-flex justify-content-between mb-0 my-2">
                                        <span>Phí vận chuyển</span>
                                        <div>
                                            <span>{transportFee === 0 ? '-' : <NumericFormat value={transportFee} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />}</span>
                                            <sup className="text-decoration-underline">đ</sup>
                                        </div>
                                    </p>
                                </div>
                                <div style={{ borderTop: "1px #ebebeb solid" }} className="d-flex justify-content-between align-items-center py-3">
                                    <span>Tổng cộng</span>
                                    <span className="text-info fs-3"><NumericFormat value={JSON.parse(sessionStorage.getItem("cart")).reduce((total, init) => total + init.Reduced_price * init.quantity, 0) + transportFee} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup></span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to="/Cart" className="text-info"><FaChevronLeft />Quay về giỏ hàng</Link>
                                    <Link to="/CheckOut" onClick={handleOrder} className="px-4 py-2 fs-4 btn btn-info text-white">Đặt hàng</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
