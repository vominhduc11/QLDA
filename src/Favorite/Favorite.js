import { Button, Container, Image, Modal } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { FaChevronRight, FaRegCheckCircle } from 'react-icons/fa';
import { RiBarChartFill, RiShoppingCartLine } from 'react-icons/ri';

import styles from './Style.module.scss';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Favorite() {
    const [showModal, setShowModal] = useState(false);
    const [product_cart, setProduct_cart] = useState(sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : []);
    const [product_like, setProduct_like] = useState(sessionStorage.getItem('Like') ? JSON.parse(sessionStorage.getItem('Like')) : []);
    const [showNotificate_favorite, setShowNotificate_favorite] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [notificate_favorite, setNotificate_favorite] = useState(true);
    // hàm đóng mở modal
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    // hàm đóng mở modalLogin
    const handleCloseLogin = () => setShowModalLogin(false);
    const handleShowLogin = () => setShowModalLogin(true);
    // xóa sản phẩm giỏ hàng
    function DeleteProductCart(Id) {
        axios.delete(`http://localhost:8080/api/deleteProduct_Cart/${Id}/${JSON.parse(sessionStorage.getItem('User')).Id}`).then((res) => {
            if (res.data === 'success') {
                const products = JSON.parse(sessionStorage.getItem('cart'));
                setProduct_cart(products.filter((product) => product.Id !== Id));
                // Lưu vào session
                sessionStorage.setItem('cart', JSON.stringify(products.filter((product) => product.Id !== Id)));
            }
        });
    }
    // Xử lí xử kiện khi click cart
    const handelClickCart = (e, Id) => {
        // ngăn chặn hành vi mặc định và nổi bọt
        e.stopPropagation();
        e.preventDefault();
        // Yêu cầu đăng nhập trước khi Like sản phẩm
        if (sessionStorage.getItem('User')) {
            // Tìm sản phẩm trong danh sách product
            const prd = product_like.find((item) => item.Id === Id);
            // Lấy danh sách sản phẩm từ session
            const ListProduct = JSON.parse(sessionStorage.getItem('cart'));
            //Kiểm tra có bị trùng sản phẩm hay không
            if (ListProduct.find((item) => item.Id === prd.Id)) {
                const product = ListProduct.find((item) => item.Id === prd.Id);
                product.quantity = product.quantity + 1;
                // lưu vào cơ sở dữ liệu
                axios
                    .post('http://localhost:8080/api/AddProduct_Cart', { Id: Id, Id_User: JSON.parse(sessionStorage.getItem('User')).Id, quantity: product.quantity })
                    .then((res) => {
                        if (res.data === 'success') {
                            // Lưu vào session
                            sessionStorage.setItem('cart', JSON.stringify(ListProduct));

                            setProduct_cart(JSON.parse(sessionStorage.getItem('cart')));
                            // mở modal
                            handleShow();
                        }
                    })
                    .catch((err) => console.log(err));
            } else {
                // Thêm sản phẩm vừa tìm được vào danh sách
                prd.quantity = 1;
                ListProduct.push(prd);
                // lưu vào cơ sở dữ liệu
                axios
                    .post('http://localhost:8080/api/AddProduct_Cart', { Id: Id, Id_User: JSON.parse(sessionStorage.getItem('User')).Id, quantity: 1 })
                    .then((res) => {
                        if (res.data === 'success') {
                            // Lưu vào session
                            sessionStorage.setItem('cart', JSON.stringify(ListProduct));

                            setProduct_cart(JSON.parse(sessionStorage.getItem('cart')));
                            // mở modal
                            handleShow();
                        }
                    })
                    .catch((err) => console.log(err));
            }
        } else {
            handleShowLogin();
        }
    };

    const handelClickHeart = (e, ele, Id) => {
        // ngăn chặn hành vi mặc định và nổi bọt
        e.stopPropagation();
        e.preventDefault();
        axios
            .delete(`http://localhost:8080/api/deleteProductHeart/${Id}/${JSON.parse(sessionStorage.getItem('User')).Id}`)
            .then((res) => {
                if (res.data === 'success') {
                    // Xóa sản phẩm yêu thích trong session
                    const products = JSON.parse(sessionStorage.getItem('Like')).filter((item) => item.Id !== Id);
                    sessionStorage.setItem('Like', JSON.stringify(products));
                    setProduct_like(JSON.parse(sessionStorage.getItem('Like')));
                    // Xóa sản phẩm yêu thích
                    setNotificate_favorite(false);
                    setShowNotificate_favorite(true);
                }
            })
            .catch((err) => console.log(err));
    };

    // Thiết lập thời gian tự động tắt thông báo
    useEffect(() => {
        if (showNotificate_favorite) {
            const timer = setTimeout(() => {
                setShowNotificate_favorite(false);
            }, 1500); // Đóng modal sau 2 giây
            return () => clearTimeout(timer); // Xóa timer khi component bị unmount hoặc modal đóng
        }
    }, [showNotificate_favorite]);
    return (
        <div>
            <div className="bg-white py-3">
                <Container style={{ width: 1200 }} className="d-flex align-items-center">
                    <Link to="/">
                        <AiOutlineHome size={22} color="#f72c0f" />
                    </Link>
                    <span className="mx-3">
                        <FaChevronRight color="#f72c0f" />
                    </span>
                    <span style={{ color: '#f72c0f' }}>Yêu thích</span>
                </Container>
            </div>
            <div className="pt-4">
                <Container style={{ width: 1200 }}>
                    {product_like.length === 0 || (
                        <div className="d-flex flex-wrap">
                            {product_like.map((item) => (
                                <Link to={`/product/${item.Name}?Id=${item.Id}`} id={styles.Item} className="px-2 py-3 d-block">
                                    <div className="bg-white position-relative">
                                        <img width="100%" src={item.Image} alt="" loading="lazy" />
                                        <div className="p-3">
                                            <h3 className="fw-bold morethan2lines">{item.Name}</h3>
                                            <p className="fw-semibold text-danger mb-0 fs-3">
                                                <NumericFormat value={item.Reduced_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                                <sup>đ</sup>
                                            </p>
                                            <p style={{ height: '24px' }} className="text-decoration-line-through mb-0">
                                                {item.Price === 0 ? (
                                                    ''
                                                ) : (
                                                    <>
                                                        <NumericFormat value={item.Price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                                        <sup>
                                                            <u>đ</u>
                                                        </sup>
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                        <span style={{ opacity: item.Price === 0 ? 0 : 1 }} className="position-absolute text-center fw-semibold">
                                            Giảm {Math.round(((item.Price - item.Reduced_price) / item.Price) * 100)}%
                                        </span>
                                        <span onClick={(e) => handelClickHeart(e, e.currentTarget, item.Id)} className={JSON.parse(sessionStorage.getItem('Like')).find((e) => e.Id === item.Id) ? 'position-absolute bg-danger text-warning' : 'position-absolute'}>
                                            <AiOutlineHeart />
                                        </span>
                                        <span onClick={(e) => handelClickCart(e, item.Id)} className="position-absolute">
                                            <RiShoppingCartLine />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                    {product_like.length === 0 && (
                        <div>
                            <p className="text-center">
                                Chưa có sản phẩm yêu thích, click{' '}
                                <Link to="/All_Product" className="text-primary">
                                    vào đây
                                </Link>{' '}
                                để thêm sản phẩm yêu thích !!!
                            </p>
                        </div>
                    )}
                </Container>
            </div>
            <Modal show={showModal} onHide={handleClose} size="xl">
                <Modal.Header className="bg-danger">
                    <Modal.Title className="d-flex align-items-center text-white">
                        <FaRegCheckCircle style={{ marginRight: 4 }} />
                        Bạn đã thêm vào giỏ hàng thành công
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {product_cart.length === 0 && (
                        <>
                            <div className="text-center">
                                <Image width={100} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f4.png" alt="" />
                                <p className="mt-2">Không có sản phẩm nào trong giỏ hàng của bạn</p>
                                <Link to="/" className="border-0 fs-4 py-2 px-4 mt-5 btn btn-danger text-white">
                                    Tiếp tục mua sắm
                                </Link>
                            </div>
                        </>
                    )}
                    {product_cart.length !== 0 && (
                        <>
                            <p>Giỏ hàng của bạn hiện có {JSON.parse(sessionStorage.getItem('cart')).reduce((total, init) => total + init.sl, 0)} sản phẩm</p>
                            <div>
                                <div className="d-flex">
                                    <div style={{ flexBasis: '55%' }} className="fw-semibold">
                                        Thông tin sản phẩm
                                    </div>
                                    <div style={{ flexBasis: '15%' }} className="fw-semibold text-center">
                                        Đơn giá
                                    </div>
                                    <div style={{ flexBasis: '15%' }} className="fw-semibold text-center">
                                        Số lượng
                                    </div>
                                    <div style={{ flexBasis: '15%' }} className="fw-semibold text-center">
                                        Thành tiền
                                    </div>
                                </div>
                                <div className="overflow-auto scrollbar" style={{ maxHeight: 200 }}>
                                    {product_cart.map((item) => (
                                        <div key={item.Id} className="d-flex align-items-center">
                                            <div style={{ flexBasis: '55%' }}>
                                                <div className="d-flex align-items-center">
                                                    <Image width={100} src={item.Image} alt="" />
                                                    <div>
                                                        <p>{item.Name}</p>
                                                        <p className="text-danger">
                                                            <span onClick={() => DeleteProductCart(item.Id)} style={{ cursor: 'pointer' }}>
                                                                Xóa
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ flexBasis: '15%' }} className="fw-semibold text-center text-danger">
                                                <NumericFormat value={item.Reduced_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                                <sup className="text-decoration-underline">đ</sup>
                                            </div>
                                            <div style={{ flexBasis: '15%' }} className="fw-semibold text-center">
                                                {item.quantity}
                                            </div>
                                            <div style={{ flexBasis: '15%' }} className="fw-semibold text-center text-danger">
                                                <NumericFormat value={item.Reduced_price * item.quantity} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                                <sup className="text-decoration-underline">đ</sup>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                    {product_cart.length === 0 || (
                        <p className="text-end">
                            <span style={{ marginRight: 42 }}>Tổng tiền:</span>
                            <span className="text-danger fw-semibold">
                                <NumericFormat value={JSON.parse(sessionStorage.getItem('cart')).reduce((total, init) => total + init.Reduced_price * init.quantity, 0)} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                <sup className="text-decoration-underline">đ</sup>
                            </span>
                        </p>
                    )}
                </Modal.Body>
                {product_cart.length === 0 || (
                    <Modal.Footer>
                        <Link to="/Pay" className="fs-5 py-2 btn btn-danger" style={{ padding: '0px 60px' }} onClick={handleClose}>
                            Thanh toán
                        </Link>
                    </Modal.Footer>
                )}
            </Modal>
            <Modal show={showModalLogin} onHide={handleCloseLogin} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex align-items-center justify-content-center text-black w-100 fw-semibold fs-2">Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Vui lòng đăng nhập trước khi thực hiện.</Modal.Body>
                <Modal.Footer>
                    <Button className="fs-5 py-2 border px-4" variant="white" onClick={handleCloseLogin}>
                        Hủy
                    </Button>
                    <Link to="/Login" className="fs-5 py-2 btn btn-danger px-4">
                        Đăng nhập
                    </Link>
                </Modal.Footer>
            </Modal>
            <Modal show={showNotificate_favorite}>
                <Modal.Body className={notificate_favorite ? 'bg-success text-white text-center' : 'bg-secondary text-white text-center'}>{notificate_favorite ? 'Sản phẩm đã được thêm vào danh sách yêu thích' : 'Sản phẩm đã được xóa khỏi danh sách yêu thích'}</Modal.Body>
            </Modal>
        </div>
    );
}
