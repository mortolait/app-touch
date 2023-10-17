import styled from "styled-components";

export const ContainerCatalagos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D9D9D9;
`
export const ImagemCatalogo = styled.img`
    max-width: 80%;
`
export const Container = styled.div`
    a{
        color:  #091F33;
        position: fixed;
        margin-left: 1rem;

        &:hover{
            color:${props => props.theme['blue']} ;
            transition: 1s;
        }
    }
`