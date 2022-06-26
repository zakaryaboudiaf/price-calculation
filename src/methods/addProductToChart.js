import applyDiscounts from "./discounteHandler"

const addToCart = (cart , newEntry) => {

    let newCart = cart
    let entryAlreadyExist = false
    let toBeDiscountedItems = {}

    newCart = newCart.map((cartItem) => {
        if(cartItem.id === newEntry.id){
            entryAlreadyExist = true
            return {
                ...cartItem,
                quantity : cartItem.quantity + 1,
                totalPrice : cartItem.totalPrice + cartItem.price
            }
        }
        return cartItem
    })
    if(!entryAlreadyExist){
        const entryToBeAdded = {
            ...newEntry,
            quantity : 1,
            discount : 0,
            totalPrice : newEntry.price 
        }
        newCart = [ ...newCart , entryToBeAdded]
    }


    return applyDiscounts(newCart)
}
    




export default addToCart