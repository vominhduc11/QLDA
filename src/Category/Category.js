import { memo, useEffect, useRef, useState } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Carousel } from 'react-responsive-carousel';
import { FaCaretRight, FaChevronDown, FaChevronLeft, FaChevronRight, FaListUl, FaRegStar } from "react-icons/fa";
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

function Category() {
    // const [index, setIndex] = useState(0);
    // const [banners, setBanners] = useState([]);
    const [storeCategorys, setStoreCategorys] = useState([]);
    const [childrenCategorys, setChildrenCategorys] = useState([]);
    const [trade_signals, setTrade_signals] = useState([]);
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [active, setActive] = useState(0);
    const [detailCategory, setDetailCategory] = useState({});
    // const [address, setAddress] = useState([]);

    // lấy parameter trong Category
    const queryParams = new URLSearchParams(useLocation().search);
    const Id = Number(queryParams.get('Id'));
    // let ListProductInit = useRef([]);
    // let ListTrade_signals = useRef([]);
    // let ListPriceStartAndEnd = useRef([]);
    // let Evaluate = useRef(undefined);

    const location = decodeURIComponent(useLocation().pathname).slice(9);
    // Chia nhỏ mảng categories thành các phần tử con, mỗi phần tử con chứa 2 item
    const chunkedstoreCategorys = [];
    for (let i = 0; i < storeCategorys.length; i += 2) {
        chunkedstoreCategorys.push(storeCategorys.slice(i, i + 2));
    }

    const handlePageChange = ({ selected }) => {
        // setCurrentPage(selected);
        // Thực hiện các thao tác cập nhật dữ liệu hiển thị tương ứng với trang mới
    };
    //Carosel bootstrap
    const handleSelect = (selectedIndex) => {
        // setIndex(selectedIndex);
    };
    //Lọc sản phẩm theo thương hiệu
    function filterTrade_signals(param) {
        // if (param.checked) {
        //     ListTrade_signals.current.push(param.nextElementSibling.innerText);
        // } else {
        //     const _ListTrade_signals = ListTrade_signals.current.filter(ele => ele !== param.nextElementSibling.innerText);
        //     ListTrade_signals.current = _ListTrade_signals;
        // }
        // libFilterProduct(ListProductInit.current, ListTrade_signals.current, ListPriceStartAndEnd.current, Evaluate.current);
    }
    //Lọc sản phẩm theo giá sản phẩm
    function filterPrice(startValue, endValue) {
        // console.log(startValue, endValue);
        // if (startValue !== '' && endValue !== '') {
        //     ListPriceStartAndEnd.current = [];
        //     ListPriceStartAndEnd.current.push(Number(startValue), Number(endValue));
        // } else {
        //     ListPriceStartAndEnd.current = [];
        // }
        // libFilterProduct(ListProductInit.current, ListTrade_signals.current, ListPriceStartAndEnd.current, Evaluate.current);
    }
    //Lọc sản phẩm theo đánh giá sao
    function FilterEvaluate(param) {
        // Evaluate.current = Number(param.getAttribute("title"));
        // libFilterProduct(ListProductInit.current, ListTrade_signals.current, ListPriceStartAndEnd.current, Evaluate.current);
    }
    //Xóa tất cả điều kiện lọc
    function DeleteAllConditionFilter() {
        // ListPriceStartAndEnd.current = [];
        // ListTrade_signals.current = [];
        // Evaluate.current = undefined;

        // document.querySelectorAll(".itemTrade_signals").forEach(ele => {
        //     if (ele.checked) {
        //         ele.checked = false;
        //     }
        // })
        // document.querySelector(".startValue").value = '';
        // document.querySelector(".endValue").value = '';

        // libFilterProduct(ListProductInit.current, ListTrade_signals.current, ListPriceStartAndEnd.current, Evaluate.current);
    }
    //thư viện lọc sản phẩm(ListProduct: [{},{},{}], ListAddress)
    function libFilterProduct(ListProduct, ListTrade_signals, _ListPriceStartAndEnd, Evaluate) {
        // let Filter1;
        // if (ListTrade_signals.length === 0) {
        //     Filter1 = ListProduct;
        // } else {
        //     Filter1 = ListProduct.filter(Product => ListTrade_signals.includes(Product['ThuongHieu']));
        // }
        // let Filter2;
        // if (_ListPriceStartAndEnd.length === 0) {
        //     Filter2 = Filter1;
        // } else {
        //     Filter2 = Filter1.filter(Product => Product.GiaBan >= _ListPriceStartAndEnd[0] && Product.GiaBan <= _ListPriceStartAndEnd[1]);
        // }
        // let Filter3;
        // if (Evaluate === undefined) {
        //     Filter3 = Filter2;
        // } else {
        //     Filter3 = Filter2.filter(Product => Product.Sao >= Evaluate);
        // }
        // setProduct(Filter3);
    }
    // show danh sách danh mục con
    const showList = () => {
        // $("#ListChildrenCategorys").animate({ height: childrenCategorys.length * 36 + 36 }, () => {
        //     $("#btnShowListChildrenCategorys").addClass("d-none");
        //     $("#ListChildrenCategorys").addClass("mb-3")
        // });
    }
    // show danh sách nơi bán
    const showListAddress = () => {
        // $("#ListAddress").animate({ height: '612px' }, () => {
        //     $("#btnShowListAddress").addClass("d-none");
        //     $("#ListAddress").addClass("mb-3")
        // });
    }
    // show danh sách thương hiệu
    const showListTrade_signals = () => {
        // $("#ListTrade_signals").animate({ height: trade_signals.length * 36 }, () => {
        //     $("#btnShowListTrade_signals").addClass("d-none");
        //     $("#ListTrade_signals").addClass("mb-3")
        // });
    }
    //Handle click childCategory
    const handleClickChildCategory = (index, MaDanhMucCon) => {
        // setCurrentPage(0);
        // setActive(index + 1);
        // if (MaDanhMucCon !== 0) {
        //     //Gọi api danh sách thương hiệu cho mỗi danh mục con
        //     axios.post('http://localhost:53629/api/AllTradeSignals_ChildCategory', { MaDanhMucCon: MaDanhMucCon })
        //         .then(response => setTrade_signals(response.data))
        //         .catch(error => console.log(error))
        //     //Gọi api danh sách sản phẩm cho mỗi danh mục con
        //     axios.post('http://localhost:53629/api/AllProduct_ChildCategory', { MaDanhMucCon: MaDanhMucCon })
        //         .then(response => {
        //             //Gán lại các biến về ban đầu
        //             ListProductInit.current = response.data;
        //             document.querySelector("#btnDeleteListFilter").click();
        //         })
        //         .catch(error => console.log(error))
        // } else {
        //     //Gọi api danh sách thương hiệu cho danh mục con đầu tiên
        //     axios.post('http://localhost:53629/api/AllTradeSignals_Category', { name: location })
        //         .then(response => setTrade_signals(response.data))
        //         .catch(error => console.log(error))
        //     //Gọi api danh sách sản phẩm cho danh mục con đầu tiên
        //     axios.post('http://localhost:53629/api/AllProduct_Category', { name: location })
        //         .then(response => {
        //             //Gán lại các biến về ban đầu
        //             ListProductInit.current = response.data;
        //             document.querySelector("#btnDeleteListFilter").click();
        //         })
        //         .catch(error => console.log(error))
        // }
    };
    //gọi api banner
    useEffect(() => {
        // axios.post('http://localhost:53629/api/AllBanner', { name: location })
        //     .then(response => setBanners(response.data))
        //     .catch(error => console.log(error))

        axios.post('http://localhost:58036/api/getDetailCategory', { Id: Id })
            .then(res => setDetailCategory(res.data))
            .catch(err => console.log(err))

        // axios.post('http://localhost:53629/api/AllChildCategory', { name: location })
        //     .then(response => setChildrenCategorys(response.data))
        //     .catch(error => console.log(error))

        // axios.post('http://localhost:53629/api/AllTradeSignals_Category', { name: location })
        //     .then(response => setTrade_signals(response.data))
        //     .catch(error => console.log(error))

        //  axios.post('http://localhost:53629/api/AllProduct_Category', { name: location })
        //      .then(response => {
        //          ListProductInit.current = response.data;
        //         setProduct(response.data);
        //     })
        //     .catch(error => console.log(error))

        // axios.get('http://localhost:53629/api/AllAddress')
        //     .then(response => setAddress(response.data))
        //     .catch(error => console.log(error))
    }, [])
    return (
        <>
            {Object.keys(detailCategory).length === 0 && <LoadPage />}
            {Object.keys(detailCategory).length === 0 || <div style={{ backgroundColor: '#f5f5f5' }}>
                <Container style={{ width: '1150px' }} className="pt-4">
                    {/* The slideshow/carousel */}
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
                    {/* show sản phẩm */}
                    <div id='section1' className="mt-4">
                        <Row>
                            <Col style={{ width: '20%' }} className="text-dark">
                                <div className="mb-2">
                                    <div className="d-flex align-items-center py-2" style={{ borderBottom: '1px solid rgba(0, 0, 0, .05)' }}>
                                        <FaListUl />
                                        <span style={{ fontWeight: 700, marginLeft: 12 }}>TẤT CẢ DANH MỤC</span>
                                    </div>
                                    <ul id="ListChildrenCategorys" className="list-unstyled position-relative overflow-hidden mb-0" style={{ height: 288 }}>
                                        <li style={{ lineHeight: '36px', height: 36 }} onClick={() => handleClickChildCategory(-1, 0)} className={active === 0 ? 'text-danger morethan1line pointer' : 'morethan1line pointer'}>{active === 0 && <FaCaretRight className="text-danger" />}{location}</li>
                                        {childrenCategorys.map((element, index) =>
                                            <li
                                                onClick={() => handleClickChildCategory(index, element.MaDanhMucCon)}
                                                key={index}
                                                style={{ lineHeight: '36px', height: 36 }}
                                                className={active === index + 1 ? 'text-danger morethan1line pointer' : 'morethan1line pointer'}>{active === index + 1 && <FaCaretRight className="text-danger" />}{element.TenDanhMucCon}
                                            </li>
                                        )}
                                    </ul>
                                    <div id="btnShowListChildrenCategorys" onClick={() => showList()} className="p-2 poiter">Thêm<FaChevronDown size={12} /></div>
                                </div>
                                <div>
                                    <div>
                                        <CiFilter />
                                        <span style={{ fontWeight: 700, marginLeft: 12 }}>BỘ LỌC TÌM KIẾM</span>
                                    </div>
                                    <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .05)' }}>
                                        <p className="mb-0 py-2">Thương Hiệu</p>
                                        <ul id="ListTrade_signals" className="list-unstyled overflow-hidden mb-0" style={{ height: 288 }}>
                                            {trade_signals.map(element =>
                                                <li style={{ height: 36 }} className="py-1">
                                                    <input className="itemTrade_signals" onChange={(e) => filterTrade_signals(e.currentTarget)} type="checkbox" style={{ marginRight: 4 }} />
                                                    <span>{element.TenThuongHieu}</span>
                                                </li>
                                            )}
                                        </ul>
                                        <div id="btnShowListTrade_signals" onClick={() => showListTrade_signals()} className="p-2 poiter">Thêm<FaChevronDown size={12} /></div>
                                    </div>
                                    <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .05)' }} className="pb-3">
                                        <p className="mb-0 py-2">Khoảng Giá</p>
                                        <div className="d-flex align-items-center">
                                            <Form.Control className="startValue" style={{ width: '40%' }}></Form.Control>
                                            <div style={{ width: '20%' }} className="d-flex align-items-center justify-content-center">
                                                <span style={{ width: 15, borderBottom: '1px solid rgba(0, 0, 0, .05)' }}></span>
                                            </div>
                                            <Form.Control className="endValue" style={{ width: '40%' }}></Form.Control>
                                        </div>
                                        <Button
                                            onClick={() => filterPrice(document.querySelector(".startValue").value, document.querySelector(".endValue").value)}
                                            className="w-100 bg-danger text-white border-0 mt-3"
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
                                        activeClass="active"
                                        to="section1"
                                        spy={true}
                                        // smooth={true}
                                        offset={-10}
                                        duration={400}
                                    >
                                        <Button id="btnDeleteListFilter" onClick={() => DeleteAllConditionFilter()} className="bg-danger border-0 w-100 mt-3">Xóa Tât Cả</Button>
                                    </LinkScroll>
                                </div>
                            </Col>
                            <Col style={{ width: '80%' }} md={9}>
                                <div style={{ backgroundColor: '#ededed' }} className="d-flex justify-content-between p-4">
                                    <div className="d-flex align-items-center">
                                        <p className="mb-0 mx-1" style={{ width: 95 }}>Sắp xếp theo</p>
                                        <Button className="mx-1 bg-danger border-0 fs-5 py-2" style={{ width: 120 }}>Mới Nhất</Button>
                                        <Button className="mx-1 bg-white text-dark border-0 fs-5 py-2" style={{ width: 120 }}>Bán Chạy</Button>
                                        <Form.Select className="mx-1 fs-5 py-2" style={{ width: 180 }}>
                                            <option value="">Giá</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </Form.Select>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span style={{ marginRight: 6 }}><span>1</span>/<span>9</span></span>
                                        <div>
                                            <span style={{ width: 32, height: 32, border: '1px solid rgba(0, 0, 0, .09)', borderRadius: '2px', backgroundColor: '#ededed' }} className="d-inline-flex align-items-center justify-content-center"><FaChevronLeft /></span>
                                            <span style={{ width: 32, height: 32, border: '1px solid rgba(0, 0, 0, .09)', borderRadius: '2px', backgroundColor: '#ededed' }} className="d-inline-flex align-items-center justify-content-center"><FaChevronRight /></span>
                                        </div>
                                    </div>
                                </div>
                                <Container fluid>
                                    <Row>
                                        {product.slice(currentPage * 36).slice(0, 36).map((element, index) =>
                                            <Link to={`/SanPham/${element.TenSanPham}`} key={index} className="card rounded-0 border-0" style={{ width: '25%', padding: '6px', backgroundColor: 'unset' }}>
                                                <div className="card-body bg-white p-0">
                                                    <img width="100%"
                                                        src={element.Hinh}
                                                        alt="" srcset="" />
                                                    <div className="p-2">
                                                        <p className="morethan2lines">{element.TenSanPham}</p>
                                                        <span>{element.GiaBan}<sup>đ</sup></span>
                                                        <span style={{ fontSize: '12px' }} className="text-decoration-line-through text-secondary">{element.GiaNiemYiet}<sup>đ</sup></span>
                                                        <div className="d-flex align-items-center">
                                                            <Rating
                                                                count={5}
                                                                value={element.Sao}
                                                                size={15}
                                                                activeColor="#ffd700"
                                                                edit={false}
                                                            />
                                                            {element.SoLuongBan < 1000 && <span>Đã bán {numeral(element.SoLuongBan).format('0,0')}</span>}
                                                            {element.SoLuongBan >= 1000 && <span>Đã bán {numeral(element.SoLuongBan).format('0a')}</span>}
                                                        </div>
                                                        <span>{element.NoiBan}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        )}
                                    </Row>
                                    <div className="d-flex justify-content-center py-5">
                                        {/* <ReactPaginate
                                            previousLabel={<FaChevronLeft className="left" />}
                                            nextLabel={<FaChevronRight className="right" />}
                                            breakLabel={"..."}
                                            pageCount={Math.ceil(product.length / 36)} // Tổng số trang
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            forcePage={currentPage}
                                            onPageChange={handlePageChange}
                                            containerClassName={"pagination"}
                                            activeClassName={"active"}
                                        /> */}
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </div>
                </Container >
            </div>}
        </>
    )
}

export default memo(Category);
