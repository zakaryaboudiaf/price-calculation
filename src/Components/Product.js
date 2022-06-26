import React from 'react'
import Wrapper from '../Wrappers/productWrapper'
import ProductReviewStar from './ProductReviewStar'
import { connect } from 'react-redux'
import { addProductToCart } from '../redux/actions'

const Product = (props) => {
    const addProductToCart = props.addProductToCart
    const product = props.product
    const { name , reviews , image , description , price } = product
    return (
        <Wrapper>
            <div className='product-image-container'>
                <img src={image} className='product-image'/>
            </div>
            <div className='product-info-container'>
                <div className="product-info-top">
                    <h4 className='product-name'>{name}</h4>
                    <div className='product-reviews'>
                        <ProductReviewStar reviews={reviews}/>
                    </div>
                </div>
                <div className="product-info-middle">
                    <p className="product-discription">
                        {description}
                    </p>
                    <p className='product-price'>
                        {`£ ${price}`}
                    </p>
                </div>
                <div className="product-info-bottom">
                    <button className='btn' onClick={ () => { addProductToCart(product) }}>
                        add to my cart
                    </button>
                </div>
            </div>
           
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProductToCart : (product) => { dispatch(addProductToCart(product))}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Product)