import styled from "styled-components";


const Wrapper = styled.div`

    background-color: rgb(242, 242, 242);
    flex-grow: 1;
    margin: 0.5rem;
    padding: 0.5rem;
    max-width: 550px;
    min-width: 300px;

    .header-title{
        color: rgb(64, 64, 64);
    }

    .cart-items-container{
        min-height: 300px;
    }

    .cart-price{

        text-align: end;
    }

    h5{
        margin: 0rem;
    }
    p{
        margin: 0rem;
    }
    .price{
        font-weight: bolder;
    }



`

export default Wrapper