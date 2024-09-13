import Tippy from "@tippyjs/react/headless";
import styles from "./Style.module.scss";

import { Container, Image } from "react-bootstrap";

import { AiFillCaretDown } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdContactMail, MdRecommend } from "react-icons/md";
import { FaBriefcase, FaRegQuestionCircle } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Menu() {
    const [showMore, setShowMore] = useState(false);
    const [category, setCategory] = useState([]);

    // Xem thêm danh mục sản phẩm
    function ShowMoreCategory() {
        if (showMore) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
    }
    //gọi api
    useEffect(() => {
        axios.get("http://localhost:8080/api/getAllCategory")
            .then(res => setCategory(res.data))
            .catch(err => console.log(err))
    }, []);
    return (
        <div id={styles.Menu} className="bg-danger position-sticky">
            <Container id={styles.Grid} className="d-flex">
                <Tippy
                    appendTo={document.body} // Đưa tooltip lên cấp body
                    interactive
                    offset={[0, 15]}
                    placement="bottom"
                    render={attrs => (
                        <div id={styles.CagoryProduct_Menu} style={{ width: 285 }} className="box bg-white" tabIndex="-1" {...attrs}>
                            <div className="list-unstyled mb-0 overflow-hidden" style={{ height: showMore ? '' : 252 }}>
                                {category.map(item =>
                                    <a href={`/category/${item.Name}?Id=${item.Id}`} key={item.Id} style={{ height: 42 }} className="d-flex align-items-center">
                                        <Image width={42} src={item.Image} alt="" />
                                        <span>{item.Name}</span>
                                    </a>
                                )}
                            </div>
                            <div onClick={() => ShowMoreCategory()} className="text-center py-3">
                                {showMore ? <span>Thu gọn</span> : <span>Xem thêm</span>}
                            </div>
                        </div>
                    )}
                >
                    <div className="d-flex align-items-center text-white flex-grow-1">
                        <BsList size={20} style={{ marginRight: 4, position: 'relative' }} />
                        <span className="fs-4">Danh mục sản phẩm</span>
                        <AiFillCaretDown style={{ marginLeft: 4 }} />
                    </div>
                </Tippy>
                <Link to="/" className="px-4 py-3 text-white d-flex align-items-center"><TiHomeOutline className="fs-2" style={{ marginRight: 4 }} />Trang chủ</Link>
                <Link to="/All_Product" className="px-4 py-3 text-white d-flex align-items-center"><RiProductHuntLine className="fs-2" style={{ marginRight: 4 }} />Sản phẩm</Link>
                <Link to="/Introduce" className="px-4 py-3 text-white d-flex align-items-center"><MdRecommend className="fs-2" style={{ marginRight: 4 }} />Giới thiệu</Link>
                <Link to="/QuestionCommon" className="px-4 py-3 text-white d-flex align-items-center"><FaRegQuestionCircle className="fs-2" style={{ marginRight: 4 }} />Câu hỏi thường gặp</Link>
                <Link to="/Hiring" className="px-4 py-3 text-white d-flex align-items-center"><FaBriefcase className="fs-2" style={{ marginRight: 4 }} />Tuyển dụng</Link>
                <Link to="/Interact" className="px-4 py-3 text-white d-flex align-items-center"><MdContactMail className="fs-2" style={{ marginRight: 4 }} />Liên hệ</Link>
            </Container>
        </div>
    )
}
