import { useEffect } from "react";
import styles from "./style.module.scss"

function Introduce() {

    useEffect(() => {
        document.querySelector('title').innerText = 'Giới thiệu';
    });
    return (
        <div id={styles.introduce}>
            <div id={styles.grid}>
                <p>
                    <span>Trang chủ</span>
                    <span style={{ margin: "0 12px" }}>/</span>
                    <span>Giới thiệu</span>
                </p>
                <h1>GIỚI THIỆU</h1>
                <div style={{ border: '2px red solid', borderBottom: 'none', margin: '16px 0px' }}></div>
                <div>
                    <p><strong>POCO MART</strong> là hệ thống siêu thị thuộc tập đoàn <strong>EGO</strong>, Việt Nam. Hệ thống này khai trương ngày tháng 11 năm 2019. Theo thống kê của Vietnam Report, tính đến tháng 11/2020, PocoMart nằm top 2 nhà bán lẻ được người tiêu dùng quan tâm nhất và top 4 trên bảng xếp hạng 10 nhà bán lẻ uy tín năm 2020</p>
                    <p>Tháng 5 năm 2021, POCO Mart có khoảng 40 siêu thị và khoảng hơn 600 cửa hàng Pocomart trên gần 50 tỉnh thành với tổng diện tích mặt bằng kinh doanh hơn 300.000 m2, số lượng nhân viên khoảng hơn 3.000 người.</p>
                    <p>Các sản phẩm của PocoMart bao gồm thực phẩm tươi sống, thực phẩm sơ chế, quần áo, mỹ phẩm, đồ gia dụng, văn phòng phẩm, đồ chơi, v.v.</p>
                </div>
            </div>
        </div>
    );
}

export default Introduce;