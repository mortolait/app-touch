import styled from "styled-components"
import imgBackground from "../../assets/img-back.png"

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${imgBackground});
    background-position: cover; 
    background-size: cover;
    box-shadow: inset 0px -500px #D9D9D9;

    @media(max-width: 1400px){
        background-image: url(${imgBackground});
        box-shadow: inset 0px -350px #D9D9D9;
        }

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: ${props => props.theme['white']};
        margin-bottom: 1rem;
        margin-top: 2.5rem;
        
        @media(max-width: 1400px){
            font-size: 2rem;
            margin-bottom: 0.5rem;
            margin-top: 2rem;
        }
    }

    h1 span{
        font-size: 3.75rem;
        color: ${props => props.theme['blue']};

        @media(max-width: 1400px){
            font-size: 3rem;
        }
    }

    p{
        font-weight: 400;
        color: ${props => props.theme['white']};
        line-height: 40px;
        font-size: 1.5rem;
        text-align: center;
        
        @media(max-width: 1400px){
            font-size: 1rem;
            line-height: 30px;
        }
    }
  
`

export const CardsContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
    margin-bottom: 2rem;

    @media(max-width: 1400px){
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }

    img{
        height: 22rem;
        width: 23rem;
        
        @media(max-width: 1400px){
            height: 15rem;
            width: 16rem;
        }
    }
`
export const ImgPlataform = styled.img`   
        width: 54rem;
        @media(max-width: 1400px){
            width: 40rem;
        }
       /* :hover{
        cursor: pointer;
       } */
`