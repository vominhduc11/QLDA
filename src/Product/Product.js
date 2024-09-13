import { Button, ButtonGroup, Col, Container, Image, Modal, ProgressBar, Row } from 'react-bootstrap';

import styles from './Style.module.scss';
import { AiFillLike, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { FaChevronRight, FaHeart, FaMinus, FaPlug, FaPlus, FaRegCheckCircle } from 'react-icons/fa';

import { Carousel as Crs } from 'react-responsive-carousel';
import Carousel from 'react-multi-carousel';
import { Carousel as CarouselResponsive } from 'react-responsive-carousel';
import Rating from 'react-rating-stars-component';
import { useEffect, useRef, useState } from 'react';
import { CiHeart, CiStar } from 'react-icons/ci';
import { IoGitCompareSharp } from 'react-icons/io5';
import { MdOutlineStarOutline } from 'react-icons/md';
import { IoIosStarHalf, IoIosWarning, IoMdStar } from 'react-icons/io';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { GoDotFill, GoPlus } from 'react-icons/go';
import { RiBarChartFill, RiShoppingCartLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import LoadPage from '../LoadPage/LoadPage';
import { NumericFormat } from 'react-number-format';
import JsxParser from 'react-jsx-parser';
import { Link as LinkScroll } from 'react-scroll';
import Countdown from 'react-countdown';

export default function Product() {
    const [selectItem, setSelectItem] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [detail_product, setDetail_product] = useState({});
    let [number_product, setNumber_product] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [product, setProduct] = useState({});
    const [allProduct, setAllProduct] = useState([]);
    const [productCategory, setProductCategory] = useState([]);
    const [product_cart, setProduct_cart] = useState([]);
    const [showNotificate_favorite, setShowNotificate_favorite] = useState(false);
    const [notificate_favorite, setNotificate_favorite] = useState(true);
    const [period, setPeriod] = useState();
    const [flashSale, setFlashSale] = useState(false);
    const [showModalComment, setShowModalComment] = useState(false);
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [user, setUser] = useState({});
    const [rating, setRating] = useState(0);

    const Product_informationTag = useRef();
    const numberTag = useRef();
    const flashSaleTag = useRef();
    const valNameTag = useRef();
    const valEmailTag = useRef();
    const valContentTag = useRef();

    // tách 1 mảng thành mảng gộp 3 phần tử thành mảng
    function splitIntoChunks(arr, chunkSize = 3) {
        let chunks = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            let chunk = arr.slice(i, i + chunkSize);
            chunks.push(chunk);
        }
        return chunks;
    }
    // lấy parameter trong Category
    const queryParams = new URLSearchParams(useLocation().search);
    const Id_Product = Number(queryParams.get('Id'));
    //responsive cho mutil carosel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5.8,
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
    const handleCloseComment = () => setShowModalComment(false);
    const handleShowComment = () => setShowModalComment(true);

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
            const prd = allProduct.find((item) => item.Id === Id);
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

    function handelBuy(e, Id) {
        // ngăn chặn hành vi mặc định và nổi bọt
        e.stopPropagation();
        e.preventDefault();
        // Yêu cầu đăng nhập trước khi Like sản phẩm
        if (sessionStorage.getItem('User')) {
            // Tìm sản phẩm trong danh sách product
            const prd = allProduct.find((item) => item.Id === Id);
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
                            window.location.href = 'http://localhost:3000/Pay';
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
                            window.location.href = 'http://localhost:3000/Pay';
                        }
                    })
                    .catch((err) => console.log(err));
            }
        } else {
            handleShowLogin();
        }
    }

    function ShowMore() {
        if (isOpen === false) {
            setIsOpen(true);
            Product_informationTag.current.style.maxHeight = '';
        } else {
            setIsOpen(false);
            Product_informationTag.current.style.maxHeight = '420px';
        }
    }
    // thay đổi hình ảnh
    function selectImg(ele, index) {
        setSelectItem(index);
        if (document.querySelector('.active')) {
            document.querySelector('.active').classList.remove('active');
        }
        ele.classList.add('active');
    }

    function handleComment() {
        const Name = valNameTag.current.value;
        const Email = valEmailTag.current.value;
        const Content = valContentTag.current.value;
        const IdUser = JSON.parse(sessionStorage.getItem('User')).Id;
        axios
            .post('http://localhost:8080/api/addComment', { Name: Name, Email: Email, Content: Content, rating: rating, IdUser: IdUser, IdProduct: product.Id })
            .then((res) => {
                console.log(res.data);
                handleCloseComment();
            })
            .catch((err) => console.log(err));
    }

    // Hàm render props để tùy chỉnh giao diện hiển thị đồng hồ đếm ngược
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Khi hoàn thành
            return;
        } else {
            // Hiển thị bộ đếm ngược
            return (
                <div className={detail_product.FlashSale ? '' : 'd-none'}>
                    <span className="d-inline-flex bg-white justify-content-center align-items-center rounded-1 fw-semibold" style={{ height: 24, width: 24 }}>
                        {hours < 10 ? '0' + hours : hours}
                    </span>
                    <span className="text-white mx-2">:</span>
                    <span className="d-inline-flex bg-white justify-content-center align-items-center rounded-1 fw-semibold" style={{ height: 24, width: 24 }}>
                        {minutes < 10 ? '0' + minutes : minutes}
                    </span>
                    <span className="text-white mx-2">:</span>
                    <span className="d-inline-flex bg-white justify-content-center align-items-center rounded-1 fw-semibold" style={{ height: 24, width: 24 }}>
                        {seconds < 10 ? '0' + seconds : seconds}
                    </span>
                </div>
            );
        }
    };

    const handelComplete = () => {
        setFlashSale(false);
    };

    //gọi api
    useEffect(() => {
        axios
            .post('http://localhost:8080/api/find_product', { Id: Id_Product })
            .then((res) => {
                setProduct(res.data);
                axios
                    .post('http://localhost:8080/api/getAllProduct_Category', { Id: res.data.IdCategory })
                    .then((res) => setProductCategory(res.data.sort(() => Math.random() - 0.5)))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));

        axios
            .get('http://localhost:8080/api/getAllProduct')
            .then((res) => setAllProduct(res.data))
            .catch((err) => console.log(err));
    }, []);
    useEffect(() => {
        axios
            .post('http://localhost:8080/api/getDetail_product', { Id: Id_Product })
            .then((res) => {
                setDetail_product(res.data);
                if (res.data.FlashSale) {
                    setFlashSale(true);
                    axios
                        .post('http://localhost:8080/api/findTimeFlashSale', { Id: Id_Product })
                        .then((res) => setPeriod(res.data.Period * 1000 + new Date(res.data.TimeLine).getTime()))
                        .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log(err));
    }, [showModalComment]);
    // Thiết lập thời gian tự động tắt thông báo
    useEffect(() => {
        if (showNotificate_favorite) {
            const timer = setTimeout(() => {
                setShowNotificate_favorite(false);
            }, 1500); // Đóng modal sau 2 giây
            return () => clearTimeout(timer); // Xóa timer khi component bị unmount hoặc modal đóng
        }
    }, [showNotificate_favorite]);

    useEffect(() => {
        if (sessionStorage.getItem('User'))
            axios
                .post('http://localhost:8080/api/FindUser', { Id: JSON.parse(sessionStorage.getItem('User')).Id })
                .then((res) => setUser(res.data))
                .catch((err) => console.log(err));
    }, []);
    return (
        <>
            {Object.keys(detail_product).length === 0 && <LoadPage />}
            {Object.keys(detail_product).length === 0 || (
                <div>
                    {/* Đường dẫn */}
                    <div className="bg-white py-3">
                        <Container id={styles.PathName} className="d-flex align-items-center">
                            <Link to="/">
                                <AiOutlineHome size={22} color="#f72c0f" />
                            </Link>
                            <span className="mx-3">
                                <FaChevronRight color="#f72c0f" />
                            </span>
                            <Link to={`/category/${detail_product.NameCategory}?Id=${detail_product.IdCategory}`} className="mt-1">
                                {detail_product.NameCategory}
                            </Link>
                            <span className="mx-3">
                                <FaChevronRight color="#f72c0f" />
                            </span>
                            <span style={{ color: '#f72c0f', cursor: 'pointer' }} className="mt-1">
                                {detail_product.Name}
                            </span>
                        </Container>
                    </div>
                    {/* Chi tiết sản phẩm */}
                    <Container id={styles.Product} className="mt-4">
                        <Row>
                            <Col md={6} className="position-relative">
                                <Crs width="100%" selectedItem={selectItem} showIndicators={true} showStatus={false} showArrows={false} swipeAnimationHandler swipeable showThumbs={false}>
                                    {detail_product.ImageClassifications.map((item) => (
                                        <img key={item.Id} style={{ userSelect: 'none', width: 420 }} src={item.Image} alt="" />
                                    ))}
                                </Crs>
                                <Carousel responsive={responsive} className="mt-5">
                                    {detail_product.ImageClassifications.map((item, index) => (
                                        <img onClick={(e) => selectImg(e.currentTarget, index)} style={{ userSelect: 'none', border: '1px #ccc solid' }} width={80} src={item.Image} alt="" />
                                    ))}
                                </Carousel>
                                <span className="position-absolute d-inline-flex justify-content-center align-items-center" style={{ top: 12, left: 20, height: 36, width: 36 }}>
                                    <CiHeart size={30} />
                                </span>
                                <span className="position-absolute d-inline-flex justify-content-center align-items-center" style={{ top: 12, right: 20, height: 36, width: 36 }}>
                                    <IoGitCompareSharp size={26} />
                                </span>
                            </Col>
                            <Col md={6}>
                                {/* Tên sản phẩm */}
                                <h2>{detail_product.Name}</h2>
                                {/* Đánh giá sản phẩm */}
                                <LinkScroll className="d-inline-block" style={{ cursor: 'pointer' }} to="section1" spy={true} offset={0} duration={400}>
                                    <div className="d-flex align-items-center">
                                        <Rating
                                            count={5}
                                            emptyIcon={<MdOutlineStarOutline color="#ffd700" />}
                                            filledIcon={<IoMdStar />}
                                            halfIcon={<IoIosStarHalf />}
                                            value={detail_product.Star}
                                            size={20}
                                            isHalf={true}
                                            a11y={false}
                                            edit={false} // Khóa chức năng thay đổi số sao
                                        />
                                        <span className="mt-2">Xem đánh giá</span>
                                    </div>
                                </LinkScroll>
                                {/* giá */}
                                <div className="mt-2" id={styles.Price}>
                                    <div className="position-relative p-3 rounded-2" style={{ backgroundImage: 'linear-gradient(180deg, #f72c0f 0%, #EF9135 100%)' }}>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-white">Online giá rẻ quá</p>
                                            <p ref={flashSaleTag} className={flashSale ? 'text-white' : 'text-white d-none'}>
                                                Kết thúc sau
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-2 fw-bolder" style={{ color: '#FEE71A' }}>
                                                <NumericFormat value={detail_product.Reduced_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                                <sup>đ</sup>
                                            </p>
                                            {period && <Countdown date={period} renderer={renderer} onComplete={() => handelComplete()} />}
                                        </div>
                                        {detail_product.Price === 0 || (
                                            <div className="d-flex text-white">
                                                <p className="text-decoration-line-through">
                                                    <NumericFormat value={detail_product.Price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                                    <sup className="text-decoration-underline">đ</sup>
                                                </p>
                                                <p className="mx-2">({Math.round(((detail_product.Price - detail_product.Reduced_price) / detail_product.Price) * 100)}%)</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="py-3 px-4" style={{ background: 'rgba(255, 203, 173, 0.4)', border: '1px #f72c0f solid', borderTop: 'unset' }}>
                                        Tai nghe Xiaomi pod 2 trị giá 300K
                                    </div>
                                </div>
                                {/* Thương hiệu và thể loại */}
                                <div className="d-flex mt-3">
                                    <div>Thương hiệu: {detail_product.TradeSignal}</div>
                                    <div className="mx-4">Loại: {detail_product.NameCategory}</div>
                                </div>
                                {/* tăng giảm số lượng sản phẩm */}
                                <div className="mt-3">
                                    <button
                                        onClick={() => {
                                            if (number_product > 1) setNumber_product(--number_product);
                                        }}
                                        style={{ border: 'thin solid #ebebeb', height: 28, width: 28, backgroundColor: '#fff' }}
                                    >
                                        <FiMinus color="#ee4f83" />
                                    </button>
                                    <button ref={numberTag} style={{ border: 'thin solid #ebebeb', height: 28, width: 50, backgroundColor: '#fff', color: '#000' }} disabled>
                                        {number_product}
                                    </button>
                                    <button onClick={() => setNumber_product(++number_product)} style={{ border: 'thin solid #ebebeb', height: 28, width: 28, backgroundColor: '#fff' }}>
                                        <FiPlus color="#ee4f83" />
                                    </button>
                                </div>
                                {/* các nút thanh toán và thêm vào giỏ hàng */}
                                <Button onClick={(e) => handelBuy(e, detail_product.IdProduct)} className="w-100 mt-4 bg-danger border-0 fs-3 fw-semibold py-3">
                                    MUA NGAY QUÁ RẺ
                                </Button>
                                <Button onClick={(e) => handelClickCart(e, detail_product.IdProduct)} className="w-100 mt-2 border-0 fs-3 fw-semibold py-3">
                                    THÊM VÀO GIỎ
                                </Button>
                            </Col>
                        </Row>
                        {/* Sản phẩm tương tự */}
                        <div id={styles.Product_common} className="mt-4 bg-white">
                            <h2 className="fw-semibold px-4 pt-4">SẢN PHẨM TƯƠNG TỰ</h2>
                            <div className="d-flex flex-wrap">
                                {productCategory.slice(0, 6).map((item) => (
                                    <a href={`/product/${item.Name}?Id=${item.Id}`} id={styles.Item} className="px-2 py-3 d-block">
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
                                            <span onClick={(e) => handelClickHeart(e, e.currentTarget, item.Id)} className={JSON.parse(sessionStorage.getItem('Like')).find((ele) => ele.Id === item.Id) ? 'position-absolute bg-danger text-warning' : 'position-absolute'}>
                                                <AiOutlineHeart />
                                            </span>
                                            <span onClick={(e) => handelClickCart(e, item.Id)} className="position-absolute">
                                                <RiShoppingCartLine />
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        {/* Thông tin sản phẩm và thông số kỹ thuật */}
                        <Container fluid className="mt-4">
                            <Row>
                                <Col md={8}>
                                    <div className="bg-white px-3" style={{ marginLeft: '-8px' }}>
                                        <div>
                                            <h4 className="fw-semibold py-2">Thông tin sản phẩm</h4>
                                            <div ref={Product_informationTag} style={{ maxHeight: 420, overflow: 'hidden' }}>
                                                <JsxParser
                                                    jsx={detail_product.Describe.replace(/<img[^>]+src="([^">]+)"[^>]*>/g, (match, p1) => {
                                                        return `<div style="background-image: url('${p1}'); background-size: contain; background-repeat: no-repeat; width: 100%; height: 100%;"></div>`;
                                                    })}
                                                />
                                            </div>

                                            <div className="text-center mt-3">
                                                <Button className="bg-white fs-4 py-1 px-4" style={{ color: '#ff5700', border: '1px #ff5700 solid' }} onClick={() => ShowMore()}>
                                                    {isOpen ? 'Thu gọn' : 'Xem thêm'}
                                                </Button>
                                            </div>
                                        </div>
                                        <hr className="mt-5" />
                                        {detail_product.Comments.length === 0 && (
                                            <div id="section1" className="mt-4">
                                                <h3 className="fw-semibold">Đánh giá</h3>
                                                <div style={{ backgroundColor: '#f2f8ea' }} className="border border-secondary text-center py-5 mt-3">
                                                    <p>Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản phẩm này</p>
                                                    <Button onClick={handleShowComment} className="border-0 px-4 py-2 fs-5 mt-3" style={{ backgroundColor: '#80BB35' }}>
                                                        Gửi đánh giá của bạn
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                        {/* Các đánh giá của khách hàng */}
                                        {detail_product.Comments.length === 0 || (
                                            <div id="section1" className="mt-4">
                                                <h3 className="fw-semibold">Đánh giá</h3>
                                                <div style={{ backgroundColor: '#f2f8ea' }} className="border border-secondary text-center py-5 mt-3 d-flex">
                                                    <div style={{ width: '30%' }} className="d-flex flex-column align-items-center">
                                                        <p className="fs-1 mb-0" style={{ color: '#80BB35' }}>
                                                            4.3/5
                                                        </p>
                                                        <Rating
                                                            count={5}
                                                            emptyIcon={<MdOutlineStarOutline color="#ffd700" />}
                                                            filledIcon={<IoMdStar />}
                                                            halfIcon={<IoIosStarHalf />}
                                                            value={1.5}
                                                            size={20}
                                                            isHalf={true}
                                                            a11y={false}
                                                            edit={false} // Khóa chức năng thay đổi số sao
                                                        />
                                                        <p className="mb-0">(3 đánh giá)</p>
                                                        <Button onClick={handleShowComment} className="border-0 fs-4 py-2 px-4 mt-4" style={{ backgroundColor: '#80BB35' }}>
                                                            Gửi đánh giá của bạn
                                                        </Button>
                                                    </div>
                                                    <div style={{ width: '70%' }}>
                                                        <ul className="list-unstyled d-flex flex-wrap">
                                                            <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>
                                                                Tất cả
                                                            </li>
                                                            <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>
                                                                5 Điểm (2)
                                                            </li>
                                                            <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>
                                                                4 Điểm (0)
                                                            </li>
                                                            <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>
                                                                3 Điểm (1)
                                                            </li>
                                                            <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>
                                                                2 Điểm (0)
                                                            </li>
                                                            <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>
                                                                1 Điểm (0)
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <ul className="list-unstyled border border-secondary border-top-0">
                                                    {detail_product.Comments.map((item) => (
                                                        <li className="px-5 py-4">
                                                            <p className="d-flex align-items-center">
                                                                <span style={{ marginRight: 6 }} className="fw-semibold">
                                                                    {item.Name}
                                                                </span>
                                                                <span className="mb-1">
                                                                    <Rating
                                                                        count={5}
                                                                        emptyIcon={<MdOutlineStarOutline color="#ffd700" />}
                                                                        filledIcon={<IoMdStar />}
                                                                        halfIcon={<IoIosStarHalf />}
                                                                        value={item.Star}
                                                                        size={16}
                                                                        isHalf={true}
                                                                        a11y={false}
                                                                        edit={false} // Khóa chức năng thay đổi số sao
                                                                    />
                                                                </span>
                                                            </p>
                                                            <p>{item.Content}</p>
                                                            <div className="d-flex align-items-center">
                                                                <span style={{ color: '#80BB35' }}>Gửi trả lời</span>
                                                                <GoDotFill className="mx-2" color="#ccc" />
                                                                <span style={{ color: '#80BB35' }}>
                                                                    <AiFillLike className="mb-1" color="#ccc" />
                                                                    Hữu ích
                                                                </span>
                                                                <GoDotFill className="mx-2" color="#ccc" />
                                                                <span style={{ color: '#80BB35' }}>
                                                                    <IoIosWarning className="mb-1" color="#ccc" />
                                                                    Báo cáo sai phạm
                                                                </span>
                                                                <GoDotFill className="mx-2" color="#ccc" />
                                                                <span style={{ color: '#ccc' }}>09:09 17/05/2024</span>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="bg-white px-3" style={{ marginRight: '-8px' }}>
                                        <div className="pb-1">
                                            <h4 className="fw-semibold py-2">Cấu hình chi tiết</h4>
                                            {<JsxParser jsx={detail_product.Specifications} />}
                                        </div>
                                    </div>
                                    <div className="bg-white mt-4 px-3 py-3">
                                        <p className="fs-3 fw-bold text-danger">CÓ THỂ BẠN THÍCH</p>
                                        <CarouselResponsive infiniteLoop={true} showThumbs={false} showIndicators={true} showArrows={false}>
                                            {productCategory.length !== 0 &&
                                                splitIntoChunks(productCategory.filter((item) => item.NameTradeSignal === product.NameTradeSignal)).map((item, index) => (
                                                    <div key={index}>
                                                        {item.map((ele) => (
                                                            <a href={`/product/${ele.Name}?Id=${ele.Id}`} key={ele.Id} className="d-flex mb-4">
                                                                <Image style={{ width: 90, marginRight: 12 }} src={ele.Image} alt="" />
                                                                <div>
                                                                    <p className="mb-0 text-start morethan2lines" style={{ lineHeight: '20px', height: 40 }}>
                                                                        {ele.Name}
                                                                    </p>
                                                                    <p className="mb-0 fw-semibold fs-4 text-start" style={{ color: '#ff5700' }}>
                                                                        <NumericFormat value={ele.Reduced_price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                                                        <sup className="text-decoration-underline">đ</sup>
                                                                    </p>
                                                                    {ele.Price !== 0 && (
                                                                        <p className="text-decoration-line-through mb-0 text-start">
                                                                            <NumericFormat value={ele.Price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} />
                                                                            <sup className="text-decoration-underline">đ</sup>
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                ))}
                                        </CarouselResponsive>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </div>
            )}
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
            <Modal show={showModalComment} onHide={handleCloseComment} size="lg">
                <Modal.Body>
                    <p className="text-center fs-4">Đánh giá sản phẩm</p>
                    <p className="text-center fs-3">
                        <b>{detail_product.Name}</b>
                    </p>
                    <div className="d-flex align-items-center">
                        <span className="mt-3">Đánh giá của bạn về sản phẩm:</span>
                        <Rating value={rating} onChange={(newRating) => setRating(newRating)} count={5} emptyIcon={<MdOutlineStarOutline color="#ffd700" />} filledIcon={<IoMdStar />} halfIcon={<IoIosStarHalf />} size={28} isHalf={true} a11y={false} />
                    </div>
                    <div className="d-flex flex-column">
                        <input style={{ outline: 'none' }} className="px-3 py-2" value={user.Name} placeholder="Nhập họ tên của bạn" ref={valNameTag}></input>
                        <input style={{ outline: 'none' }} className="mt-3 px-3 py-2" value={user.Email} placeholder="Nhập email của bạn" ref={valEmailTag}></input>
                    </div>
                    <textarea style={{ width: '100%', outline: 'none', resize: 'none', height: 200 }} className="px-3 py-2 mt-4" placeholder="Nhập nội dung đánh giá của bạn về sản phẩm này" ref={valContentTag}></textarea>
                    <div className="text-center">
                        <button onClick={handleComment} style={{ backgroundColor: '#80BB35' }} className="mt-4 border-0 text-white px-4 py-3 rounded-3">
                            Gửi đánh giá
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
