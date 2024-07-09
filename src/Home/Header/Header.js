import styles from "./Style.module.scss"

import { FiSearch, FiPhoneCall } from "react-icons/fi"
import { HiOutlineUserCircle } from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"
import { BsBag } from "react-icons/bs"
import { FaRandom } from "react-icons/fa"

import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

export default function Header() {
    return (
        // Grid outside
        <div className="bg-white">
            <Container id={styles.Grid} className="d-flex justify-content-between align-items-center py-3">
                {/* logo */}
                <Link to="/"><img width="170" height="43" src="//bizweb.dktcdn.net/100/429/689/themes/869367/assets/logo.png?1672132862712" alt=""></img></Link>
                {/* Search, username, hotline */}
                <div className="d-flex align-items-center">
                    {/* Search */}
                    <div id={styles.Search} className="position-relative">
                        <input className="no-outline border-1 border-danger rounded-1 px-2 py-2" placeholder="Tìm kiếm sản phẩm..." />
                        <span className="position-absolute"><FiSearch size={22} /></span>
                    </div>
                    {/* username */}
                    <div className="d-flex align-items-center">
                        <span style={{ padding: "0 8px" }}><FiPhoneCall color="#eb3e32" size="26" /></span>
                        <div>
                            <div>Tư vấn hỗ trợ</div>
                            <div style={{ color: "#eb3e32", fontSize: 17, fontWeight: 500 }}>19006750</div>
                        </div>
                    </div>
                    {/* hotline */}
                    <div className="d-flex align-items-center">
                        <span style={{ padding: "0 8px" }}><HiOutlineUserCircle color="#eb3e32" size="32" /></span>
                        <div>
                            <div>Xin chào!</div>
                            <Link to="/Login" style={{ color: "#eb3e32", fontSize: 15, fontWeight: 500, cursor: 'pointer' }}>Đăng nhập</Link>
                        </div>
                    </div>
                </div>
                {/* Like, Cart, compare */}
                <div>
                    <Link to="/Favorite">
                        <AiOutlineHeart size={20} />
                        <span>0</span>
                    </Link>
                    <Link to="/Cart" className="mx-3">
                        <BsBag size={20} />
                        <span>0</span>
                    </Link>
                    <Link to="/Compare">
                        <FaRandom size={20} />
                        <span>2</span>
                    </Link>
                </div>
            </Container>
        </div>
    )
}
