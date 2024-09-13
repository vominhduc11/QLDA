import { useEffect, useState } from "react";
import styles from "./style.module.scss"
import { Container } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function QuestionCommon() {

    const [active, setActive] = useState();

    useEffect(() => {
        document.querySelector('title').innerText = 'Câu hỏi thường gặp';
    });
    return (
        <div id={styles.questionCommon}>
            <div className="bg-white py-3">
                <Container style={{ width: 1200 }} className="d-flex align-items-center">
                    <Link to="/"><AiOutlineHome size={22} color="#f72c0f" /></Link>
                    <span className="mx-3"><FaChevronRight color="#f72c0f" /></span>
                    <span className="mt-1" style={{ color: '#f72c0f' }}>Câu hỏi thường gặp</span>
                </Container>
            </div>
            <div id={styles.grid}>
                <h1>CÂU HỎI THƯỜNG GẶP</h1>
                <div style={{ border: '2px red solid', borderBottom: 'none', margin: '16px 0px' }}></div>
                <div className={styles.question} style={{ color: active === 1 ? '#ffb416' : '' }} onClick={() => setActive(1)}>Poco Mart có xác nhận đơn hàng với tôi không?</div>
                {active === 1 && <p className={styles.answer} >Với khách hàng đặt mua hàng thành công đầu tiên, để đẩy nhanh tiến độ xử lý và giao hàng đến quý khách, các đơn hàng sẽ được xác nhận qua email.</p>}
                <div className={styles.question} style={{ color: active === 2 ? '#ffb416' : '' }} onClick={() => setActive(2)}>Làm thế nào để tôi đặt nhiều sản phẩm vào cùng 1 đơn hàng?</div>
                {active === 2 && <p className={styles.answer}>Qúy khách có thể đặt các sản phẩm khác nhau trong 1 giỏ hàng thành 1 đơn hàng, các sản phẩm trong giỏ hàng sẽ được đóng thành 1 kiện hàng (nếu các sản phẩm có cùng kho xử lý/nhà bán hàng) và giao đến địa chỉ quý khách đã đăng ký.</p>}
                <div className={styles.question} style={{ color: active === 3 ? '#ffb416' : '' }} onClick={() => setActive(3)}>Tôi có thể thanh toán khi nhận hàng không?</div>
                {active === 3 && <p className={styles.answer}>Poco Mart hỗ trợ giao hàng và thanh toán tận nơi cho các đơn hàng có tổng trị giá từ 20.000.000đ trở xuống trên toàn quốc. Quý khách có thể tham khảo thêm các phương thức thanh toán khác</p>}
                <div className={styles.question} style={{ color: active === 4 ? '#ffb416' : '' }} onClick={() => setActive(4)}>Poco Mart bán những sản phẩm gì?</div>
                {active === 4 && <p className={styles.answer}>Được thành lập từ tháng 6/2019, đến nay website thương mại điện tử Poco Mart cung cấp các sản phẩm thuộc ngành hàng như sau: Điện Thoại, Thời Trang, Nội Thất, Đồ Chơi, Văn Phòng Phẩm, Làm Đẹp, Sức Khỏe, Laptop, Máy Chơi Game, Điện Gia Dụng...</p>}
                <div className={styles.question} style={{ color: active === 5 ? '#ffb416' : '' }} onClick={() => setActive(5)}>Làm thế nào để tôi biết sản phẩm còn hay hết hàng?</div>
                {active === 5 && <p className={styles.answer}>Quý khách có thể nhận biết sản phẩm còn hàng hay hết hàng tại Poco Mart bằng cách truy cập vào thông tin chi tiết của sản phẩm và kiểm tra trạng thái sau: Nút mua hàng hiển thị</p>}
            </div>
        </div>
    );
}

export default QuestionCommon;