/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./style.module.scss"
import { IoLocationSharp } from "react-icons/io5"
import { BsQuestionLg, BsTelephoneFill } from "react-icons/bs";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

function Interact() {

    useEffect(() => {
        document.querySelector('title').innerText = 'Liên hệ';
    });
    return (
        <div id={styles.interact}>
            <div className="bg-white py-3">
                <Container style={{ width: 1200 }} className="d-flex align-items-center">
                    <Link to="/"><AiOutlineHome size={22} color="#f72c0f" /></Link>
                    <span className="mx-3"><FaChevronRight color="#f72c0f" /></span>
                    <span className="mt-1" style={{ color: '#f72c0f' }}>Liên hệ</span>
                </Container>
            </div>
            <div id={styles.grid}>
                <h1>LIÊN HỆ</h1>
                <div style={{ border: '2px red solid', borderBottom: 'none', margin: '16px 0px' }}></div>
                {/* // eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe title="" src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d7447.820563022021!2d105.81416108623047!3d21.0362755691129!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zUGjhuqduIG3hu4FtIHF14bqjbiBsw70gYsOhbiBow6BuZyAtIFNhcG8gUE9TIFThuqduZyA2LCBUw7JhIG5ow6AgTGFkZWNvLCBT4buRLCAyNjYgxJDhu5lpIEPhuqVuIEJhIMSQw6xuaCBIw6AgTuG7mWkgMTAwMDAw!3m2!1d21.036515899999998!2d105.8158777!5e0!3m2!1svi!2s!4v1676336069057!5m2!1svi!2s" width="600" height="450" style={{ border: 0, width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                <div className={styles.infoAccress}>
                    <div>
                        <div>
                            <span><IoLocationSharp /></span>
                            <div>
                                <p><strong>Địa chỉ:</strong></p>
                                <p>Tòa nhà Ladeco 266 Đội Cấn, Ba Đình, Hà Nội</p>
                            </div>
                        </div>
                        <div>
                            <span><BsQuestionLg /></span>
                            <div>
                                <p><strong>Gửi thắc mắc:</strong></p>
                                <p>support@sapo.vn</p>
                            </div>
                        </div>
                        <div>
                            <span><BsTelephoneFill /></span>
                            <div>
                                <p><strong>Điện thoại:</strong></p>
                                <p>19006750</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p><strong>Họ và tên</strong> <span style={{ color: 'red' }}>*</span></p>
                                <input />
                            </div>
                            <div>
                                <p><strong>Email</strong> <span style={{ color: 'red' }}>*</span></p>
                                <input />
                            </div>
                        </div>
                        <div>
                            <p><strong>Nội dung</strong> <span style={{ color: 'red' }}>*</span></p>
                            <textarea cols={20} rows={20} />
                        </div>
                        <button>Gửi liên hệ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interact;