import products from "../data/data"
import { ADD_PRODUCT_TO_CART , REMOVE_PRODUCT_FROM_CART } from "./actions"
import addToCart from "../methods/addProductToChart"
import removeFromCart from "../methods/removeProductFromCart"
import cartPrice from "../methods/cartPrice"


const initialState = {
    products : products,
    cart : [],
    cartPrices : {subtotal : 0 , discount : 0 , total : 0 }
}




const reducer = (state = initialState , action) => {

    switch (action.type) {
        
        case ADD_PRODUCT_TO_CART : 
        const cartAfterAdding = addToCart(state.cart , action.payload)
        return {   
            ...state ,
            cart : cartAfterAdding.newCart,
            cartPrices : cartAfterAdding.cartPrices
        }

        case REMOVE_PRODUCT_FROM_CART :
        const cartAfterRemoving = removeFromCart(state.cart , action.payload)
        return {
            ...state,
            cart : cartAfterRemoving.newCart,
            cartPrices : cartAfterRemoving.cartPrices
        }
    
        default: return state
    }

}

export default reducer