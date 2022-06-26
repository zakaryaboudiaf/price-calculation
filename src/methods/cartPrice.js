
const cartPrice = (cart) => {
    
    let prices = {subtotal : 0 , discount : 0 , total : 0 }
    cart.map((item) => {
        prices = { 
            ...prices,
            subtotal : prices.subtotal + item.price,
            discount : prices.discount + item.discount,
            total : (prices.subtotal + item.price) - (prices.discount + item.discount)
        }
    })
    
    return prices

}

export default cartPrice