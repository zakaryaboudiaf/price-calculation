import applyDiscounts from "./discounteHandler"

const removeFromCart = ( cart , product ) => {

    
    let newCart = cart

    newCart = newCart.map((item) => {
        if(item.id === product.id){
            if(item.quantity === 1){
                return undefined
            }else{
                return {
                    ...item,
                    quantity : item.quantity - 1,
                    totalPrice : item.totalPrice - item.price
                }
            }
        }
        return item
    })
    

   
    newCart = newCart.filter((item) => item !== undefined)
    
    return applyDiscounts(newCart)

}

export default removeFromCart