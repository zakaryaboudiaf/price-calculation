import styled from "styled-components";


const Wrapper = styled.section`

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content:center;
    justify-content: space-between;
    min-height: 80px;
    margin: 0.5rem 0rem;
    border-bottom: 2px solid rgb(230, 230, 230);

    .cart-item-left{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0rem 0.5rem;
    }

    .product-image{
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid rgb(217, 217, 217);
    }
    .cart-item-middle{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-columns: 1fr;
        flex-grow: 1;  
    }

    .cart-item-liddle-bottom{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
    }

    .cart-item-right{
        width: 70px;
        height: 70px;
        
    }

    .total-price{
        white-space: nowrap;
        font-weight: bolder;
    }

    h3{
        margin: 0;
    }
    .btn{
        margin: 0rem 1rem;
        border-radius: 50%;
        border: transparent;
        font-size: large;
        background-color: rgb(255,255,255);

    }
    .btn:hover{
        cursor: pointer;
        transform: scale(1.1);
    }

    .dicount{
        text-decoration: line-through;
        color : rgb(255,0,0)
    }

`

export default Wrapper