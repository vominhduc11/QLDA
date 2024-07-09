import styles from "./Style.module.scss"
import { AiFillYoutube, AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa";
import { useRef } from "react";
import { Carousel } from "@trendyol-js/react-carousel";

function Footer() {

    const color = useRef();

    function effectUtilOver(param) {
        color.current = param.children[0].style.color
        param.children[0].style.width = 24;
        param.children[0].style.height = 24;
        param.children[0].style.color = "#fff";
    }

    function effectUtilOut(param) {
        param.children[0].style.width = 18;
        param.children[0].style.height = 18;
        param.children[0].style.color = color.current;
    }
    return (
        <div id={styles.footer}>
            <div id={styles.grid}>
                <div>
                    <div>
                        <h4>VĂN PHÒNG GIAO DỊCH</h4>
                        <p>Trang chủ</p><br />
                        <p>Giới thiệu</p><br />
                        <p>Sản phẩm</p><br />
                        <p>Tin mới nhất</p><br />
                        <p>Câu hỏi thường gặp</p><br />
                        <p>Tuyển dụng</p><br />
                        <p>Liên hệ</p><br />
                    </div>
                    <div>
                        <h4>VỀ CHÚNG TÔI</h4>
                        <p>Trang chủ</p><br />
                        <p>Giới thiệu</p><br />
                        <p>Sản phẩm</p><br />
                        <p>Tin mới nhất</p><br />
                        <p>Câu hỏi thường gặp</p><br />
                        <p>Tuyển dụng</p><br />
                        <p>Liên hệ</p><br />
                    </div>
                    <div>
                        <h4>CHÍNH SÁCH BÁN HÀNG</h4>
                        <p>Trang chủ</p><br />
                        <p>Giới thiệu</p><br />
                        <p>Sản phẩm</p><br />
                        <p>Tin mới nhất</p><br />
                        <p>Câu hỏi thường gặp</p><br />
                        <p>Tuyển dụng</p><br />
                        <p>Liên hệ</p><br />
                    </div>
                    <div>
                        <h4>Theo dõi chung tôi</h4>
                        <p>Trang chủ</p><br />
                        <p>Giới thiệu</p><br />
                        <p>Sản phẩm</p><br />
                        <p>Tin mới nhất</p><br />
                        <p>Câu hỏi thường gặp</p><br />
                        <p>Tuyển dụng</p><br />
                        <p>Liên hệ</p><br />
                    </div>
                </div>
                <div>
                    <div>
                        <h4>THIÊN ĐƯỜNG MUA SẮM POCO MART</h4>
                        <p>Copyright@ 2021 Công ty cổ phần thương mại Poco Mart</p>
                        <p>Chứng nhận ĐKKD số: 0388282938 do sở KH & ĐT TP.Hà Nội cấp</p>
                        <p>Địa chỉ: Tòa nhà Ladeco 266 Đội Cấn, Ba Đình, Hà Nội</p>
                        <p>Điện thoại: 19006750 - Email: support@sapo.vn</p>
                    </div>
                    <div>
                        <h4>NHẬN TIN KHUYẾN MÃI</h4>
                        <div>
                            <input placeholder="Nhập email của bạn" />
                            <button>Đăng ký</button>
                        </div>
                        <div>
                            <div onMouseOut={(e) => { effectUtilOut(e.currentTarget) }} onMouseOver={(e) => { effectUtilOver(e.currentTarget) }}><FaFacebookF style={{ color: "#3B5998", width: 18, height: 18, zIndex: 1, transition: "all 0.15s linear" }} /></div>
                            <div onMouseOut={(e) => { effectUtilOut(e.currentTarget) }} onMouseOver={(e) => { effectUtilOver(e.currentTarget) }}><AiOutlineTwitter style={{ color: "#3CF", width: 18, height: 18, zIndex: 1, transition: "all 0.15s linear" }} /></div>
                            <div onMouseOut={(e) => { effectUtilOut(e.currentTarget) }} onMouseOver={(e) => { effectUtilOver(e.currentTarget) }} ><AiOutlineGoogle style={{ color: "#DC4A38", width: 18, height: 18, zIndex: 1, transition: "all 0.15s linear" }} /></div>
                            <div onMouseOut={(e) => { effectUtilOut(e.currentTarget) }} onMouseOver={(e) => { effectUtilOver(e.currentTarget) }}><AiFillYoutube style={{ color: "#DC4A38", width: 18, height: 18, zIndex: 1, transition: "all 0.15s linear" }} /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Bản quyền thuộc về <strong>Ego Creative</strong> Cung cấp bởi <strong>Sapo</strong></p>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Giới thiệu</li>
                        <li>Sản phẩm</li>
                        <li>Tin mới nhất</li>
                        <li>Câu hỏi thường gặp</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;