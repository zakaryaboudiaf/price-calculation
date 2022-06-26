

const applyDiscounts = (cart) => {

    let newCart = cart
    let quantityObj = {}
    let cartPrices
    let subtotal = 0
    let discount = 0
    let total = 0

    newCart.map((item) => {
        quantityObj[`${item.name}`] = item.quantity 
        return null
    })

    newCart = newCart.map((item) => {
        if(item.name === "fresh suiss milk"){
            let addedMilks = Number(((((item.quantity - (item.discount / item.price)) / 3).toString()).split('.'))[0])
            return{
                ...item,
                discount : addedMilks * item.price,
                quantity : (item.quantity - (item.discount / item.price)) + addedMilks
            }
        }
        if(item.name === "whole french bread"){
            let butterQuantity = quantityObj["butter"]
            let discountedAmount = (butterQuantity / 2) > item.quantity ? (item.quantity * (0.5 * item.price)) : Number((((butterQuantity / 2).toString()).split('.'))[0]) * (0.5 * item.price)

            return {
                ...item,
                discount : Number.isNaN(discountedAmount) ? 0 : discountedAmount
            }

        }
        return item
    })

    newCart.map((item) => {
        subtotal = subtotal + item.totalPrice
        discount = discount + item.discount
        total = subtotal - discount
    })

    cartPrices = {subtotal , discount , total}
    

    return {newCart , cartPrices}

} 


export default applyDiscounts