import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    products: {}
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductCart: (state, action) => {
            const {productDetails} = action.payload
            const productId = productDetails._id
            return {
                ...state,
                [productId] : productDetails
            }
        },
        deleteProductCart: (state, action) => {
            return {
                ... initialState
            }
        }
    }
})

export const {addProductCart, deleteProductCart} = cartSlice.actions
export default cartSlice.reducer