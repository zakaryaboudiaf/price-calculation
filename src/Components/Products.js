import React from 'react'
import Wrapper from '../Wrappers/productsWrapper'
import Product from './Product'
import { connect } from 'react-redux'
import { addProductToCart } from '../redux/actions'

const Products = (props) => {
    

    const { products , cart } = props
    
    return (
        <Wrapper>
            <h3 className='header-title'>Products</h3>
            <div className='products-container'>
            {
                products.map((product) => {
                    const { id } = product
                    return(
                        <Product product={product} key={id}/>
                    )
                })
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
        addProductToCart : (product) => { dispatch(addProductToCart(product))}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Products)