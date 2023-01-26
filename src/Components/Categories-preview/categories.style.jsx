import styled from "styled-components";


export const CategoriesPre = styled.div`
padding: 2rem 0;
`

export const Tittle = styled.h2`
margin-bottom:1rem;
&:hover{
cursor: pointer;
color: #999;
}
`

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 1rem;

@media screen and (max-width: 350px) {
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
 }

 @media screen and (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}
-webkit-scrollbar {
            display: none;
        }
`

