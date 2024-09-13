import styles from './Style.module.scss';

import { Button, ButtonGroup, Container, Image, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import CarouselMulti from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight, FaRegCheckCircle } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { RiBarChartFill, RiShoppingCartLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import Countdown from 'react-countdown';

export default function Main() {
    const [index, setIndex] = useState(1);
    const [product_FlashSale, SetProduct_FlashSale] = useState([]);
    const [product_Outstanding_products, setProduct_Outstanding_products] = useState([]);
    const [product_Discharge, setProduct_Discharge] = useState([]);
    const [accessory, setAccessory] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showNotificate_favorite, setShowNotificate_favorite] = useState(false);
    const [notificate_favorite, setNotificate_favorite] = useState(true);
    const [product_cart, setProduct_cart] = useState([]);
    const [product, setProduct] = useState([]);
    const [period, setPeriod] = useState();
    const [show, setShow] = useState(false);
    console.log(product_cart);
    // Cấu hình responsive cho thư viện react - multi - carousel
    const responsive1 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 9.5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const responsive2 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const responsive3 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    // hàm đóng mở modal
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    // hàm đóng mở modalLogin
    const handleCloseLogin = () => setShowModalLogin(false);
    const handleShowLogin = () => setShowModalLogin(true);
    // xóa sản phẩm giỏ hàng
    function DeleteProductCart(Id) {
        console.log(Id);
        axios.delete(`http://localhost:8080/api/deleteProduct_Cart/${Id}/${JSON.parse(sessionStorage.getItem('User')).Id}`).then((res) => {
            if (res.data === 'success') {
                const products = JSON.parse(sessionStorage.getItem('cart'));
                setProduct_cart(products.filter((product) => product.Id !== Id));
                // Lưu vào session
                sessionStorage.setItem('cart', JSON.stringify(products.filter((product) => product.Id !== Id)));
            }
        });
    }
    // Xử lí xử kiện khi click heard
    function handelClickHeart(e, ele, Id) {
        //ngăn cản hành vi mặc định và nổi bọt
        e.preventDefault();
        e.stopPropagation();
        // Yêu cầu đăng nhập trước khi Like sản phẩm
        if (sessionStorage.getItem('User')) {
            // Thay đổi giao điện nút heart
            if (ele.classList.contains('bg-danger')) {
                axios
                    .delete(`http://localhost:8080/api/deleteProductHeart/${Id}/${JSON.parse(sessionStorage.getItem('User')).Id}`)
                    .then((res) => {
                        if (res.data === 'success') {
                            ele.classList.remove('bg-danger', 'text-warning');
                            // Xóa sản phẩm yêu thích trong session
                            const products = JSON.parse(sessionStorage.getItem('Like')).filter((item) => item.Id !== Id);
                            sessionStorage.setItem('Like', JSON.stringify(products));
                            // Xóa sản phẩm yêu thích
                            setNotificate_favorite(false);
                            setShowNotificate_favorite(true);
                        }
                    })
                    .catch((err) => console.log(err));
            } else {
                axios
                    .post('http://localhost:8080/api/addProductHeart', { Id: Id, Id_User: JSON.parse(sessionStorage.getItem('User')).Id })
                    .then((res) => {
                        if (res.data === 'success') {
                            ele.classList.add('bg-danger', 'text-warning');
                            setNotificate_favorite(true);
                            setShowNotificate_favorite(true);
                            //Thêm sản phẩm yêu thích vào session
                            if (sessionStorage.getItem('Like')) {
                                const products = JSON.parse(sessionStorage.getItem('Like'));
                                products.push(product.find((item) => item.Id === Id));
                                sessionStorage.setItem('Like', JSON.stringify(products));
                            } else {
                                const products = [];
                                products.push(product.find((item) => item.Id === Id));
                                sessionStorage.setItem('Like', JSON.stringify(products));
                            }
                        }
                    })
                    .catch();
            }
        } else {
            handleShowLogin();
        }
    }
    // Xử lí xử kiện khi click cart
    const handelClickCart = (e, Id) => {
        // ngăn chặn hành vi mặc định và nổi bọt
        e.stopPropagation();
        e.preventDefault();
        // Yêu cầu đăng nhập trước khi Like sản phẩm
        if (sessionStorage.getItem('User')) {
            // Tìm sản phẩm trong danh sách product
            const prd = product.find((item) => item.Id === Id);
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
    // Hàm render props để tùy chỉnh giao diện hiển thị đồng hồ đếm ngược
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Khi hoàn thành
            return <span className="text-white fs-3 fw-semibold">Kết thúc</span>;
        } else {
            // Hiển thị bộ đếm ngược
            return (
                <div className="text-white fs-2 fw-semibold">
                    Kết thúc sau:
                    <span style={{ width: 36, height: 36 }} className="text-warning bg-danger d-inline-flex justify-content-center align-items-center rounded-2">
                        {hours < 10 ? '0' + hours : hours}
                    </span>{' '}
                    :
                    <span style={{ width: 36, height: 36 }} className="text-warning bg-danger d-inline-flex justify-content-center align-items-center rounded-2">
                        {minutes < 10 ? '0' + minutes : minutes}
                    </span>{' '}
                    :
                    <span style={{ width: 36, height: 36 }} className="text-warning bg-danger d-inline-flex justify-content-center align-items-center rounded-2">
                        {seconds < 10 ? '0' + seconds : seconds}
                    </span>
                </div>
            );
        }
    };
    // Xử lí xử kiện khi kết thúc thời gian flashSale
    const handelComplete = () => {
        setTimeout(() => {
            setShow(false);
        }, 5000);
    };
    //gọi api
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/getAllOutstanding_products')
            .then((res) => setProduct_Outstanding_products(res.data))
            .catch((err) => console.log(err));

        axios
            .get('http://localhost:8080/api/getAllDischarge')
            .then((res) => setProduct_Discharge(res.data))
            .catch((err) => console.log(err));

        axios
            .get('http://localhost:8080/api/getAllAccessory')
            .then((res) => setAccessory(res.data))
            .catch((err) => console.log(err));

        axios
            .get('http://localhost:8080/api/getAllProduct')
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [show]);
    // Thiết lập thời gian tự động tắt thông báo
    useEffect(() => {
        if (showNotificate_favorite) {
            const timer = setTimeout(() => {
                setShowNotificate_favorite(false);
            }, 1500); // Đóng modal sau 2 giây
            return () => clearTimeout(timer); // Xóa timer khi component bị unmount hoặc modal đóng
        }
    }, [showNotificate_favorite]);
    // Lấy thời gian flase sale trong session
    useEffect(() => {
        axios
            .get('http://localhost:8080/api/getAllTimeFlashSale')
            .then((res) => {
                let lastProcessedResultId = null;
                setInterval(() => {
                    // Thời gian hiện tại tính theo giây
                    let current = Math.ceil(Date.now() / 1000);
                    const result = res.data.find((item) => {
                        return Math.ceil(new Date(item.timeLine).getTime() / 1000) <= current && Math.ceil(new Date(item.timeLine).getTime() / 1000) + item.period >= current;
                    });
                    if (result && result.id !== lastProcessedResultId) {
                        lastProcessedResultId = result.id;
                        //Show thẻ div
                        setShow(true);
                        //Thiết lập thời gian Flash Sale
                        setPeriod(result.period * 1000 + new Date(result.timeLine).getTime());
                        axios
                            .post('http://localhost:8080/api/getAllProductFlashSale', { id: result.id })
                            .then((res) => SetProduct_FlashSale(res.data))
                            .catch((err) => console.log(err));
                    }
                }, 1000);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Container id={styles.Grid}>
            {/* Carosel hiện thị hình ảnh giới thiệu của shop */}
            <Carousel autoPlay className="mt-4" showThumbs={false}>
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-9f55e03457f53c21641e034794aa44a0_xxhdpi" alt="Image 1" />
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-459f938d522330385afdc198c7105a5a_xxhdpi" alt="Image 2" />
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-a09d079d6ca55bc3b1a285c197702ab4_xxhdpi" alt="Image 3" />
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-64be537e734e9be926f6bb0d677c81c9_xxhdpi" alt="Image 4" />
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-fb6981047fd0fb38c526ec567aa6071b_xxhdpi" alt="Image 5" />
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-1e6ffee59e9bbc5b38c6ac2280ee6d4b_xxhdpi" alt="Image 6" />
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-3ea9262b135bdb95adf248cfcf63b204_xxhdpi" alt="Image 7" />
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-0a4ff7dbb6662927d7c13b824ef8eacd_xxhdpi" alt="Image 8" />
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-18d147e042090e6c9e193b32cf366b9e_xxhdpi" alt="Image 9" />
                <img className="rounded-3" src="https://cf.shopee.vn/file/vn-50009109-fe5d20504c2c09d56c901779bf675d44_xxhdpi" alt="Image 10" />
            </Carousel>
            {/* Các sản phẩm flash sale */}
            {show && (
                <div id={styles.FlashSale} className="mt-4 rounded-4 position-relative">
                    <div className="d-flex justify-content-between align-items-center">
                        <Image src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/title-sale.png?1708054180263" />
                        {period && <Countdown date={period} renderer={renderer} onComplete={() => handelComplete()} />}
                    </div>
                    <CarouselMulti
                        className="flex-grow-1"
                        responsive={responsive2}
                        customLeftArrow={
                            <button id={styles.BtnLeft1} className="position-absolute border-0 px-2 py-4 bg-black text-white">
                                <FaChevronLeft />
                            </button>
                        }
                        customRightArrow={
                            <button id={styles.BtnRight1} className="position-absolute border-0 px-2 py-4 bg-black text-white">
                                <FaChevronRight />
                            </button>
                        }
                    >
                        {product_FlashSale.slice(0, 12).map((item) => (
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
                                    <span onClick={(e) => handelClickHeart(e, e.currentTarget, item.Id)} className={JSON.parse(sessionStorage.getItem('Like')).Like ? 'position-absolute bg-danger text-warning' : 'position-absolute'}>
                                        <AiOutlineHeart />
                                    </span>
                                    <span onClick={(e) => handelClickCart(e, item.Id)} className="position-absolute">
                                        <RiShoppingCartLine />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </CarouselMulti>
                    <div className="text-center mt-4">
                        <Link to="/FlashSale" className="fs-3 text-white py-2 px-5 btn btn-white border border-white">
                            Xem thêm
                        </Link>
                    </div>
                </div>
            )}
            {/* hình ảnh */}
            <div className="mt-4 d-flex align-items-center justify-content-between">
                <Image width="49%" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/imgbanner1.jpg?1708054180263" alt="" />
                <Image width="49%" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/imgbanner2.jpg?1708054180263" alt="" />
            </div>
            {/* Các sản phẩm nổi bật */}
            <div id={styles.Product_common} className="mt-4 bg-white">
                <div className="px-4 pt-3">
                    <h2 className="text-danger fw-semibold">SẢN PHẨM NỔI BẬT</h2>
                </div>
                <div className="d-flex flex-wrap">
                    {product_Outstanding_products.slice(0, 12).map((item) => (
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
                <div className="text-center pb-4">
                    <Link to="/Outstanding_products" className="fs-3 text-dark py-2 px-5 btn btn-white border border-black">
                        Xem thêm
                    </Link>
                </div>
            </div>
            {/* Xả Kho Hàng Tốt */}
            <div id={styles.Product_tech} className="mt-4 bg-white p-3">
                <div className="d-flex">
                    <div>
                        <img width={270} className="mb-3" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/img_col1.jpg?1708054180263" alt="" loading="lazy" />
                        <br />
                        <img width={270} src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/img_col2.jpg?1708054180263" alt="" loading="lazy" />
                    </div>
                    {/* Danh Sách các sản phẩm */}
                    <div>
                        <div className="fs-2 fw-semibold text-danger py-3 px-4">XẢ KHO GIÁ TỐT</div>
                        <div className="d-flex flex-wrap">
                            {product_Discharge.slice(0, 8).map((item) => (
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
                                        <span onClick={(e) => handelClickHeart(e, e.currentTarget, item.Id)} className={item.Like ? 'position-absolute bg-danger text-warning' : 'position-absolute'}>
                                            <AiOutlineHeart />
                                        </span>
                                        <span onClick={(e) => handelClickCart(e, item.Id)} className="position-absolute">
                                            <RiShoppingCartLine />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center pb-4">
                            <Link to="/Discharge" className="fs-3 text-dark py-2 px-5 btn btn-white border border-black">
                                Xem thêm
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Phụ kiện hot */}
            <div id={styles.Accessory} className="mt-4 bg-white p-3">
                <div className="d-flex justify-content-between mb-3">
                    <h2 className="text-danger fw-semibold">PHỤ KIỆN HOT</h2>
                    <Link to="/Accessory" className="d-flex align-items-center">
                        Xem tất cả <FaChevronRight />
                    </Link>
                </div>
                <div className="d-flex justify-content-between">
                    <Image width="49.5%" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/imgbanner1_pk.jpg?1708054180263" alt="" />
                    <Image width="49.5%" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/imgbanner2_pk.jpg?1708054180263" alt="" />
                </div>
                <CarouselMulti
                    className="flex-grow-1"
                    responsive={responsive3}
                    customLeftArrow={
                        <button id={styles.BtnLeft1} className="position-absolute border-0 px-2 py-4 bg-black text-white">
                            <FaChevronLeft />
                        </button>
                    }
                    customRightArrow={
                        <button id={styles.BtnRight1} className="position-absolute border-0 px-2 py-4 bg-black text-white">
                            <FaChevronRight />
                        </button>
                    }
                    // autoPlay
                >
                    {accessory.slice(0, 12).map((item) => (
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
                                <span onClick={(e) => handelClickHeart(e, e.currentTarget, item.Id)} className={item.Like ? 'position-absolute bg-danger text-warning' : 'position-absolute'}>
                                    <AiOutlineHeart />
                                </span>
                                <span onClick={(e) => handelClickCart(e, item.Id)} className="position-absolute">
                                    <RiShoppingCartLine />
                                </span>
                            </div>
                        </Link>
                    ))}
                </CarouselMulti>
            </div>
            {/* Gợi ý hôm nay */}
            <div id={styles.Suggest} className="mt-4 bg-white">
                <h2 className="text-danger text-center fw-semibold">GỢI Ý HÔM NAY</h2>
                <div className="d-flex flex-wrap">
                    {product
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 12)
                        .map((item) => (
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
                                    <span onClick={(e) => handelClickHeart(e, e.currentTarget, item.Id)} className={item.Like ? 'position-absolute bg-danger text-warning' : 'position-absolute'}>
                                        <AiOutlineHeart />
                                    </span>
                                    <span onClick={(e) => handelClickCart(e, item.Id)} className="position-absolute">
                                        <RiShoppingCartLine />
                                    </span>
                                </div>
                            </Link>
                        ))}
                </div>
                <div className="text-center pb-4">
                    <Link to="/Suggest" className="fs-3 text-dark py-2 px-5 btn btn-white border border-black">
                        Xem thêm
                    </Link>
                </div>
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
        </Container>
    );
}
