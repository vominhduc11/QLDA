import Tippy from "@tippyjs/react/headless";
import styles from "./Style.module.scss";

import { Button, Container, Image } from "react-bootstrap";

import { AiFillCaretDown } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { CiHeadphones, CiLaptop } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { SlScreenDesktop } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MdContactMail, MdRecommend } from "react-icons/md";
import { FaBriefcase, FaRegQuestionCircle } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import { useState } from "react";


export default function Menu() {
    const [showMore, setShowMore] = useState(false);

    // Xem thêm danh mục sản phẩm
    function ShowMoreCategory() {
        if (showMore) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
    }
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
                            <ul className="list-unstyled mb-0 overflow-hidden" style={{ height: showMore ? '' : 252 }}>
                                <li>
                                    <Image width={42} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="" />
                                    <span>Quần áo</span>
                                </li>
                                <li>
                                    <Image width={42} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="" />
                                    <span>Quần áo</span>
                                </li>
                                <li>
                                    <Image width={42} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="" />
                                    <span>Quần áo</span>
                                </li>
                                <li>
                                    <Image width={42} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="" />
                                    <span>Quần áo</span>
                                </li>
                                <li>
                                    <Image width={42} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="" />
                                    <span>Quần áo</span>
                                </li>
                                <li>
                                    <Image width={42} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="" />
                                    <span>Quần áo</span>
                                </li>
                                <li>
                                    <Image width={42} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="" />
                                    <span>Quần áo</span>
                                </li>
                                <li>
                                    <Image width={42} src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b_tn" alt="" />
                                    <span>Quần áo</span>
                                </li>
                            </ul>
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
                <Tippy
                    appendTo={document.body} // Đưa tooltip lên cấp body
                    interactive
                    placement="bottom"
                    offset={[90, 15]}
                    render={attrs => (
                        <div id={styles.product_Menu} style={{ width: 1100 }} className="box bg-white d-flex flex-wrap p-3" tabIndex="-1" {...attrs}>
                            <div style={{ width: '16.6667%' }}>
                                <h3>Điện thoại, tablet</h3>
                                <ul className="list-unstyled">
                                    <li>Iphone</li>
                                    <li>Samsung</li>
                                    <li>Xiaomi</li>
                                    <li>Oppo</li>
                                    <li>Reami</li>
                                    <li>Sony</li>
                                </ul>
                            </div>
                            <div style={{ width: '16.6667%' }}>
                                <h3>Điện thoại, tablet</h3>
                                <ul className="list-unstyled">
                                    <li>Iphone</li>
                                    <li>Samsung</li>
                                    <li>Xiaomi</li>
                                    <li>Oppo</li>
                                    <li>Reami</li>
                                    <li>Sony</li>
                                </ul>
                            </div>
                            <div style={{ width: '16.6667%' }}>
                                <h3>Điện thoại, tablet</h3>
                                <ul className="list-unstyled">
                                    <li>Iphone</li>
                                    <li>Samsung</li>
                                    <li>Xiaomi</li>
                                    <li>Oppo</li>
                                    <li>Reami</li>
                                    <li>Sony</li>
                                </ul>
                            </div>
                            <div style={{ width: '16.6667%' }}>
                                <h3>Điện thoại, tablet</h3>
                                <ul className="list-unstyled">
                                    <li>Iphone</li>
                                    <li>Samsung</li>
                                    <li>Xiaomi</li>
                                    <li>Oppo</li>
                                    <li>Reami</li>
                                    <li>Sony</li>
                                </ul>
                            </div>
                            <div style={{ width: '16.6667%' }}>
                                <h3>Điện thoại, tablet</h3>
                                <ul className="list-unstyled">
                                    <li>Iphone</li>
                                    <li>Samsung</li>
                                    <li>Xiaomi</li>
                                    <li>Oppo</li>
                                    <li>Reami</li>
                                    <li>Sony</li>
                                </ul>
                            </div>
                            <div style={{ width: '16.6667%' }}>
                                <h3>Điện thoại, tablet</h3>
                                <ul className="list-unstyled">
                                    <li>Iphone</li>
                                    <li>Samsung</li>
                                    <li>Xiaomi</li>
                                    <li>Oppo</li>
                                    <li>Reami</li>
                                    <li>Sony</li>
                                </ul>
                            </div>
                            <div style={{ width: '16.6667%' }}>
                                <h3>Điện thoại, tablet</h3>
                                <ul className="list-unstyled">
                                    <li>Iphone</li>
                                    <li>Samsung</li>
                                    <li>Xiaomi</li>
                                    <li>Oppo</li>
                                    <li>Reami</li>
                                    <li>Sony</li>
                                </ul>
                            </div>
                        </div>
                    )}>
                    <Link className="px-4 py-3 text-white d-flex align-items-center"><RiProductHuntLine className="fs-2" style={{ marginRight: 4 }} />Sản phẩm<AiFillCaretDown /></Link>
                </Tippy>
                <Link to="/Introduce" className="px-4 py-3 text-white d-flex align-items-center"><MdRecommend className="fs-2" style={{ marginRight: 4 }} />Giới thiệu</Link>
                <Link to="/QuestionCommon" className="px-4 py-3 text-white d-flex align-items-center"><FaRegQuestionCircle className="fs-2" style={{ marginRight: 4 }} />Câu hỏi thường gặp</Link>
                <Link to="/Hiring" className="px-4 py-3 text-white d-flex align-items-center"><FaBriefcase className="fs-2" style={{ marginRight: 4 }} />Tuyển dụng</Link>
                <Link to="/Interact" className="px-4 py-3 text-white d-flex align-items-center"><MdContactMail className="fs-2" style={{ marginRight: 4 }} />Liên hệ</Link>
            </Container>
        </div>
    )
}
