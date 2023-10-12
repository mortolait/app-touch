import { CardsContainer, HomeContainer } from "./styles";
import Component1 from "../../assets/cards-plataforma/Component 1.png"
import Component2 from "../../assets/cards-plataforma/Component 2.png"
import Component3 from "../../assets/cards-plataforma/Component 3.png"
import Component4 from "../../assets/cards-plataforma/Component 4.png"
import buttonPlataform from "../../assets/button-plataform.png"
import { Header } from "../../components/Header";
import { NavLink } from "react-router-dom";

export function Home() {
    const cardVantagens = [
        {
            path: Component1,
            url: '#'
        },
        {
            path: Component2,
            url: '#'
        },
        {
            path: Component3,
            url: '#'
        },
        {
            path: Component4,
            url: '#'
        }
    ]
    return (
        <HomeContainer>
            <Header /> 
            <h1>Nuvem de <span>operações conectadas</span></h1>
            <div>
                <p>Capture dados Iot para executar suas operações em uma unica plataforma.</p>
                <p>Escolha um dos catalogos para saber mais sobre a plataforma</p>
            </div>

            <CardsContainer>
                {
                    cardVantagens.map((x) => (
                        <a href="#" key={x.path}>
                            <img src={x.path} alt="" />
                        </a>
                    ))
                }
            </CardsContainer>
            <NavLink to={'/examples'}>
                <img src={buttonPlataform} alt="" />
            </NavLink>

        </HomeContainer>
    )
}