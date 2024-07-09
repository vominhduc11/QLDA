import { Container, Image } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { IoIosStarHalf, IoMdStar } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";

import ReactStars from 'react-rating-stars-component';

export default function Compare() {
    return (
        <div>
            <div className="bg-white py-3">
                <Container style={{ width: 1200 }} className="d-flex align-items-center">
                    <span><AiOutlineHome size={22} color="#f72c0f" /></span>
                    <span className="mx-3"><FaChevronRight color="#f72c0f" /></span>
                    <span style={{ color: '#f72c0f' }}>So sánh sản phẩm</span>
                </Container>
            </div>
            <Container style={{ width: 1200 }} className="d-flex align-items-center pt-4">
                <div className="w-100 bg-white p-3">
                    <h3 className="py-3">So sánh sản phẩm</h3>
                    <div className="d-flex">
                        <div className="border p-3 position-relative" style={{ width: '33.3333%' }}>
                            <div>
                                <div className="text-center">
                                    <Image src="https://bizweb.dktcdn.net/thumb/compact/100/507/051/products/asus-nubia-8s-pro.webp" alt="" />
                                </div>
                                <p>Nubia RedMagic 8S Pro 5G 12GB</p>
                                <p className="text-danger mb-0 fw-semibold">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                <div className="d-flex align-items-center">
                                    <p style={{ marginRight: 16 }} className="text-decoration-line-through mb-0">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                    <p className="text-danger mb-0">(-9%)</p>
                                </div>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <ReactStars
                                    emptyIcon={<MdOutlineStarOutline color="#ffd700" />}
                                    filledIcon={<IoMdStar />}
                                    halfIcon={<IoIosStarHalf />}
                                    count={5}
                                    value={4}
                                    size={16}
                                    activeColor="#ffd700"
                                />
                                <span>Có 0 Đánh giá</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Thương hiệu:</span>
                                <span>Apple</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Loại:</span>
                                <span>Điện thoại</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Trạng thái:</span>
                                <span>Còn hàng</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Tùy chọn:</span>
                                <ul className="list-unstyled d-flex flex-wrap mb-0" style={{ maxWidth: 300 }}>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }}>
                                <span className="fw-semibold">Cấu hình chi tiết:</span>
                                <div className="mt-3">
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Kích thước màn hình</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>6.7 Inches</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Độ phân giải màn hình</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>1284 x 2778 pixels</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Loại màn hình</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Bộ nhớ trong</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>128 GB</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Chipset</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>Apple A14 Bionic (5 nm)</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Kích thước</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>160.8 x 78.1 x 7.4 mm</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Trọng lượng</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>228g</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Camera sau</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS
                                            12 MP, f/2.0, 52mm (telephoto), 1/3.4', 1.0µm, PDAF, OIS, 2x optical zoom
                                            12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6'
                                            TOF 3D LiDAR scanner (depth)
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Camera trước</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            12 MP, f/2.2, 23mm (wide), 1/3.6'
                                            SL 3D, (depth/biometrics sensor)
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Quay video</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Trước: 4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS
                                            Sau: 4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Pin</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Loại SIM</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Dual SIM (nano‑SIM and eSIM)
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Hệ điều hành</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            iOS
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Phiên bản hệ điều hành</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            iOS 14
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Khe cắm thẻ nhớ</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Không
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>WLAN</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Bluetooth</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            5.0, A2DP, LE
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>GPS</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            A-GPS, GLONASS, GALILEO, QZSS
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>NFC</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Yes
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Cảm biến</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Face ID, cảm biến gia tốc, cảm biến tiệm cận, con quay hồi chuyển, cảm biên sáng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="position-absolute" style={{ top: 6, right: 6, cursor: 'pointer' }}><IoClose size={30} /></span>
                        </div>
                        <div className="border p-3 position-relative" style={{ width: '33.3333%' }}>
                            <div>
                                <div className="text-center">
                                    <Image src="https://bizweb.dktcdn.net/thumb/compact/100/507/051/products/asus-nubia-8s-pro.webp" alt="" />
                                </div>
                                <p>Nubia RedMagic 8S Pro 5G 12GB</p>
                                <p className="text-danger mb-0 fw-semibold">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                <div className="d-flex align-items-center">
                                    <p style={{ marginRight: 16 }} className="text-decoration-line-through mb-0">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                    <p className="text-danger mb-0">(-9%)</p>
                                </div>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <ReactStars
                                    emptyIcon={<MdOutlineStarOutline color="#ffd700" />}
                                    filledIcon={<IoMdStar />}
                                    halfIcon={<IoIosStarHalf />}
                                    count={5}
                                    value={4}
                                    size={16}
                                    activeColor="#ffd700"
                                />
                                <span>Có 0 Đánh giá</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Thương hiệu:</span>
                                <span>Apple</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Loại:</span>
                                <span>Điện thoại</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Trạng thái:</span>
                                <span>Còn hàng</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Tùy chọn:</span>
                                <ul className="list-unstyled d-flex flex-wrap mb-0" style={{ maxWidth: 300 }}>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }}>
                                <span className="fw-semibold">Cấu hình chi tiết:</span>
                                <div className="mt-3">
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Kích thước màn hình</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>6.7 Inches</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Độ phân giải màn hình</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>1284 x 2778 pixels</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Loại màn hình</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Bộ nhớ trong</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>128 GB</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Chipset</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>Apple A14 Bionic (5 nm)</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Kích thước</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>160.8 x 78.1 x 7.4 mm</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Trọng lượng</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>228g</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Camera sau</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS
                                            12 MP, f/2.0, 52mm (telephoto), 1/3.4', 1.0µm, PDAF, OIS, 2x optical zoom
                                            12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6'
                                            TOF 3D LiDAR scanner (depth)
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Camera trước</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            12 MP, f/2.2, 23mm (wide), 1/3.6'
                                            SL 3D, (depth/biometrics sensor)
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Quay video</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Trước: 4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS
                                            Sau: 4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Pin</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Loại SIM</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Dual SIM (nano‑SIM and eSIM)
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Hệ điều hành</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            iOS
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Phiên bản hệ điều hành</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            iOS 14
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Khe cắm thẻ nhớ</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Không
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>WLAN</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Bluetooth</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            5.0, A2DP, LE
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>GPS</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            A-GPS, GLONASS, GALILEO, QZSS
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>NFC</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Yes
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Cảm biến</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Face ID, cảm biến gia tốc, cảm biến tiệm cận, con quay hồi chuyển, cảm biên sáng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="position-absolute" style={{ top: 6, right: 6, cursor: 'pointer' }}><IoClose size={30} /></span>
                        </div>
                        <div className="border p-3 position-relative" style={{ width: '33.3333%' }}>
                            <div>
                                <div className="text-center">
                                    <Image src="https://bizweb.dktcdn.net/thumb/compact/100/507/051/products/asus-nubia-8s-pro.webp" alt="" />
                                </div>
                                <p>Nubia RedMagic 8S Pro 5G 12GB</p>
                                <p className="text-danger mb-0 fw-semibold">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                <div className="d-flex align-items-center">
                                    <p style={{ marginRight: 16 }} className="text-decoration-line-through mb-0">15.490.000<sup className="text-decoration-underline">đ</sup></p>
                                    <p className="text-danger mb-0">(-9%)</p>
                                </div>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <ReactStars
                                    emptyIcon={<MdOutlineStarOutline color="#ffd700" />}
                                    filledIcon={<IoMdStar />}
                                    halfIcon={<IoIosStarHalf />}
                                    count={5}
                                    value={4}
                                    size={16}
                                    activeColor="#ffd700"
                                />
                                <span>Có 0 Đánh giá</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Thương hiệu:</span>
                                <span>Apple</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Loại:</span>
                                <span>Điện thoại</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Trạng thái:</span>
                                <span>Còn hàng</span>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }} className="d-flex align-items-center justify-content-between py-1">
                                <span className="fw-semibold">Tùy chọn:</span>
                                <ul className="list-unstyled d-flex flex-wrap mb-0" style={{ maxWidth: 300 }}>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                    <li className="px-2 py-1 bg-danger text-white rounded-2 my-2" style={{ marginLeft: 8 }}>
                                        <span>Đen</span>/<span>128GB</span>
                                    </li>
                                </ul>
                            </div>
                            <div style={{ borderTop: '1px #ebebeb solid' }}>
                                <span className="fw-semibold">Cấu hình chi tiết:</span>
                                <div className="mt-3">
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Kích thước màn hình</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>6.7 Inches</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Độ phân giải màn hình</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>1284 x 2778 pixels</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Loại màn hình</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>Super Retina XDR OLED, HDR10, Dolby Vision, Wide color gamut, True-tone</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Bộ nhớ trong</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>128 GB</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Chipset</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>Apple A14 Bionic (5 nm)</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Kích thước</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>160.8 x 78.1 x 7.4 mm</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Trọng lượng</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>228g</div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Camera sau</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS
                                            12 MP, f/2.0, 52mm (telephoto), 1/3.4', 1.0µm, PDAF, OIS, 2x optical zoom
                                            12 MP, f/2.4, 120˚, 13mm (ultrawide), 1/3.6'
                                            TOF 3D LiDAR scanner (depth)
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Camera trước</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            12 MP, f/2.2, 23mm (wide), 1/3.6'
                                            SL 3D, (depth/biometrics sensor)
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Quay video</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Trước: 4K@24/30/60fps, 1080p@30/60/120fps, gyro-EIS
                                            Sau: 4K@24/30/60fps, 1080p@30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), stereo sound rec.
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Pin</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Li-Ion, sạc nhanh 20W, sạc không dây 15W, USB Power Delivery 2.0
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Loại SIM</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Dual SIM (nano‑SIM and eSIM)
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Hệ điều hành</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            iOS
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Phiên bản hệ điều hành</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            iOS 14
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Khe cắm thẻ nhớ</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Không
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>WLAN</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Bluetooth</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            5.0, A2DP, LE
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>GPS</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            A-GPS, GLONASS, GALILEO, QZSS
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>NFC</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Yes
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fw-semibold p-2" style={{ backgroundColor: '#e3e3e3' }}>Cảm biến</div>
                                        <div className="p-2" style={{ backgroundColor: '#ebebeb' }}>
                                            Face ID, cảm biến gia tốc, cảm biến tiệm cận, con quay hồi chuyển, cảm biên sáng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="position-absolute" style={{ top: 6, right: 6, cursor: 'pointer' }}><IoClose size={30} /></span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
