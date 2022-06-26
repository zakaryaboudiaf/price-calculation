import styled from "styled-components";


const Wrapper = styled.section`

    margin: 0.5rem 0rem;
    display: flex;
    grid-template-columns: 25% 75%;
    min-height: 90px;
    border : 2px solid rgb(191, 191, 191);
    border-radius: 0.5rem;
    padding: 0.5rem 0rem;

    .product-image-container{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0rem 0.5rem;
        width: 90px;
    }
    .product-image{
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid rgb(217, 217, 217);
    }
    .product-info-container{
        
        flex-grow: 1;

    }
    .product-info-top{
        min-height: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        //flex-wrap: wrap;
        padding: 0rem 0.5rem;
        

    }
    .product-info-middle{
        min-height: 30px;
        padding: 0rem 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;

    }
    .product-info-bottom{
        min-height: 30px;
        padding: 0rem 0.5rem;
        display: flex;
        align-items: center;
       

    }

    .product-name{
        text-transform: capitalize;
        margin: 0rem;
    }

    .product-price{
        white-space: nowrap;
        font-weight: bolder;
    }

    .btn{
        background-color:rgb(51, 153, 255);
        padding: 0.2rem 0.5rem;
        text-transform: capitalize;
        border: transparent;
        border-radius: 0.2rem;
        margin-left: auto;
    }
    .btn:hover{
        cursor: pointer;
    }

`

export default Wrapper