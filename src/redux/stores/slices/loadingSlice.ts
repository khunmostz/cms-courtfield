import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

export const { setLoading } = loadingSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const loading = (state: RootState) => state.loading.isLoading
export default loadingSlice.reducer;