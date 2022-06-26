import React , {useState , useEffect} from 'react'
import Wrapper from '../Wrappers/cartWrapper'
import { connect } from 'react-redux'
import { addProductToCart } from '../redux/actions'
import CartItem from './CartItem'

const Cart = (props) => {

    const { cart , cartPrices } = props
    const {subtotal , discount , total } = cartPrices

    return (
        <Wrapper>
            <h3 className='header-title'>CART</h3>
            <div className='cart-items-container'>
                {
                    cart.map((item) => {
                        return(
                            <CartItem cartItem={item} key={item.id}/>
                        )
                    })
                }
            </div>
            <div className='cart-price'>
                <div className="subtotal">
                    <h5>subtotal</h5>
                    <p className='price'>{`£ ${subtotal.toFixed(2)}`}</p>
                </div>
                <div className="discount">
                    <h5>discount</h5>
                    <p className='price'>{`£ ${discount.toFixed(2)}`}</p>
                </div>
                <div className="total">
                    <h5>total</h5>
                    <p className='price'>{`£ ${total.toFixed(2)}`}</p>
                </div>
            </div>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart,
        cartPrices : state.cartPrices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart : (product) => { dispatch(addProductToCart(product))}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Cart)