import React, {useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import {DetailFeed} from "../service/detailService";
import {Col, List, Row} from "antd";
import {RSSFeed} from "../service/rssService";
import {useSelector} from "react-redux";
import Item = List.Item;


export async function loadUrl({params}: any) {
}
const DetailPage = () => {
    const parser = new DOMParser();
    const data:any = useLoaderData()
    const url = `https://dantri.com.vn/${data[0]}`
    const articleContent: any = data[1]
    const cate = useSelector((state: any) => state.cate)
    const[cateName, setCateName] = useState('');
    const[cateItem, setCateItem] = useState([]);

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
                                <Caption title ="Tin liên quan" link={"category/bong-da-viet-nam"}/>
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

}
export default DetailPage;