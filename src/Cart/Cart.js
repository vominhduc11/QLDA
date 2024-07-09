import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FaChevronRight } from 'react-icons/fa'

import styles from "./Style.module.scss"
import { AiOutlineHome } from 'react-icons/ai'
import { FiMinus, FiPlus } from 'react-icons/fi'

export default function Cart() {

    useEffect(() => {
        // bỏ các thời gian trong quá khứ cho thẻ input type date
        const dateInput = document.getElementById('date-input');
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
        const year = today.getFullYear();
        const todayString = `${year}-${month}-${day}`;

        dateInput.min = todayString;
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
                    {/* <div className='text-center'>
                        <Image width={100} src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f4.png' alt='' />
                        <p className='mt-2'>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                        <Button className='bg-danger border-0 fs-4 py-2 px-4 mt-5'>Tiếp tục mua sắm</Button>
                    </div> */}
                    <Row>
                        <Col md={9}>
                            <table class="table mt-4">
                                <thead>
                                    <tr>
                                        <th>Thông tin sản phẩm</th>
                                        <th>Đơn giá</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='d-flex align-items-center'>
                                            <Image width={95} src='https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/asus-nubia-8s-pro.webp?v=1704858195967' alt='' />
                                            <div>
                                                <p>Apple Watch SE 2023 2.42mm</p>
                                                <p className='text-danger' style={{ cursor: 'pointer' }}>Xóa</p>
                                            </div>
                                        </td>
                                        <td className='text-danger fw-semibold'>9.790.000<sup className='text-decoration-underline'>đ</sup></td>
                                        <td>
                                            <div display="flex" alignItems="center">
                                                <button style={{ border: 'thin solid #ebebeb', height: 28, width: 28, backgroundColor: "#fff" }}>
                                                    <FiMinus color="#ee4f83" />
                                                </button>
                                                <button style={{ border: 'thin solid #ebebeb', height: 28, width: 50, backgroundColor: "#fff", color: '#000' }} disabled>
                                                    1
                                                </button>
                                                <button style={{ border: 'thin solid #ebebeb', height: 28, width: 28, backgroundColor: "#fff" }}>
                                                    <FiPlus color="#ee4f83" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className='text-danger fw-semibold'>9.790.000<sup className='text-decoration-underline'>đ</sup></td>
                                    </tr>
                                    <tr>
                                        <td className='d-flex align-items-center'>
                                            <Image width={95} src='https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/asus-nubia-8s-pro.webp?v=1704858195967' alt='' />
                                            <div>
                                                <p>Apple Watch SE 2023 2.42mm</p>
                                                <p className='text-danger' style={{ cursor: 'pointer' }}>Xóa</p>
                                            </div>
                                        </td>
                                        <td className='text-danger fw-semibold'>9.790.000<sup className='text-decoration-underline'>đ</sup></td>
                                        <td>
                                            <div display="flex" alignItems="center">
                                                <button style={{ border: 'thin solid #ebebeb', height: 28, width: 28, backgroundColor: "#fff" }}>
                                                    <FiMinus color="#ee4f83" />
                                                </button>
                                                <button style={{ border: 'thin solid #ebebeb', height: 28, width: 50, backgroundColor: "#fff", color: '#000' }} disabled>
                                                    1
                                                </button>
                                                <button style={{ border: 'thin solid #ebebeb', height: 28, width: 28, backgroundColor: "#fff" }}>
                                                    <FiPlus color="#ee4f83" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className='text-danger fw-semibold'>9.790.000<sup className='text-decoration-underline'>đ</sup></td>
                                    </tr>
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
                                    <span className='text-danger fw-semibold'>64.680.000<sup className='text-decoration-underline'>đ</sup></span>
                                </div>
                                <Button className='bg-danger border-0 w-100 fs-4 py-2 mt-4'>Thanh toán</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}
