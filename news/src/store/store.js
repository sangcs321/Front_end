import {configureStore} from "@reduxjs/toolkit";
import {themeSlice} from "./themeReducer";
import {cateSlice} from "./cateReducer";

export const store = configureStore({
    reducer : {
        theme : themeSlice.reducer,
        cate: cateSlice.reducer,
    }
})