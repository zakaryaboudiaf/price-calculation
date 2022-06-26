import React from 'react'
import Wrapper from '../Wrappers/cartItemWrapper'
import { connect } from 'react-redux'

import { addProductToCart , removeProductFromCart } from '../redux/actions'

const CartItem = (props) => {

    const { cartItem , addProductToCart , removeProductFromCart } = props
    const { id , totalPrice , image , quantity , name , discount } = cartItem

    return (
        <Wrapper>
            <div className="cart-item-left">
                <img src={image} alt="" className='product-image'/>
            </div>
            <div className="cart-item-middle">
                <div className="cart-item-liddle-top">
                    <h3>{name}</h3>
                </div>
                <div className="cart-item-liddle-bottom">
                    <button className='btn' onClick={ () => { removeProductFromCart(cartItem) }}>-</button>
                    <p>{quantity}</p>
                    <button className='btn' onClick={ () => { addProductToCart(cartItem) }}>+</button>
                </div>
                
            </div>
            <div className="cart-item-right">
                <p className = {`total-price ${discount === 0 ? null : 'dicount'}`} >
                {
                    `£ ${totalPrice.toFixed(2)}`
                }
                </p>
                {
                    discount === 0 ? null : <p className='total-price'>{`£ ${discount.toFixed(2)}`}</p>
                }
                
            </div>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        products : state.products,
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart : (product) => { dispatch(addProductToCart(product))},
        removeProductFromCart : (product) => { dispatch(removeProductFromCart(product))}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CartItem)