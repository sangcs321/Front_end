import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CategoryPage, {loadRss} from "../page/CategoryPage/CategoryPage";
import HomePage from "../page/HomePage/HomePage";
import DetailPage, {loadUrl} from "../page/DetailPage/DetailPage";
export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path: 'category/:nameCate',
                element: <CategoryPage/>,
                loader: loadRss,
            },
            {
                path: ':url',
                element: <DetailPage/>,
                loader: loadUrl,
            },
            {
                index : true,
                element : <HomePage/>
            }
        ]
    }
])