import { Button, ButtonGroup, Col, Container, Image, ProgressBar, Row } from "react-bootstrap";

import styles from "./Style.module.scss"
import { AiFillLike, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { FaChevronRight, FaHeart, FaMinus, FaPlug, FaPlus } from "react-icons/fa";

import { Carousel as Crs } from "react-responsive-carousel"
import Carousel from 'react-multi-carousel';
import { Carousel as CarouselResponsive } from 'react-responsive-carousel';
import Rating from 'react-rating-stars-component';
import { useEffect, useRef, useState } from "react";
import { CiHeart, CiStar } from "react-icons/ci";
import { IoGitCompareSharp } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { IoIosStarHalf, IoIosWarning, IoMdStar } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GoDotFill, GoPlus } from "react-icons/go";
import { RiBarChartFill, RiShoppingCartLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Product() {
    const [selectItem, setSelectItem] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const Product_informationTag = useRef();
    //responsive cho mutil carosel
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5.8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    function ShowMore() {
        if (isOpen === false) {
            setIsOpen(true);
            Product_informationTag.current.style.height = 'auto';
        } else {
            setIsOpen(false);
            Product_informationTag.current.style.height = '420px';
        }
    }
    //gọi api
    useEffect(() => {

    }, [])
    return (
        <div>
            {/* Đường dẫn */}
            <div className="bg-white py-3">
                <Container id={styles.PathName} className="d-flex align-items-center">
                    <span><AiOutlineHome size={22} color="#f72c0f" /></span>
                    <span className="mx-3"><FaChevronRight color="#f72c0f" /></span>
                    <span style={{ color: '#f72c0f' }} className="mt-1">{decodeURIComponent(useLocation().pathname).slice(9)}</span>
                </Container>
            </div>
            {/* Chi tiết sản phẩm */}
            <Container id={styles.Product} className="mt-4">
                <Row>
                    <Col md={6} className="position-relative">
                        <Crs width="100%" selectedItem={selectItem} showIndicators={true} showStatus={false} showArrows={false} swipeAnimationHandler swipeable showThumbs={false}>
                            <img style={{ userSelect: 'none' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-kem-digiphone_0681b0381718467c91f86f1e0e959f5e_master.jpg" alt="" />
                            <img style={{ userSelect: 'none' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-black-digiphone_f22d7d87ad4e4cf090a455d4cb3cfd56_master.jpg" alt="" />
                            <img style={{ userSelect: 'none' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-tim-digiphone_6bfdfbf95cc5474fb42b0a592b148fea_master.jpg" alt="" />
                            <img style={{ userSelect: 'none' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-xanh-digiphone_21584de944094241a45e46bfc7a2948b_master.jpg" alt="" />
                            <img style={{ userSelect: 'none' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-kem-digiphone_0681b0381718467c91f86f1e0e959f5e_master.jpg" alt="" />
                            <img style={{ userSelect: 'none' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-black-digiphone_f22d7d87ad4e4cf090a455d4cb3cfd56_master.jpg" alt="" />
                            <img style={{ userSelect: 'none' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-tim-digiphone_6bfdfbf95cc5474fb42b0a592b148fea_master.jpg" alt="" />
                            <img style={{ userSelect: 'none' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-xanh-digiphone_21584de944094241a45e46bfc7a2948b_master.jpg" alt="" />
                        </Crs>
                        <Carousel responsive={responsive} className="mt-5">
                            <img onClick={() => setSelectItem(0)} style={{ userSelect: 'none', border: '1px #ccc solid' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-kem-digiphone_0681b0381718467c91f86f1e0e959f5e_master.jpg" alt="" />
                            <img onClick={() => setSelectItem(1)} style={{ userSelect: 'none', border: '1px #ccc solid' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-black-digiphone_f22d7d87ad4e4cf090a455d4cb3cfd56_master.jpg" alt="" />
                            <img onClick={() => setSelectItem(2)} style={{ userSelect: 'none', border: '1px #ccc solid' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-tim-digiphone_6bfdfbf95cc5474fb42b0a592b148fea_master.jpg" alt="" />
                            <img onClick={() => setSelectItem(3)} style={{ userSelect: 'none', border: '1px #ccc solid' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-xanh-digiphone_21584de944094241a45e46bfc7a2948b_master.jpg" alt="" />
                            <img onClick={() => setSelectItem(4)} style={{ userSelect: 'none', border: '1px #ccc solid' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-kem-digiphone_0681b0381718467c91f86f1e0e959f5e_master.jpg" alt="" />
                            <img onClick={() => setSelectItem(5)} style={{ userSelect: 'none', border: '1px #ccc solid' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-black-digiphone_f22d7d87ad4e4cf090a455d4cb3cfd56_master.jpg" alt="" />
                            <img onClick={() => setSelectItem(6)} style={{ userSelect: 'none', border: '1px #ccc solid' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-tim-digiphone_6bfdfbf95cc5474fb42b0a592b148fea_master.jpg" alt="" />
                            <img onClick={() => setSelectItem(7)} style={{ userSelect: 'none', border: '1px #ccc solid' }} width={80} src="//product.hstatic.net/1000370129/product/galaxy-z-flip4-xanh-digiphone_21584de944094241a45e46bfc7a2948b_master.jpg" alt="" />
                        </Carousel>
                        <span className="position-absolute d-inline-flex justify-content-center align-items-center" style={{ top: 12, left: 20, height: 36, width: 36 }}><CiHeart size={30} /></span>
                        <span className="position-absolute d-inline-flex justify-content-center align-items-center" style={{ top: 12, right: 20, height: 36, width: 36 }}><IoGitCompareSharp size={26} /></span>
                    </Col>
                    <Col md={6}>
                        {/* Tên sản phẩm */}
                        <h2>IPhone 12 Pro Max Chính Hãng (VN/A)</h2>
                        {/* Đánh giá sản phẩm */}
                        <div className="d-flex align-items-center">
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
                            <span className="mt-2">Xem đánh giá</span>
                        </div>
                        <div className="mt-2" id={styles.Price}>
                            <div className="position-relative p-3 rounded-2" style={{ backgroundImage: 'linear-gradient(180deg, #f72c0f 0%, #EF9135 100%)' }}>
                                <div className="d-flex justify-content-between">
                                    <p className="text-white">Online giá rẻ quá</p>
                                    <p className="text-white">Kết thúc sau</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="fs-2 fw-bolder" style={{ color: '#FEE71A' }}>32.590.000<sup>đ</sup></p>
                                    <div>
                                        <span className="d-inline-flex bg-white justify-content-center align-items-center rounded-1 fw-semibold" style={{ height: 24, width: 24 }}>03</span>
                                        <span className="text-white mx-2">:</span>
                                        <span className="d-inline-flex bg-white justify-content-center align-items-center rounded-1 fw-semibold" style={{ height: 24, width: 24 }}>47</span>
                                        <span className="text-white mx-2">:</span>
                                        <span className="d-inline-flex bg-white justify-content-center align-items-center rounded-1 fw-semibold" style={{ height: 24, width: 24 }}>28</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex text-white">
                                        <p className="text-decoration-line-through">32.590.000<sup className="text-decoration-underline">đ</sup></p>
                                        <p>(6%)</p>
                                    </div>
                                    <ProgressBar
                                        style={{ width: 180 }}
                                        label="187 sản phẩm đã bán"
                                        completed={100}
                                        now={50}
                                    />
                                </div>
                            </div>
                            <div className="py-3 px-4" style={{ background: 'rgba(255, 203, 173, 0.4)', border: '1px #f72c0f solid', borderTop: 'unset' }}>Tai nghe Xiaomi pod 2 trị giá 300K</div>
                        </div>
                        {/* Thương hiệu và thể loại */}
                        <div className="d-flex mt-3">
                            <div>Thương hiệu: Xiaomi</div>
                            <div className="mx-4">Loại: Điện thoại</div>
                        </div>
                        {/* màu sắc */}
                        <div id={styles.Color_products} className="mt-4">
                            <p className="mb-0 fs-5 fw-semibold">Màu sắc</p>
                            <ul className="list-unstyled d-flex">
                                <li className="active d-flex align-items-center rounded-2 overflow-hidden">
                                    <Image width={35} src="http://product.hstatic.net/1000370129/product/galaxy-z-flip4-kem-digiphone_0681b0381718467c91f86f1e0e959f5e_master.jpg" alt="" />
                                    <span className="text-center" style={{ width: 42 }}>Đen</span>
                                </li>
                                <li className="active d-flex align-items-center rounded-2 overflow-hidden">
                                    <Image width={35} src="http://product.hstatic.net/1000370129/product/galaxy-z-flip4-black-digiphone_f22d7d87ad4e4cf090a455d4cb3cfd56_master.jpg" alt="" />
                                    <span className="text-center" style={{ width: 42 }}>Đỏ</span>
                                </li>
                            </ul>
                        </div>
                        {/* Dung lượng */}
                        <div id={styles.Capacity} className="mt-4">
                            <p className="mb-0 fs-5 fw-semibold">Màu sắc</p>
                            <ul className="list-unstyled d-flex">
                                <li className="active d-flex align-items-center rounded-2 overflow-hidden">
                                    <span className="text-center px-2 py-1">128GB</span>
                                </li>
                                <li className="active d-flex align-items-center rounded-2 overflow-hidden">
                                    <span className="text-center px-2 py-1">256GB</span>
                                </li>
                            </ul>
                        </div>
                        {/* tăng giảm số lượng sản phẩm */}
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
                        {/* các nút thanh toán và thêm vào giỏ hàng */}
                        <Button className="w-100 mt-4 bg-danger border-0 fs-3 fw-semibold py-3">MUA NGAY QUÁ RẺ</Button>
                        <div className="mt-4 d-flex justify-content-between">
                            <Button style={{ width: '49%' }}>
                                <p className="mb-0 fs-4 fw-semibold">MUA TRẢ GÓP</p>
                                <p className="mb-0">Duyệt hồ sơ trong 5 phút</p>
                            </Button>
                            <Button style={{ width: '49%' }}>
                                <p className="mb-0 fs-4 fw-semibold">THÊM VÀO GIỎ</p>
                                <p className="mb-0">Thêm trước thanh toán sau</p>
                            </Button>
                        </div>
                    </Col>
                </Row>
                {/* Các phụ kiện mua cùng sản phẩm */}
                <div id={styles.Accompanying_accessories} className="bg-white mt-4 p-4">
                    <h5 className="fs-4 fw-semibold py-2">Phụ kiện mua cùng</h5>
                    {/* <div> */}
                    <div className="d-flex">
                        <div style={{ width: '80%', borderRight: '1px #ccc solid', overflow: 'auto' }}>
                            <div className="d-flex align-items-center">
                                <div className="rounded-2 p-2" style={{ width: 220, boxShadow: '1px 1px 10px 1px #ebebeb' }}>
                                    <div className="d-flex">
                                        <Image width={78} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                        <div className="px-3">
                                            <p className="mb-0 morethan2lines">Apple iPhone 13 Plus 128GB</p>
                                            <p className="mb-0 text-danger fs-4 fw-semibold">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                            <p style={{ color: '#818181' }} className="text-decoration-line-through mb-0">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                        </div>
                                    </div>
                                    <p className="mb-0 mt-3">Sản phẩm đang xem</p>
                                </div>

                                <span><GoPlus size={34} color="#c9c9c9" /></span>

                                <div className="rounded-2 p-2" style={{ width: 220, boxShadow: '1px 1px 10px 1px #ebebeb' }}>
                                    <div className="d-flex">
                                        <Image width={78} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                        <div className="px-3">
                                            <p className="mb-0 morethan2lines">Apple iPhone 13 Plus 128GB</p>
                                            <p className="mb-0 text-danger fs-4 fw-semibold">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                            <p style={{ color: '#818181' }} className="text-decoration-line-through mb-0">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                        </div>
                                    </div>
                                    <p className="mb-0 mt-3 d-flex justify-content-between align-items-center">Sản phẩm khác<input type="checkbox" /></p>
                                </div>

                                <div className="rounded-2 p-2" style={{ width: 220, boxShadow: '1px 1px 10px 1px #ebebeb' }}>
                                    <div className="d-flex">
                                        <Image width={78} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                        <div className="px-3">
                                            <p className="mb-0 morethan2lines">Apple iPhone 13 Plus 128GB</p>
                                            <p className="mb-0 text-danger fs-4 fw-semibold">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                            <p style={{ color: '#818181' }} className="text-decoration-line-through mb-0">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                        </div>
                                    </div>
                                    <p className="mb-0 mt-3">Sản phẩm khác</p>
                                </div>

                                <div className="rounded-2 p-2" style={{ width: 220, boxShadow: '1px 1px 10px 1px #ebebeb' }}>
                                    <div className="d-flex">
                                        <Image width={78} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                        <div className="px-3">
                                            <p className="mb-0 morethan2lines">Apple iPhone 13 Plus 128GB</p>
                                            <p className="mb-0 text-danger fs-4 fw-semibold">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                            <p style={{ color: '#818181' }} className="text-decoration-line-through mb-0">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                        </div>
                                    </div>
                                    <p className="mb-0 mt-3">Sản phẩm khác</p>
                                </div>

                                <div className="rounded-2 p-2" style={{ width: 220, boxShadow: '1px 1px 10px 1px #ebebeb' }}>
                                    <div className="d-flex">
                                        <Image width={78} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                        <div className="px-3">
                                            <p className="mb-0 morethan2lines">Apple iPhone 13 Plus 128GB</p>
                                            <p className="mb-0 text-danger fs-4 fw-semibold">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                            <p style={{ color: '#818181' }} className="text-decoration-line-through mb-0">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                        </div>
                                    </div>
                                    <p className="mb-0 mt-3">Sản phẩm khác</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center" style={{ width: '20%' }}>
                            <p>Tạm tính:</p>
                            <p className="text-danger fw-semibold">22.369.000<sup className="text-decoration-underline">đ</sup></p>
                            <Button className="bg-danger border-0 fs-4 py-2 px-5">Thêm vào giỏ</Button>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                {/* Sản phẩm tương tự */}
                <div id={styles.Product_common} className="mt-4 bg-white">
                    <h2 className="fw-semibold px-4 pt-4">SẢN PHẨM TƯƠNG TỰ</h2>
                    <div className="d-flex flex-wrap">
                        <div id={styles.Item} className="px-2 py-3">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="px-2 py-3">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="px-2 py-3">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="px-2 py-3">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="px-2 py-3">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="px-2 py-3">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Thông tin sản phẩm và thông số kỹ thuật */}
                <Container fluid className="mt-4">
                    <Row>
                        <Col md={8}>
                            <div className="bg-white px-3" style={{ marginLeft: '-8px' }}>
                                <div>
                                    <h4 className="fw-semibold py-2">Thông tin sản phẩm</h4>
                                    <div ref={Product_informationTag} style={{ height: 420, overflow: 'hidden' }}>
                                        <p>iPhone 15 Pro Max được xem là chiếc iPhone đáng mua nhất trong năm trong năm 2022 vì có thể đáp ứng tốt hầu hết mọi nhu cầu của người dùng từ cơ bản đến nâng cao. Với sự nâng cấp mạnh mẽ về mặt phần cứng với camera lên đến 48MP, bộ nhớ trong 1TB, màn hình thiết kế mới hứa hẹn sẽ mang lại trải nghiệm vô cùng tuyệt vời đến người dùng.</p>
                                        <h4>Giữ nguyên thiết kế vuông vức, sở hữu phần notch nhỏ hơn</h4>
                                        <h4>Hình ảnh sắc nét - trải nghiệm mượt mà với tần số quét 120Hz</h4>
                                        <p>Màn hình iPhone<span>&nbsp;</span><em><strong>15 Pro Max 128GB</strong></em><span>&nbsp;</span>được Apple thay đổi hoàn toàn với phần viền màn hình được làm mỏng đều ở 4 cạnh, đi kèm với phần notch được thiết kế hình giọt nước thay vì tai thỏ như trên các phiên bản tiền nhiệm. Sự thay đổi này mang lại cho người dùng trải nghiệm hình ảnh tốt hơn, không gian rộng rãi hơn cũng như “sexy” hơn khi so với các dòng flagship khác.</p>
                                        <p>Chiếc máy vẫn sẽ được trang bị tấm nền OLED với kích thước 6.7 inch độ phân giải 1290 x 2796 pixels, hỗ trợ dải màu rộng P3 mang lại hình ảnh vô cùng sắc nét, màu sắc chân thực khiến người dùng phải choáng ngợp. Đi cùng với đó là độ tương phản cao giúp các chi tiết trên ảnh / video càng trở nên tự nhiên, sống động cuốn hút mọi ánh nhìn.</p>
                                        <p>Màn hình Super Retina XDR trên chiếc smartphone này còn sở hữu độ sáng cao lên đến 1600 nits (HDR) sẽ giúp người dùng có thể sử dụng ở mọi điều kiện ánh sáng khác nhau từ trong nhà, bóng râm, trời nắng gắt … mà không bị giảm chất lượng hiển thị.</p>
                                        <p>Một trong những nâng cấp đáng giá nhất trên iPhone 13 Pro đó là được trang bị màn hình 120Hz với công nghệ LTPO giúp màn hình tự điều chỉnh tần số quét từ 10Hz - 120Hz để tiết kiệm pin. Trên iPhone 14 Pro, Apple đã điều chỉnh nó xuống thấp hơn nữa là từ 1Hz - 120hz. Điều này giúp chiếc máy có thể tiết kiệm pin hơn nữa cũng như mang lại khả năng vuốt chạm mượt mà trong mọi ứng dụng / tác vụ mà người dùng sử dụng.</p>
                                        <h4>Thỏa sức sáng tạo với cụm camera 48MP</h4>
                                        <p>iPhone 14 Pro Max 128GB vẫn sẽ được trang bị cụm 3 camera gồm: camera góc rộng 48MP, camera góc siêu rộng 12MP và camera tele 12MP. Với cấu hình phần cứng khủng, chiếc máy sẽ mang lại cho người dùng nhiều bức ảnh chụp vô cùng tuyệt vời.</p>
                                        <p>Camera trên phiên bản này đã được Apple nâng cấp với độ phân giải 48MP thay vì 12MP trên các phiên bản tiền nhiệm. Đây là một sự cải tiến lớn vô cùng đáng giá kể từ thời iPhone 6 đến nay. Với độ phân giải cao hơn, chiếc máy hứa hẹn sẽ mang lại cho người dùng những bức ảnh chân thực, sắc nét giúp mọi người có thể thỏa sức sáng tạo mọi lúc, mọi nơi.</p>
                                        <p>Bên cạnh những tính năng liên quan đến chụp ảnh, khả năng quay video vẫn là một trong những thế mạnh của iPhone từ xưa đến nay. Việc trang bị cảm biến lớn cùng độ phân giải cao, kết hợp với sự tối ưu từ phần mềm sẽ mang lại những thước phim đậm chất điện ảnh. Từ đó giúp người dùng có thể lưu trữ mọi khoảnh khắc đáng nhớ nhất trong mỗi hành trình, mỗi chuyến đi…</p>
                                        <p><img src="https://bizweb.dktcdn.net/100/507/051/files/540e5037-9130-410e-b4f1-54582bf70cfc.jpg?v=1704423871930" /></p>
                                        <h4>Hiệu năng vượt trội với Apple A16 Bionic</h4>
                                        <p>iPhone 14 Pro Max 128GB sở hữu hiệu năng mạnh mẽ từ con chip mới nhất của mình là Apple A16 Bionic. Đây là vi xử lý được sản xuất dựa trên tiến trình 4nm mới nhất với hơn 15 tỷ bóng bán dẫn mang lại hiệu năng mạnh mẽ nhưng vẫn đảm bảo tiết kiệm năng lượng cho chiếc máy. Theo Apple, A16 Bionic cho khả năng xử lý nhanh hơn 40% khi so với A15 Bionic trên iPhone 13 Pro, khả năng xử lý đồ họa cũng nhanh hơn 30%.</p>
                                    </div>

                                    <div className="text-center mt-3">
                                        <Button className="bg-white fs-4 py-1 px-4" style={{ color: '#ff5700', border: '1px #ff5700 solid' }} onClick={() => ShowMore()}>
                                            {isOpen ? 'Thu gọn' : 'Xem thêm'}
                                        </Button>
                                    </div>
                                </div>
                                <hr className="mt-5" />
                                {/* <div className="mt-4">
                                    <h3 className="fw-semibold">Đánh giá</h3>
                                    <div style={{ backgroundColor: '#f2f8ea' }} className="border border-secondary text-center py-5 mt-3">
                                        <p>Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản phẩm này</p>
                                        <Button className="border-0 px-4 py-2 fs-5 mt-3" style={{ backgroundColor: '#80BB35' }}>Gửi đánh giá của bạn</Button>
                                    </div>
                                </div> */}
                                {/* Các đánh giá của khách hàng */}
                                <div className="mt-4">
                                    <h3 className="fw-semibold">Đánh giá</h3>
                                    <div style={{ backgroundColor: '#f2f8ea' }} className="border border-secondary text-center py-5 mt-3 d-flex">
                                        <div style={{ width: '30%' }} className="d-flex flex-column align-items-center">
                                            <p className="fs-1 mb-0" style={{ color: '#80BB35' }}>4.3/5</p>
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
                                            <Button className="border-0 fs-4 py-2 px-4 mt-4" style={{ backgroundColor: '#80BB35' }}>Gửi đánh giá của bạn</Button>
                                        </div>
                                        <div style={{ width: '70%' }}>
                                            <ul className="list-unstyled d-flex flex-wrap">
                                                <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>Tất cả</li>
                                                <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>5 Điểm (2)</li>
                                                <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>4 Điểm (0)</li>
                                                <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>3 Điểm (1)</li>
                                                <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>2 Điểm (0)</li>
                                                <li className="bg-white py-2 px-5 m-1" style={{ border: '1px solid #80BB35', cursor: 'pointer' }}>1 Điểm (0)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled border border-secondary border-top-0">
                                        <li className="px-5 py-4">
                                            <p className="d-flex align-items-center">
                                                <span style={{ marginRight: 6 }} className="fw-semibold">vo minh duc</span>
                                                <span className="mb-1">
                                                    <Rating
                                                        count={5}
                                                        emptyIcon={<MdOutlineStarOutline color="#ffd700" />}
                                                        filledIcon={<IoMdStar />}
                                                        halfIcon={<IoIosStarHalf />}
                                                        value={1.5}
                                                        size={16}
                                                        isHalf={true}
                                                        a11y={false}
                                                        edit={false} // Khóa chức năng thay đổi số sao
                                                    />
                                                </span>
                                            </p>
                                            <p>abcd</p>
                                            <div className="d-flex align-items-center">
                                                <span style={{ color: '#80BB35' }}>Gửi trả lời</span>
                                                <GoDotFill className="mx-2" color="#ccc" />
                                                <span style={{ color: '#80BB35' }}><AiFillLike className="mb-1" color="#ccc" />Hữu ích</span>
                                                <GoDotFill className="mx-2" color="#ccc" />
                                                <span style={{ color: '#80BB35' }}><IoIosWarning className="mb-1" color="#ccc" />Báo cáo sai phạm</span>
                                                <GoDotFill className="mx-2" color="#ccc" />
                                                <span style={{ color: '#ccc' }}>09:09 17/05/2024</span>
                                            </div>
                                        </li>
                                        <li className="px-5 py-4">
                                            <p className="d-flex align-items-center">
                                                <span style={{ marginRight: 6 }} className="fw-semibold">vo minh duc</span>
                                                <span className="mb-1">
                                                    <Rating
                                                        count={5}
                                                        emptyIcon={<MdOutlineStarOutline color="#ffd700" />}
                                                        filledIcon={<IoMdStar />}
                                                        halfIcon={<IoIosStarHalf />}
                                                        value={1.5}
                                                        size={16}
                                                        isHalf={true}
                                                        a11y={false}
                                                        edit={false} // Khóa chức năng thay đổi số sao
                                                    />
                                                </span>
                                            </p>
                                            <p>abcd</p>
                                            <div className="d-flex align-items-center">
                                                <span style={{ color: '#80BB35' }}>Gửi trả lời</span>
                                                <GoDotFill className="mx-2" color="#ccc" />
                                                <span style={{ color: '#80BB35' }}><AiFillLike className="mb-1" color="#ccc" />Hữu ích</span>
                                                <GoDotFill className="mx-2" color="#ccc" />
                                                <span style={{ color: '#80BB35' }}><IoIosWarning className="mb-1" color="#ccc" />Báo cáo sai phạm</span>
                                                <GoDotFill className="mx-2" color="#ccc" />
                                                <span style={{ color: '#ccc' }}>09:09 17/05/2024</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="bg-white px-3" style={{ marginRight: '-8px' }}>
                                <div className="pb-1">
                                    <h4 className="fw-semibold py-2">Thông tin sản phẩm</h4>
                                    <table class="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <th>Kích thước màn hình</th>
                                                <td>6.7 inches</td>
                                            </tr>
                                            <tr>
                                                <th>Độ phân giải màn hình</th>
                                                <td>1284 x 2778 pixels</td>
                                            </tr>
                                            <tr>
                                                <th>Loại màn hình</th>
                                                <td>Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone</td>
                                            </tr>
                                            <tr>
                                                <th>Bộ nhớ trong</th>
                                                <td>128 GB</td>
                                            </tr>
                                            <tr>
                                                <th>Chipset</th>
                                                <td>Apple A14 Bionic (5 nm)</td>
                                            </tr>
                                            <tr>
                                                <th>Kích thước</th>
                                                <td>160.8 x 78.1 x 7.4 mm</td>
                                            </tr>
                                            <tr>
                                                <th>Trọng lượng</th>
                                                <td>228g</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="bg-white mt-4 px-3 py-3">
                                <p className="fs-3 fw-bold text-danger">CÓ THỂ BẠN THÍCH</p>
                                <CarouselResponsive
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    showThumbs={false}
                                    showIndicators={true}
                                    showArrows={false}
                                >
                                    <div>
                                        <div className="d-flex mb-4">
                                            <Image style={{ width: 90 }} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                            <div>
                                                <p className="mb-0 text-start" style={{ lineHeight: '20px', height: 40 }}>Apple iPhone 13 Chính hãng (VN/A) abaa adajd</p>
                                                <p className="mb-0 fw-semibold fs-4 text-start" style={{ color: '#ff5700' }}>27.000.000<sup className="text-decoration-underline">đ</sup></p>
                                                <p className="text-decoration-line-through mb-0 text-start">16.000.000<sup className="text-decoration-underline">đ</sup></p>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-4">
                                            <Image style={{ width: 90 }} width={90} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                            <div>
                                                <p className="mb-0 text-start" style={{ lineHeight: '20px', height: 40 }}>Apple iPhone 13 Chính hãng (VN/A) abaa adajd</p>
                                                <p className="mb-0 fw-semibold fs-4 text-start" style={{ color: '#ff5700' }}>27.000.000<sup className="text-decoration-underline">đ</sup></p>
                                                <p className="text-decoration-line-through mb-0 text-start">16.000.000<sup className="text-decoration-underline">đ</sup></p>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-4">
                                            <Image style={{ width: 90 }} width={90} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                            <div>
                                                <p className="mb-0 text-start" style={{ lineHeight: '20px', height: 40 }}>Apple iPhone 13 Chính hãng (VN/A) abaa adajd</p>
                                                <p className="mb-0 fw-semibold fs-4 text-start" style={{ color: '#ff5700' }}>27.000.000<sup className="text-decoration-underline">đ</sup></p>
                                                <p className="text-decoration-line-through mb-0 text-start">16.000.000<sup className="text-decoration-underline">đ</sup></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex mb-4">
                                            <Image style={{ width: 90 }} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                            <div>
                                                <p className="mb-0 text-start" style={{ lineHeight: '20px', height: 40 }}>Apple iPhone 13 Chính hãng (VN/A) abaa adajd</p>
                                                <p className="mb-0 fw-semibold fs-4 text-start" style={{ color: '#ff5700' }}>27.000.000<sup className="text-decoration-underline">đ</sup></p>
                                                <p className="text-decoration-line-through mb-0 text-start">16.000.000<sup className="text-decoration-underline">đ</sup></p>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-4">
                                            <Image style={{ width: 90 }} width={90} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                            <div>
                                                <p className="mb-0 text-start" style={{ lineHeight: '20px', height: 40 }}>Apple iPhone 13 Chính hãng (VN/A) abaa adajd</p>
                                                <p className="mb-0 fw-semibold fs-4 text-start" style={{ color: '#ff5700' }}>27.000.000<sup className="text-decoration-underline">đ</sup></p>
                                                <p className="text-decoration-line-through mb-0 text-start">16.000.000<sup className="text-decoration-underline">đ</sup></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex mb-4">
                                            <Image style={{ width: 90 }} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                            <div>
                                                <p className="mb-0 text-start" style={{ lineHeight: '20px', height: 40 }}>Apple iPhone 13 Chính hãng (VN/A) abaa adajd</p>
                                                <p className="mb-0 fw-semibold fs-4 text-start" style={{ color: '#ff5700' }}>27.000.000<sup className="text-decoration-underline">đ</sup></p>
                                                <p className="text-decoration-line-through mb-0 text-start">16.000.000<sup className="text-decoration-underline">đ</sup></p>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-4">
                                            <Image style={{ width: 90 }} width={90} src="https://bizweb.dktcdn.net/thumb/medium/100/507/051/products/00904369-638301752870211274-ip-15-pro-max-xanh-1-774ed4d9d6.jpg?v=1704424821593" alt="" />
                                            <div>
                                                <p className="mb-0 text-start" style={{ lineHeight: '20px', height: 40 }}>Apple iPhone 13 Chính hãng (VN/A) abaa adajd</p>
                                                <p className="mb-0 fw-semibold fs-4 text-start" style={{ color: '#ff5700' }}>27.000.000<sup className="text-decoration-underline">đ</sup></p>
                                                <p className="text-decoration-line-through mb-0 text-start">16.000.000<sup className="text-decoration-underline">đ</sup></p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselResponsive>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div >
    )
}
