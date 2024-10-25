import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FaChevronRight } from 'react-icons/fa'

import styles from "./Style.module.scss"
import { AiOutlineHome } from 'react-icons/ai'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { NumericFormat } from 'react-number-format'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Cart() {
    const [product_cart, setProduct_cart] = useState(JSON.parse(sessionStorage.getItem("cart")));
    // xóa sản phẩm giỏ hàng
    function DeleteProductCart(Id) {
        axios.delete(`http://localhost:8080/api/deleteProduct_Cart/${Id}/${JSON.parse(sessionStorage.getItem("User")).Id}`)
            .then(res => {
                if (res.data === "success") {
                    const products = JSON.parse(sessionStorage.getItem("cart"));
                    setProduct_cart(products.filter(product => product.Id !== Id));
                    // Lưu vào session
                    sessionStorage.setItem("cart", JSON.stringify(products.filter(product => product.Id !== Id)))
                }
            })
    }

    useEffect(() => {
        // bỏ các thời gian trong quá khứ cho thẻ input type date
        const dateInput = document.getElementById('date-input');
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
        const year = today.getFullYear();
        const todayString = `${year}-${month}-${day}`;

        if (dateInput) {
            dateInput.min = todayString;
        }
    })
    return (
        <div>
            <div className="bg-white py-3">
                <Container style={{ width: 1200 }} className="d-flex align-items-center">
                    <span><AiOutlineHome size={22} color="#f72c0f" /></span>
                    <span className="mx-3"><FaChevronRight color="#f72c0f" /></span>
                    <span style={{ color: '#f72c0f' }}>Giỏ hàng</span>
                </Container>
            </div>
            <div className='pt-4'>
                <Container className='bg-white p-4' style={{ width: 1200 }}>
                    <h1 className='fw-semibold'>GIỎ HÀNG CỦA BẠN</h1>
                    {(sessionStorage.getItem("cart") === null || JSON.parse(sessionStorage.getItem("cart")).length === 0) && <div className='text-center'>
                        <Image width={100} src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f4.png' alt='' />
                        <p className='mt-2'>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                        <Link to="/" className='border-0 fs-4 py-2 px-4 mt-5 btn btn-danger text-white'>Tiếp tục mua sắm</Link>
                    </div>}
                    {(sessionStorage.getItem("cart") !== null && JSON.parse(sessionStorage.getItem("cart")).length !== 0) && <Row>
                        <Col md={9}>
                            <table class="table mt-4">
                                <thead>
                                    <tr>
                                        <th>Thông tin sản phẩm</th>
                                        <th className='text-center'>Đơn giá</th>
                                        <th className='text-center'>Số lượng</th>
                                        <th className='text-center'>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product_cart.map(item =>
                                        <tr>
                                            <td className='d-flex align-items-center'>
                                                <Image width={95} src={item.Image} alt='' />
                                                <div>
                                                    <p className='morethan2lines' style={{ width: 300 }}>{item.Name}</p>
                                                    <p onClick={() => DeleteProductCart(item.Id)} className='text-danger' style={{ cursor: 'pointer' }}>Xóa</p>
                                                </div>
                                            </td>
                                            <td className='text-center text-danger fw-semibold'><NumericFormat value={item.Reduced_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className='text-decoration-underline'>đ</sup></td>
                                            <td className='text-center'>
                                                {item.quantity}
                                            </td>
                                            <td className='text-center text-danger fw-semibold'>
                                                <NumericFormat value={item.Reduced_price * item.quantity} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </Col>
                        <Col md={3}>
                            <div className='p-3 d-flex flex-column ' style={{ backgroundColor: '#f8f8f8' }}>
                                <h3 className='fw-semibold'>Thời gian giao hàng</h3>
                                <input className='fs-4 p-2 mt-lg-1' type='date' id="date-input" />
                                <select className='fs-4 p-2 mt-3' id="fruit" name="fruit">
                                    <option value="apple">19h00 - 21h00</option>
                                    <option value="apple">19h00 - 21h00</option>
                                    <option value="apple">19h00 - 21h00</option>
                                </select>
                                <div className='d-flex justify-content-between py-3 mt-4' style={{ borderTop: '1px #ccc solid' }}>
                                    <span className='fw-semibold'>Tổng tiền:</span>
                                    <span className='text-danger fw-semibold'><NumericFormat value={JSON.parse(sessionStorage.getItem("cart")).reduce((total, init) => total + init.Reduced_price * init.quantity, 0)} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className='text-decoration-underline'>đ</sup></span>
                                </div>
                                <Link to="/Pay" className='border-0 w-100 fs-4 py-2 mt-4 btn btn-danger'>Thanh toán</Link>
                            </div>
                        </Col>
                    </Row>}
                </Container>
            </div>
        </div >
    )
}
