import { Container } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { RiBarChartFill, RiShoppingCartLine } from "react-icons/ri";

import styles from "./Style.module.scss"

export default function Favorite() {
    return (
        <div>
            <div className="bg-white py-3">
                <Container style={{ width: 1200 }} className="d-flex align-items-center">
                    <span><AiOutlineHome size={22} color="#f72c0f" /></span>
                    <span className="mx-3"><FaChevronRight color="#f72c0f" /></span>
                    <span style={{ color: '#f72c0f' }}>Yêu thích</span>
                </Container>
            </div>
            <div className="pt-4">
                <Container style={{ width: 1200 }}>
                    <div className="d-flex flex-wrap">
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                        <div id={styles.Item} className="p-2">
                            <div className="bg-white position-relative">
                                <img width="100%" src="https://bizweb.dktcdn.net/thumb/medium/100/429/689/products/dien-thoai-samsung-galaxy-s21-ultra-5g-256g-g998b-bac-h0l175-b6ac0e17-afc8-42a9-bb4f-aecaf81ad7e2.jpg?v=1623565400000" alt="" loading="lazy" />
                                <div className="p-3">
                                    <h3 className="fw-bold">Samsung Galaxy Note 21</h3>
                                    <p className="fw-semibold text-danger mb-0 fs-3">29.000.000 <sup><u>đ</u></sup></p>
                                    <p className="text-decoration-line-through mb-0">30.500.000 <sup><u>đ</u></sup></p>
                                </div>
                                <span className="position-absolute text-center fw-semibold">Giảm 5%</span>
                                <span className="position-absolute"><AiOutlineHeart /></span>
                                <span className="position-absolute"><RiBarChartFill /></span>
                                <span className="position-absolute"><RiShoppingCartLine /></span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
