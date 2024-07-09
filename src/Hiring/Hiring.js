import { useEffect } from "react";
import styles from "./style.module.scss"

function Hiring() {

    useEffect(() => {
        document.querySelector('title').innerText = 'Tuyển dụng';
    });
    return (
        <div id={styles.new}>
            <div id={styles.grid}>
                <p>
                    <span>Trang chủ</span>
                    <span style={{ margin: "0 12px" }}>/</span>
                    <span>Tuyển dụng</span>
                </p>
                <h1>Tuyển dụng</h1>
                <div style={{ border: '2px red solid', borderBottom: 'none' }}></div>
                <div>
                    <h3>POCO MART TUYỂN DỤNG NHÂN VIÊN BÁN HÀNG FULLTIME TOÀN HÀ NỘI & HCM</h3>
                    <span>**</span><br />
                    <img src="https://bizweb.dktcdn.net/100/429/689/files/thungantrangtri-b4d1efe6-29e4-4629-afe7-61c2089a1580.jpg?v=1623588978620" alt="" />
                </div>
                <div>
                    <h3>MÔ TẢ CÔNG VIỆC:</h3>
                    <p>- Tính tiền quản lý thu chi trong ca làm việc</p>
                    <p>- Tiếp nhận hàng, trưng bày hàng hóa đúng quy tắc</p>
                    <p>- Vệ sinh sạch sẽ siêu thị, quầy thu ngân</p>
                    <p>- Chủ động hỗ trợ, phục vụ khách hàng</p>
                    <p>- Tư vấn giải đáp thắc mắc,yêu cầu của khách hàng khi tham quan mua sắm</p>
                </div>
                <div>
                    <h3>YÊU CẦU ỨNG VIÊN:</h3>
                    <p>- Nam/Nữ</p>
                    <p>- Tốt nghiệp THPT trở lên. kỹ năng giao tiếp tốt</p>
                    <p>- Có khả năng làm việc xoay ca (không làm chết ca):</p>
                    <p>+ Ca sáng (6:00 - 14:00)</p>
                    <p>+ Ca chiều (13:30:00 - 22:00)</p>
                    <p>= {">"} Đăng ký ca trước làm 1 tuần</p>
                    <p>- Chăm chỉ, trung thực, khỏe mạnh, nhanh nhẹn, hòa đồng</p>
                </div>
                <div>
                    <h3>QUYỀN LỢI NHÂN VIÊN:</h3>
                    <p><strong>_- Lương cứng thử việc 4.8 triệu + Thưởng_</strong></p>
                    <p><strong><i>- Lương chính thức: 5,4tr (đã bao gồm bảo hiểm) + Các phúc lợi + Các khoản thưởng KPIs</i></strong></p>
                    <p><i>*- Tổng thu nhập 6 - 9 triệu + Chế độ đầy đủ*</i></p>
                    <p>- 1 tuần nghỉ 1 ngày báo quản lí</p>
                    <p>- Được đóng đầy đủ 03 loại bảo hiểm BHXH, BHYT, BHTN và gói bảo hiểm sức khỏe Bảo Việt chế độ cao</p>
                    <p>- Có cơ hội thăng tiến lên Cửa hàng Phó trong vòng 06 tháng, cửa hàng trưởng sau 4 tháng tiếp</p>
                    <p>Loại hình công việc: Toàn thời gian</p>
                    <p>Lương: 6.000.000₫ - 9.000.000₫ một tháng</p>
                </div>
            </div>
        </div>
    );
}

export default Hiring;