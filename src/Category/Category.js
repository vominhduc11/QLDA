import { memo, useEffect, useRef, useState } from "react";
import { Container, Row, Col, Image, Form, Button, Modal, CloseButton } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import { FaCaretRight, FaChevronDown, FaChevronLeft, FaChevronRight, FaListUl, FaRegCheckCircle, FaRegStar } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
// import Rating from 'react-rating-stars-component';
import Rating from 'react-rating-stars-component'
// import ReactPaginate from 'react-paginate';
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";
import numeral from 'numeral';
import $ from 'jquery';
import { Link as LinkScroll } from 'react-scroll';
import LoadPage from "../LoadPage/LoadPage";
import styles from "./Style.module.scss";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { RiBarChartFill, RiShoppingCartLine } from "react-icons/ri";
import ReactPaginate from "react-paginate";
import { NumericFormat } from "react-number-format";
import { FiMinus, FiPlus } from "react-icons/fi";

function Category() {
    // const [index, setIndex] = useState(0);
    // const [banners, setBanners] = useState([]);
    // const [storeCategorys, setStoreCategorys] = useState([]);
    // const [childrenCategorys, setChildrenCategorys] = useState([]);
    const [trade_signals, setTrade_signals] = useState([]);
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    // const [active, setActive] = useState(0);
    const [detailCategory, setDetailCategory] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showNotificate_favorite, setShowNotificate_favorite] = useState(false);
    const [notificate_favorite, setNotificate_favorite] = useState(true);
    const [product_cart, setProduct_cart] = useState([]);
    // const [address, setAddress] = useState([]);
    // hàm đóng mở modalLogin
    const handleCloseLogin = () => setShowModalLogin(false);
    const handleShowLogin = () => setShowModalLogin(true);
    // hàm đóng mở modal
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    // lấy parameter trong Category
    const queryParams = new URLSearchParams(useLocation().search);
    const Id_Category = Number(queryParams.get('Id'));

    //Các ref dùng để lọc sản phẩm
    let ListProductInit = useRef([]);
    let ListTrade_signals = useRef([]);
    let ListPriceStartAndEnd = useRef([]);
    let Evaluate = useRef(undefined);
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
    // Xử lí xử kiện khi click heard
    function handelClickHeart(e, ele, Id) {
        //ngăn cản hành vi mặc định và nổi bọt
        e.preventDefault();
        e.stopPropagation();
        // Yêu cầu đăng nhập trước khi Like sản phẩm
        if (sessionStorage.getItem("User")) {
            // Thay đổi giao điện nút heart
            if (ele.classList.contains('bg-danger')) {
                axios.delete(`http://localhost:8080/api/deleteProductHeart/${Id}/${JSON.parse(sessionStorage.getItem("User")).Id}`)
                    .then(res => {
                        if (res.data === "success") {
                            ele.classList.remove('bg-danger', 'text-warning')
                            // Xóa sản phẩm yêu thích trong session
                            const products = JSON.parse(sessionStorage.getItem("Like")).filter(item => item.Id !== Id);
                            sessionStorage.setItem("Like", JSON.stringify(products));
                            // Xóa sản phẩm yêu thích
                            setNotificate_favorite(false)
                            setShowNotificate_favorite(true)
                        }
                    })
                    .catch(err => console.log(err));
            } else {
                axios.post("http://localhost:8080/api/addProductHeart", { Id: Id, Id_User: JSON.parse(sessionStorage.getItem("User")).Id })
                    .then(res => {
                        if (res.data === "success") {
                            ele.classList.add('bg-danger', 'text-warning')
                            setNotificate_favorite(true);
                            setShowNotificate_favorite(true);
                            //Thêm sản phẩm yêu thích vào session
                            if (sessionStorage.getItem("Like")) {
                                const products = JSON.parse(sessionStorage.getItem("Like"));
                                products.push(product.find(item => item.Id === Id));
                                sessionStorage.setItem("Like", JSON.stringify(products));
                            } else {
                                const products = [];
                                products.push(product.find(item => item.Id === Id));
                                sessionStorage.setItem("Like", JSON.stringify(products));
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
        if (sessionStorage.getItem("User")) {
            // Tìm sản phẩm trong danh sách product
            const prd = product.find(item => item.Id === Id);
            // Lấy danh sách sản phẩm từ session
            const ListProduct = JSON.parse(sessionStorage.getItem("cart"));
            //Kiểm tra có bị trùng sản phẩm hay không
            if (ListProduct.find(item => item.Id === prd.Id)) {
                const product = ListProduct.find(item => item.Id === prd.Id);
                product.quantity = product.quantity + 1;
                // lưu vào cơ sở dữ liệu
                axios.post("http://localhost:8080/api/AddProduct_Cart", { Id: Id, Id_User: JSON.parse(sessionStorage.getItem("User")).Id, quantity: product.quantity })
                    .then(res => {
                        if (res.data === 'success') {
                            // Lưu vào session
                            sessionStorage.setItem("cart", JSON.stringify(ListProduct));

                            setProduct_cart(JSON.parse(sessionStorage.getItem("cart")));
                            // mở modal
                            handleShow();
                        }
                    })
                    .catch(err => console.log(err));
            } else {
                // Thêm sản phẩm vừa tìm được vào danh sách
                prd.quantity = 1;
                ListProduct.push(prd);
                // lưu vào cơ sở dữ liệu
                axios.post("http://localhost:8080/api/AddProduct_Cart", { Id: Id, Id_User: JSON.parse(sessionStorage.getItem("User")).Id, quantity: 1 })
                    .then(res => {
                        if (res.data === 'success') {
                            // Lưu vào session
                            sessionStorage.setItem("cart", JSON.stringify(ListProduct));

                            setProduct_cart(JSON.parse(sessionStorage.getItem("cart")));
                            // mở modal
                            handleShow();
                        }
                    })
                    .catch(err => console.log(err));
            }
        } else {
            handleShowLogin();
        }
    };
    // sử lí sự kiện khi thay đổi phân trang
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
        // Thực hiện các thao tác cập nhật dữ liệu hiển thị tương ứng với trang mới
    };
    //Lọc sản phẩm theo thương hiệu
    function filterTrade_signals(param) {
        setCurrentPage(0);
        if (param.checked) {
            ListTrade_signals.current.push(param.nextElementSibling.innerText);
        } else {
            const _ListTrade_signals = ListTrade_signals.current.filter(ele => ele !== param.nextElementSibling.innerText);
            ListTrade_signals.current = _ListTrade_signals;
        }
        libFilterProduct(ListProductInit.current, ListTrade_signals.current, ListPriceStartAndEnd.current, Evaluate.current);
    }
    //Lọc sản phẩm theo giá sản phẩm
    function filterPrice(startValue, endValue) {
        setCurrentPage(0);
        if (startValue !== '' && endValue !== '') {
            ListPriceStartAndEnd.current = [];
            ListPriceStartAndEnd.current.push(Number(startValue), Number(endValue));
        } else {
            ListPriceStartAndEnd.current = [];
        }
        libFilterProduct(ListProductInit.current, ListTrade_signals.current, ListPriceStartAndEnd.current, Evaluate.current);
    }
    //Lọc sản phẩm theo đánh giá sao
    function FilterEvaluate(param) {
        setCurrentPage(0);
        Evaluate.current = Number(param.getAttribute("title"));
        libFilterProduct(ListProductInit.current, ListTrade_signals.current, ListPriceStartAndEnd.current, Evaluate.current);
    }
    //Xóa tất cả điều kiện lọc
    function DeleteAllConditionFilter() {
        ListPriceStartAndEnd.current = [];
        ListTrade_signals.current = [];
        Evaluate.current = undefined;

        document.querySelectorAll(".itemTrade_signals").forEach(ele => {
            if (ele.checked) {
                ele.checked = false;
            }
        })
        document.querySelector(".startValue").value = '';
        document.querySelector(".endValue").value = '';

        libFilterProduct(ListProductInit.current, ListTrade_signals.current, ListPriceStartAndEnd.current, Evaluate.current);
    }
    //thư viện lọc sản phẩm(ListProduct: [{},{},{}], ListAddress)
    function libFilterProduct(ListProduct, ListTrade_signals, _ListPriceStartAndEnd, Evaluate) {
        let Filter1;
        if (ListTrade_signals.length === 0) {
            Filter1 = ListProduct;
        } else {
            Filter1 = ListProduct.filter(Product => ListTrade_signals.includes(Product['NameTradeSignal']));
        }
        let Filter2;
        if (_ListPriceStartAndEnd.length === 0) {
            Filter2 = Filter1;
        } else {
            Filter2 = Filter1.filter(Product => Product.Reduced_price >= _ListPriceStartAndEnd[0] && Product.Reduced_price <= _ListPriceStartAndEnd[1]);
        }
        let Filter3;
        if (Evaluate === undefined) {
            Filter3 = Filter2;
        } else {
            Filter3 = Filter2.filter(Product => Product.Sao >= Evaluate);
        }
        setProduct(Filter3);
    }
    //gọi api banner
    useEffect(() => {
        axios.post('http://localhost:8080/api/getDetailCategory', { Id: Id_Category })
            .then(res => setDetailCategory(res.data))
            .catch(err => console.log(err))


        axios.post('http://localhost:8080/api/getAllTradeSignals_Category', { Id: Id_Category })
            .then(response => setTrade_signals(response.data))
            .catch(error => console.log(error))

        axios.post('http://localhost:8080/api/getAllProduct_Category', { Id: Id_Category })
            .then(response => {
                ListProductInit.current = response.data;
                setProduct(response.data);
            })
            .catch(error => console.log(error))
    }, [])
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
        <>
            {Object.keys(detailCategory).length === 0 && <LoadPage />}
            {Object.keys(detailCategory).length === 0 || <div style={{ backgroundColor: '#f5f5f5' }}>
                {/* Đường dẫn */}
                <div className="bg-white py-3">
                    <Container style={{ width: '1200px' }} className="d-flex align-items-center">
                        <Link to="/"><AiOutlineHome size={22} color="#f72c0f" /></Link>
                        <span className="mx-3"><FaChevronRight color="#f72c0f" /></span>
                        <span style={{ color: '#f72c0f' }} className="mt-1">{detailCategory.NameCategory}</span>
                    </Container>
                </div>

                <Container style={{ width: '1200px' }} className="pt-4">
                    {/* The slideshow/carousel */}
                    <Carousel className="mt-4" showThumbs={false}>
                        {detailCategory.Banners.map(item =>
                            <img key={item.Id} className="rounded-3" src={item.Image} alt="Image 1" />
                        )}
                    </Carousel>
                    {/* show sản phẩm */}
                    <div id='section1' className="mt-4">
                        <Row>
                            <Col style={{ width: '20%' }} className="text-dark">
                                <div>
                                    <div className="d-flex align-items-center py-2" style={{ borderBottom: '1px solid rgba(0, 0, 0, .05)' }}>
                                        <CiFilter />
                                        <span style={{ fontWeight: 700, marginLeft: 12 }}>BỘ LỌC TÌM KIẾM</span>
                                    </div>
                                    {trade_signals.length === 0 || <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .05)' }}>
                                        <p className="mb-0 py-2">Thương Hiệu</p>
                                        <ul id="ListTrade_signals" className="list-unstyled mb-0">
                                            {trade_signals.map(item =>
                                                <li key={item.Id} style={{ height: 36 }} className="py-1">
                                                    <input className="itemTrade_signals" onChange={(e) => filterTrade_signals(e.currentTarget)} type="checkbox" style={{ marginRight: 4 }} />
                                                    <span>{item.Name}</span>
                                                </li>
                                            )}
                                        </ul>
                                    </div>}
                                    <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .05)' }} className="pb-3">
                                        <p className="mb-0 py-2">Khoảng Giá</p>
                                        <div className="d-flex align-items-center">
                                            <Form.Control size="lg" className="startValue" style={{ width: '40%' }}></Form.Control>
                                            <div style={{ width: '20%' }} className="d-flex align-items-center justify-content-center">
                                                <span style={{ width: 15, borderBottom: '1px solid rgba(0, 0, 0, .05)' }}></span>
                                            </div>
                                            <Form.Control size="lg" className="endValue" style={{ width: '40%' }}></Form.Control>
                                        </div>
                                        <Button
                                            onClick={() => filterPrice(document.querySelector(".startValue").value, document.querySelector(".endValue").value)}
                                            className="w-100 bg-danger text-white border-0 mt-3 fs-4 py-2"
                                        >Áp Dụng
                                        </Button>
                                    </div>
                                    <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .05)' }}>
                                        <p className="mb-0 py-2">Đánh Giá</p>
                                        <ul className="list-unstyled">
                                            <li onClick={(e) => { FilterEvaluate(e.currentTarget) }} title="5" className="py-1 d-flex align-items-center pointer z-index-1">
                                                <Rating
                                                    count={5}
                                                    value={5}
                                                    size={18}
                                                    isHalf={true}
                                                    a11y={false}
                                                    edit={false} // Khóa chức năng thay đổi số sao
                                                />
                                            </li>
                                            <li onClick={(e) => { FilterEvaluate(e.currentTarget) }} title="4" className="py-1 d-flex align-items-center pointer">
                                                <Rating
                                                    count={5}
                                                    value={4}
                                                    size={18}
                                                    isHalf={true}
                                                    a11y={false}
                                                    edit={false} // Khóa chức năng thay đổi số sao
                                                />
                                                <span style={{ marginLeft: 4 }}>trở lên</span>
                                            </li>
                                            <li onClick={(e) => { FilterEvaluate(e.currentTarget) }} title="3" className="py-1 d-flex align-items-center pointer">
                                                <Rating
                                                    count={5}
                                                    value={3}
                                                    size={18}
                                                    isHalf={true}
                                                    a11y={false}
                                                    edit={false} // Khóa chức năng thay đổi số sao
                                                />
                                                <span style={{ marginLeft: 4 }}>trở lên</span>
                                            </li>
                                            <li onClick={(e) => { FilterEvaluate(e.currentTarget) }} title="2" className="py-1 d-flex align-items-center pointer">
                                                <Rating
                                                    count={5}
                                                    value={2}
                                                    size={18}
                                                    isHalf={true}
                                                    a11y={false}
                                                    edit={false} // Khóa chức năng thay đổi số sao
                                                />
                                                <span style={{ marginLeft: 4 }}>trở lên</span>
                                            </li>
                                            <li onClick={(e) => { FilterEvaluate(e.currentTarget) }} title="1" className="py-1 d-flex align-items-center pointer">
                                                <Rating
                                                    count={5}
                                                    value={1}
                                                    size={18}
                                                    isHalf={true}
                                                    a11y={false}
                                                    edit={false} // Khóa chức năng thay đổi số sao
                                                />
                                                <span style={{ marginLeft: 4 }}>trở lên</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <LinkScroll
                                        className="d-block rounded-3"
                                        to="section1"
                                        spy={true}
                                        // smooth={true}
                                        offset={-60}
                                        duration={400}
                                    >
                                        <Button id="btnDeleteListFilter" onClick={() => DeleteAllConditionFilter()} className="bg-danger border-0 w-100 fs-4 py-2">Xóa Tât Cả</Button>
                                    </LinkScroll>
                                </div>
                            </Col>
                            <Col style={{ width: '80%' }} md={9}>
                                {product.length === 0 ||
                                    <Container fluid>
                                        <Row>
                                            {product.slice(currentPage * 12).slice(0, 12).map(item =>
                                                <Link to={`/product/${item.Name}?Id=${item.Id}`} id={styles.Item} className="px-2 py-3 d-block">
                                                    <div className="bg-white position-relative">
                                                        <img width="100%" src={item.Image} alt="" loading="lazy" />
                                                        <div className="p-3">
                                                            <h3 className="fw-bold morethan2lines">{item.Name}</h3>
                                                            <p className="fw-semibold text-danger mb-0 fs-3"><NumericFormat value={item.Reduced_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup>đ</sup></p>
                                                            <p style={{ height: '24px' }} className="text-decoration-line-through mb-0">
                                                                {item.Price === 0 ? '' : <><NumericFormat value={item.Price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup><u>đ</u></sup></>}
                                                            </p>
                                                        </div>
                                                        <span style={{ opacity: item.Price === 0 ? 0 : 1 }} className="position-absolute text-center fw-semibold">Giảm {Math.round(((item.Price - item.Reduced_price) / item.Price) * 100)}%</span>
                                                        <span onClick={(e) => handelClickHeart(e, e.currentTarget, item.Id)} className={JSON.parse(sessionStorage.getItem("Like")).find(ele => ele.Id === item.Id) ? "position-absolute bg-danger text-warning" : "position-absolute"}><AiOutlineHeart /></span>
                                                        <span onClick={(e) => handelClickCart(e, item.Id)} className="position-absolute"><RiShoppingCartLine /></span>
                                                    </div>
                                                </Link>
                                            )}
                                        </Row>
                                        <div className="d-flex justify-content-center py-5">
                                            {product.length < 12 || <ReactPaginate
                                                previousLabel={<FaChevronLeft className="left" />}
                                                nextLabel={<FaChevronRight className="right" />}
                                                breakLabel={"..."}
                                                pageCount={Math.ceil(product.length / 12)} // Tổng số trang
                                                marginPagesDisplayed={2}
                                                pageRangeDisplayed={5}
                                                forcePage={currentPage}
                                                onPageChange={handlePageChange}
                                                containerClassName={"pagination"}
                                                activeClassName={"active"}
                                            />}
                                        </div>
                                    </Container>
                                }
                                {product.length === 0 && <div style={{ height: '100%', color: '#ababab' }} className="d-flex justify-content-center align-items-center fw-semibold fs-3">
                                    Sản phẩm đang được cập nhật
                                </div>}
                            </Col>
                        </Row>
                    </div>
                </Container >
            </div >}
            <Modal show={showModal} onHide={handleClose} size="xl">
                <Modal.Header className="bg-danger">
                    <Modal.Title className="d-flex align-items-center text-white"><FaRegCheckCircle style={{ marginRight: 4 }} />Bạn đã thêm vào giỏ hàng thành công</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {product_cart.length === 0 && <>
                        <div className='text-center'>
                            <Image width={100} src='https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f4.png' alt='' />
                            <p className='mt-2'>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                            <Link to="/" className='border-0 fs-4 py-2 px-4 mt-5 btn btn-danger text-white'>Tiếp tục mua sắm</Link>
                        </div>
                    </>}
                    {product_cart.length !== 0 && <>
                        <p>Giỏ hàng của bạn hiện có {JSON.parse(sessionStorage.getItem("cart")).reduce((total, init) => total + init.sl, 0)} sản phẩm</p>
                        <div>
                            <div className="d-flex">
                                <div style={{ flexBasis: '55%' }} className="fw-semibold">Thông tin sản phẩm</div>
                                <div style={{ flexBasis: '15%' }} className="fw-semibold text-center">Đơn giá</div>
                                <div style={{ flexBasis: '15%' }} className="fw-semibold text-center">Số lượng</div>
                                <div style={{ flexBasis: '15%' }} className="fw-semibold text-center">Thành tiền</div>
                            </div>
                            <div className="overflow-auto scrollbar" style={{ maxHeight: 200 }}>
                                {product_cart.map(item =>
                                    <div key={item.Id} className="d-flex align-items-center">
                                        <div style={{ flexBasis: '55%' }}>
                                            <div className="d-flex align-items-center">
                                                <Image width={100} src={item.Image} alt="" />
                                                <div>
                                                    <p>{item.Name}</p>
                                                    <p className="text-danger"><span onClick={() => DeleteProductCart(item.Id)} style={{ cursor: 'pointer' }}>Xóa</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ flexBasis: '15%' }} className="fw-semibold text-center text-danger"><NumericFormat value={item.Reduced_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup></div>
                                        <div style={{ flexBasis: '15%' }} className="fw-semibold text-center">
                                            {item.quantity}
                                        </div>
                                        <div style={{ flexBasis: '15%' }} className="fw-semibold text-center text-danger">
                                            <NumericFormat value={item.Reduced_price * item.quantity} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>}
                    {product_cart.length === 0 || <p className="text-end"><span style={{ marginRight: 42 }}>Tổng tiền:</span><span className="text-danger fw-semibold">
                        <NumericFormat value={JSON.parse(sessionStorage.getItem("cart")).reduce((total, init) => total + init.Reduced_price * init.quantity, 0)} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} /><sup className="text-decoration-underline">đ</sup></span>
                    </p>}
                </Modal.Body>
                {product_cart.length === 0 || <Modal.Footer>
                    <Link to="/Pay" className="fs-5 py-2 btn btn-danger" style={{ padding: '0px 60px' }} onClick={handleClose}>
                        Thanh toán
                    </Link>
                </Modal.Footer>}
            </Modal>
            <Modal show={showModalLogin} onHide={handleCloseLogin} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex align-items-center justify-content-center text-black w-100 fw-semibold fs-2">Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Vui lòng đăng nhập trước khi thực hiện.
                </Modal.Body>
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
                <Modal.Body className={notificate_favorite ? "bg-success text-white text-center" : "bg-secondary text-white text-center"}>
                    {notificate_favorite ? "Sản phẩm đã được thêm vào danh sách yêu thích" : "Sản phẩm đã được xóa khỏi danh sách yêu thích"}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default memo(Category);
