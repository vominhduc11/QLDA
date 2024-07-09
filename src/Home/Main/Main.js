import styles from "./Style.module.scss"

import { Button, ButtonGroup, Container, Image } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import CarouselMulti from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { RiBarChartFill, RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Main() {
    const [index, setIndex] = useState(1);
    const [category, setCategory] = useState([])
    // Cấu hình responsive cho thư viện react - multi - carousel
    const responsive1 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 9.5
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
    const responsive2 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
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
    const responsive3 = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
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

    //gọi api
    useEffect(() => {
        axios.get('http://localhost:58036/api/getAllCategory')
            .then(res => setCategory(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <Container id={styles.Grid}>
            {/* Carosel hiện thị hình ảnh giới thiệu của shop */}
            <Carousel className="mt-4" showThumbs={false}>
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
            {/* Carosel hiện thị tất cả các danh mục sản phẩm */}
            <CarouselMulti
                className="mt-4"
                responsive={responsive1}
                customLeftArrow={<button id={styles.BtnLeft} className="position-absolute rounded-circle border-0 bg-white"><FaChevronLeft /></button>}
                customRightArrow={<button id={styles.BtnRight} className="position-absolute rounded-circle border-0 bg-white"><FaChevronRight /></button>}>
                {category.map(item =>
                    <Link to={`/category/${item.Name}?Id=${item.Id}`} key={item.Id} style={{ cursor: 'pointer' }} className="text-center d-block">
                        <img width={80} src={item.Image} alt="Image 1" />
                        <p>{item.Name}</p>
                    </Link>
                )}
                {/* <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div>
                <div className="text-center">
                    <img width={80} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="Image 1" />
                    <p>Thời trang nam</p>
                </div> */}
            </CarouselMulti>
            {/* Các sản phẩm flash sale */}
            <div id={styles.FlashSale} className="mt-4 rounded-4 position-relative">
                <div className="d-flex justify-content-between align-items-center">
                    <Image src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/title-sale.png?1708054180263" />
                    <div className="text-white fs-2 fw-semibold">Kết thúc sau:
                        <span style={{ width: 36, height: 36 }} className="text-warning bg-danger d-inline-flex justify-content-center align-items-center rounded-2">08</span> :
                        <span style={{ width: 36, height: 36 }} className="text-warning bg-danger d-inline-flex justify-content-center align-items-center rounded-2">10</span> :
                        <span style={{ width: 36, height: 36 }} className="text-warning bg-danger d-inline-flex justify-content-center align-items-center rounded-2">42</span>
                    </div>
                </div>
                <CarouselMulti
                    className="flex-grow-1"
                    responsive={responsive2}
                    customLeftArrow={<button id={styles.BtnLeft1} className="position-absolute border-0 px-2 py-4 bg-black text-white"><FaChevronLeft /></button>}
                    customRightArrow={<button id={styles.BtnRight1} className="position-absolute border-0 px-2 py-4 bg-black text-white"><FaChevronRight /></button>}
                    infinite
                // autoPlay
                >
                    <div id={styles.Item} className="px-2 py-3">
                        <div className="bg-white position-relative">
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                </CarouselMulti>
                <div className="text-center position-absolute">
                    <Button className="fs-3 py-2 px-5 text-dark bg-white border-0">Xem thêm</Button>
                </div>
            </div>
            {/* hình ảnh */}
            <div className="mt-4 d-flex align-items-center justify-content-between">
                <Image width="49%" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/imgbanner1.jpg?1708054180263" alt="" />
                <Image width="49%" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/imgbanner2.jpg?1708054180263" alt="" />
            </div>
            {/* Các sản phẩm nổi bật */}
            <div id={styles.Product_common} className="mt-4 bg-white">
                <div className="d-flex justify-content-between align-items-center px-4 pt-3">
                    <h2 className="text-danger fw-semibold">SẢN PHẨM NỔI BẬT</h2>
                    <ul className="list-unstyled d-flex">
                        <li>Điện thoại, tablet</li>
                        <li>Laptop</li>
                        <li>Phụ kiện</li>
                        <li>Âm thanh</li>
                        <li>Sản phẩm</li>
                    </ul>
                </div>
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
                <div className="text-center pb-4">
                    <Button className="fs-3 text-dark bg-white py-2 px-5">Xem thêm</Button>
                </div>
            </div>
            {/* Xả Kho Hàng Tốt */}
            <div id={styles.Product_tech} className="mt-4 bg-white p-3">
                <div className="d-flex">
                    <div>
                        <img width={270} className="mb-3" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/img_col1.jpg?1708054180263" alt="" loading="lazy" /><br />
                        <img width={270} src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/img_col2.jpg?1708054180263" alt="" loading="lazy" />
                    </div>
                    {/* Danh Sách các sản phẩm */}
                    <div>
                        <div className="fs-2 fw-semibold text-danger py-3 px-4">XẢ KHO GIÁ TỐT</div>
                        <div className="d-flex flex-wrap">
                            <div id={styles.Item} className="px-2 py-2">
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
                            <div id={styles.Item} className="px-2 py-2">
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
                            <div id={styles.Item} className="px-2 py-2">
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
                            <div id={styles.Item} className="px-2 py-2">
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
                            <div id={styles.Item} className="px-2 py-2">
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
                            <div id={styles.Item} className="px-2 py-2">
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
                        <div className="text-center">
                            <Button className="fs-3 bg-white text-dark border-secondary px-5 py-2">Xem thêm</Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Phụ kiện hot */}
            <div id={styles.Accessory} className="mt-4 bg-white p-3">
                <div className="d-flex justify-content-between mb-3">
                    <h2 className="text-danger fw-semibold">PHỤ KIỆN HOT</h2>
                    <span className="d-flex align-items-center">Xem tất cả <FaChevronRight /></span>
                </div>
                <div className="d-flex justify-content-between">
                    <Image width="49.5%" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/imgbanner1_pk.jpg?1708054180263" alt="" />
                    <Image width="49.5%" src="https://bizweb.dktcdn.net/100/507/051/themes/936909/assets/imgbanner2_pk.jpg?1708054180263" alt="" />
                </div>
                <CarouselMulti
                    className="flex-grow-1"
                    responsive={responsive3}
                    customLeftArrow={<button id={styles.BtnLeft1} className="position-absolute border-0 px-2 py-4 bg-black text-white"><FaChevronLeft /></button>}
                    customRightArrow={<button id={styles.BtnRight1} className="position-absolute border-0 px-2 py-4 bg-black text-white"><FaChevronRight /></button>}
                    infinite
                // autoPlay
                >
                    <div id={styles.Item} className="px-2 py-3">
                        <div className="bg-white position-relative">
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                            <img width='100%' src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
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
                </CarouselMulti>
            </div>
            {/* Gợi ý hôm nay */}
            <div id={styles.Suggest} className="mt-4 bg-white">
                <h2 className="text-danger text-center fw-semibold">GỢI Ý HÔM NAY</h2>
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
                <div className="text-center pb-4">
                    <Button className="fs-3 text-dark bg-white py-2 px-5">Xem thêm</Button>
                </div>
            </div>
        </Container>


    )
}
