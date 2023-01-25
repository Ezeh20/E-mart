import styled from "styled-components";


export const CategoriesPre = styled.div`
padding: 2rem 0;
`

export const ContainerThree = styled.div`
max-width: 1440px;
margin-inline: 1rem;

@media screen and (min-width : 1442px) {
    margin-inline: auto;
}
`
export const Tittle = styled.h2`
&:hover{
cursor: pointer;
color: #999;
}
`

export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 1rem;

@media screen and (max-width: 350px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
 }
-webkit-scrollbar {
            display: none;
        }
`

