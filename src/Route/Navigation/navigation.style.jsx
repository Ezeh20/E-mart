import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavHeader = styled.div`
width: 100%;
background-color: #fff;
align-content: center;
display: flex;
justify-content: center;
height: 5rem;
padding: 2.7rem 0;
position: sticky;
top: 0;
left: 0;
z-index: 1000;
`

export const NavBody = styled.div`
position: relative;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-left: 1.5rem;
margin-right: 1.5rem;
max-width: 1650px;
`

export const LogoSvg = styled(Link)`
font-size: 2.2rem;
color: #666;

@media screen and (min-width : 768px) {
    font-size: 3rem;
}
`

export const NavLinks = styled.div`
display: flex;
align-items: center;
column-gap: .8rem;

@media screen and (min-width: 768px) {
    column-gap: 1.5rem;
}
`
export const Links = styled(Link)`
font-size: 1rem;
color: #666;
font-weight: 300;

    &:hover {
        color: #888;
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 350px) {
        font-size: .8rem;
    }
`

export const CheckoutB = styled.div`
width: max-content;
height: auto;
padding: .2rem;
position: absolute;
right: 0rem;
top: 60px;
background-color: #fff;
border: 1px solid #000;
border-radius: 1px;
z-index: 10;
display: flex;
`