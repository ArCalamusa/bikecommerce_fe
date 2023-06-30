import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    // productData: [],
    // userInfo: null,
    response: null,
    error: null,
    isLoading: false,
    products: [],
};

export const getProduct = createAsyncThunk(
    "posts/getProduct",

    async ({page, pageSize}, { rejectWithValue }) => {
        //funzione gestione errore in fase di rigetto, lo mostra
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/posts?page=${page}&pageSize=${pageSize}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching posts:", error);
            return rejectWithValue(error);
        }
    }
);

export const bikeSlice = createSlice({
    name: "bike",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find((item) => item._id === action.payload._id);

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
        increamentQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        /* user */
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    },
});

export const { addToCart, deleteItem, resetCart, increamentQuantity, decrementQuantity, addUser, removeUser } = bikeSlice.actions;
export default bikeSlice.reducer;