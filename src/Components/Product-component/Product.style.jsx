import styled from "styled-components";



export const ProductCard = styled.div`
display: flex;
flex-direction: column;
background-color: #fff;
border-radius: 5px;
height: 350px;
box-shadow: .1rem .1rem .9rem .1rem rgb(223, 222, 222);
cursor: pointer;
`
export const ProductImg = styled.img`
width: 100%;
height: 60%;
object-fit: cover;
border-radius: 5px 5px 0 0;
`

export const Proo = styled.div`
display: flex;
flex-direction: column;
row-gap: 1rem;
padding: 1rem;
`

export const ProductDetails = styled.div`
margin-top: 1rem;
display: flex;
justify-content: space-between;
`

export const ProBtn = styled.div`
left: 0;
bottom: 30%;
flex-direction: column;
width: 100%;
`