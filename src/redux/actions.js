

/*
===========================================
    Action Types
===========================================
*/
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART"


/*
===========================================
    Action creators
===========================================
*/
 
export const addProductToCart = (product) => {
    return {
        type : ADD_PRODUCT_TO_CART,
        payload : product
    }
}

export const removeProductFromCart = (productId) => {
    return {
        type : REMOVE_PRODUCT_FROM_CART,
        payload : productId
    }
}