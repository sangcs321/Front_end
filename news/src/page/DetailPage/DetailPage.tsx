import React, {useEffect, useState} from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import "./style.css"
import {useLoaderData} from "react-router";
import {Col, Row} from "antd";
import Caption from "../../components/Caption/Caption";
import {RSSFeed} from "../../service/rssService";
import {NewsItem} from "../../components/NewsItem";
import Item from '../../components/Item';
import {DetailFeed} from "../../service/detailService";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export async function loadUrl({params}: any) {
    const url = params.url;
    const articleContent = await DetailFeed(params.url);
    const data = [url, articleContent]
    return data;
}
const DetailPage = () => {
    const parser = new DOMParser();
    const data:any = useLoaderData()

    const url = `https://dantri.com.vn/${data[0]}`
    // const url = `http://localhost:3000/${data[0]}`
    const articleContent: any = data[1]
    const cate = useSelector((state: any) => state.cate)
    const[cateName, setCateName] = useState('');
    const[cateItem, setCateItem] = useState([]);
    useEffect(() => {
        let foundCategoryName = '';
        let foundItem = [];
        for (let category of cate.cates) {
            for (let item of category.items) {
                if (item.link === url) {
                    foundCategoryName = category.name;
                    foundItem = category.items;
                    break;
                }
            }
            if (foundCategoryName) break;
        }
        if (foundCategoryName && foundItem) {
            setCateName(foundCategoryName);
            setCateItem(foundItem)
        }
    }, [cate, url]);
    console.log("cateName", cateName)
    console.log("cateItem", cateItem)
    const[newFeed, setNewFeed] = useState([])
    useEffect(() => {
        async function setFeed () {
            setNewFeed(await RSSFeed("https://dantri.com.vn/rss/home.rss"));
        }
        setFeed();
    }, []);
    let toUrl = "/category";
    switch (cateName) {
        case "Kinh doanh":
            toUrl += "/kinh-doanh";
            break;
        case "Xã hội":
            toUrl = "/xa-hoi";
            break;
        case "Thế giới":
            toUrl = "/the-gioi";
            break;
        case "Giải trí":
            toUrl = "/giai-tri";
            break;
        case "Bất động sản":
            toUrl = "/bat-dong-san";
            break;
        case "Thể thao":
            toUrl = "/the-thao";
            break;
        default:
            return url;
    }
    return (
        <div style={{backgroundColor: '#f2f2f2', padding: '20px 0'}}>
            <div style = {{maxWidth: 1200, margin: "auto", padding: "0 0 20px 15px"}}>
                <Link style={{textDecoration: "none", color: "black", fontSize: 15}} to = "/">Trang chủ</Link>
                <Link style={{textDecoration: "none", fontSize: 15}} to={toUrl}>{" > " + cateName}</Link>
            </div>
            <div style={{maxWidth: 1200, margin: 'auto', textAlign: 'start', padding: '0px 15px',backgroundColor: 'white'}}>
                <Row>
                    <Col lg={17} md ={24}>
                        <h1 className = "big_title">{articleContent[0]}</h1>
                        <div  dangerouslySetInnerHTML={{ __html: articleContent[1] }} />
                    </Col>
                    <Col lg={7} md ={0} sm = {0} xs = {0} style={{paddingTop: 15, paddingLeft: 10}}>
                        <Row>
                            <Col span = {24}>
                                <Caption title ="Tin liên quan" link={"category/kinh-doanh"}/>
                                {cateItem.slice(0,4).map((item:any, index:any) => {
                                    let imageUrl: any = "";
                                    const doc = parser.parseFromString(item.content, 'text/html');
                                    const imgElement = doc.querySelector('img');
                                    if (imgElement) {
                                        imageUrl = imgElement.getAttribute('src');
                                    }
                                    return(
                                        <div style={{marginBottom: "15px"}}>
                                            <Item title={item.title} description={""} imageUrl={imageUrl} newsUrl={item.link} style={{width:"100%", height: "100%", }}  styleBody={{fontSize: "10px"}} col1={10} col2={14} />
                                        </div>
                                    );
                                })}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={18} >
                        <Caption title ="Tin mới nhất"/>
                        {newFeed.slice(1, 10).map((item: any, index: any) => {
                            let imageUrl: any = "";
                            const doc = parser.parseFromString(item.content, 'text/html');
                            const imgElement = doc.querySelector('img');
                            if (imgElement) {
                                imageUrl = imgElement.getAttribute('src');
                            }
                            return (
                                <div key={index} style={{marginBottom: "15px"}}>
                                    <Item title={item.title} description={item.contentSnippet} imageUrl={imageUrl} newsUrl={item.link} style={{width:"100%", height: "100%"}} styleBody={""} col1={6} col2={18} />
                                </div>
                            );
                        })
                        }
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default DetailPage;