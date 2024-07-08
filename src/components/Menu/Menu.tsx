import {WrapperLink, WrapperUl} from "./style";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {RSSFeed} from "../../service/rssService";
import {loadCate} from "../../store/cateReducer";


function Menu() {
    const dispatch = useDispatch();
    const [bongDaVN, setBongDaVn] = useState(null);
    const [bongDaQT, setBongDaQT] = useState();
    const [chuyenNhuong, setChuyenNhuong] = useState(null);
    const [nhanDinh, setNhanDinh] = useState(null);
    const [theThao, setTheThao] = useState(null);
    const [esports, setEsports] = useState(null);

    useEffect(() => {
        async function setFeed() {
            setBongDaVn(await RSSFeed("https://thethao247.vn/bong-da-viet-nam-c1.rss"));
            setBongDaQT(await RSSFeed("https://thethao247.vn/bong-da-quoc-te-c2.rss"));
            setChuyenNhuong(await RSSFeed("https://thethao247.vn/tin-chuyen-nhuong-c14.rss"));
            setNhanDinh(await RSSFeed("https://thethao247.vn/nhan-dinh-c165.rss"));
            setTheThao(await RSSFeed("https://thethao247.vn/the-thao-tong-hop-c5.rss"));
            setEsports(await RSSFeed("https://thethao247.vn/esports-c180.rss"));
        }
        setFeed();
    }, []);
    useEffect(() => {
        if (bongDaVN && bongDaQT && chuyenNhuong && nhanDinh && theThao && esports) {
            dispatch(loadCate([
                { name: "Bóng đá Việt Nam", items: bongDaVN },
                { name: "Bóng đá Quốc Tế", items: bongDaQT },
                { name: "Thể thao", items: theThao },
                { name: "Nhận định", items: nhanDinh },
                { name: "Chuyển nhượng", items: chuyenNhuong },
                { name: "Esport", items: esports },
            ]));
        }
    }, [bongDaVN, bongDaQT, chuyenNhuong, nhanDinh, theThao, esports, dispatch]);
    return (
        <div style={{background:"white", }}>
            <WrapperUl>
                <li>
                    <WrapperLink to ={"/"}>TRANG CHỦ</WrapperLink>
                </li>
                <li>
                    <WrapperLink to = {"/category/bong-da-viet-nam"}>BÓNG ĐÁ VIỆT NAM</WrapperLink>
                </li>
                <li>
                    <WrapperLink to = {"/category/bong-da-quoc-te"}>BÓNG ĐÁ QUỐC TẾ</WrapperLink>
                </li>
                <li>
                    <WrapperLink to = {"/category/tin-chuyen-nhuong"}>CHUYỂN NHƯỢNG</WrapperLink>
                </li>
                <li>
                    <WrapperLink to = {"/category/nhan-dinh"}>NHẬN ĐỊNH</WrapperLink>
                </li>
                <li>
                    <WrapperLink to = {"/category/the-thao-tong-hop"}>THỂ THAO</WrapperLink>
                </li>
                <li>
                    <WrapperLink to ={"/category/esport"}>ESPORT</WrapperLink>
                </li>
            </WrapperUl>
        </div>
    );
}

export default Menu;