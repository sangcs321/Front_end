import {createSlice} from "@reduxjs/toolkit";
export const themeSlice = createSlice({
    name : "theme",
    initialState: 'light-mode',
    reducers: {
        setTheme : (state , action) => {
            return action.payload;
        }
    }
})

export const {setTheme} = themeSlice.actions;