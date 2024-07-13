// server.js
import express from 'express';
import Parser from 'rss-parser';
import cors from 'cors';
import axios from "axios";
import cheerio from "cheerio";

const app = express();
const port = 4000;

app.use(cors());

app.get('/rss', async (req, res) => {
        const parser = new Parser();
        const RSS_URL = req.query.url; // Lấy URL từ query parameter
        if (!RSS_URL) {
                return res.status(400).json({ error: 'RSS URL is required' });
        }

        try {
                const feed = await parser.parseURL(RSS_URL);
                res.json(feed.items);
        } catch (error) {
                res.status(500).json({ error: error.message });
        }
});
app.get('/scrape', async (req, res) => {
        const ARTICLE_URL = req.query.url; // Lấy URL bài báo từ query parameter
        if (!ARTICLE_URL) {
                return res.status(400).json({ error: 'Article URL is required' });
        }

        try {
                const response = await axios.get(`https://dantri.com.vn/${ARTICLE_URL}`);
                const html = response.data;
                const $ = cheerio.load(html);

                const data = [];
                // Lấy tiêu đề
                const title = $('.title-page').text();
                // Chọn nội dung có class 'txt_content'
                const txtContent = $('.singular-content');
                // Xóa các phần tử có class 'ad-label'
                // $('.ad-label').remove();

                // Xóa các thẻ <p> có class 'expNoEdit'
                // txtContent.find('p.expNoEdit').remove();

                // Tìm tất cả các thẻ <figure> trong txt_content
                txtContent.find('figure').each((index, figure) => {
                        // Tìm thẻ <a> trong thẻ <figure>
                       $(figure).find('img').attr('src');  // Đã thay đổi $("figure").find('a') thành $(figure).find('a')

                });

                // Chỉ chọn các thẻ <p> và <figure> trong txt_content
                const elements = txtContent.contents().filter((index, element) => {
                        return element.tagName === 'p' || element.tagName === 'figure';
                });

                // Lấy HTML của các phần tử đã chọn
                let content = '';
                elements.each((index, element) => {
                        content += $.html(element);
                });
                data.push(title, content)
                res.json(data);
        } catch (error) {
                res.status(500).json({ error: error.message });
        }
});
app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
});
