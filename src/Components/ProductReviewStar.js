import React from 'react'
import Wrapper from '../Wrappers/productReviewStarWrapper'
import { AiOutlineStar , AiFillStar } from 'react-icons/ai'

const ProductReviewStar = (props) => {

    const reviews = props.reviews
    const ratingArray = [1,1,1,1,1]

    return (
        <Wrapper>
        {
            ratingArray.map((item , index) => {
                return (index +1 <= reviews) ? 
                <AiFillStar className='review-star' key={index}/> 
                : 
                <AiOutlineStar className='review-star' key={index}/>
           }) 
        }
        </Wrapper>
    )
}

export default ProductReviewStar