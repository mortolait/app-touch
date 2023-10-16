import { CardsContainer, HomeContainer, ImgPlataform } from "./styles";
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
            url: 'geo'
        },
        {
            path: Component2,
            url: 'telemetriaeficienciaindustrial'
        },
        {
            path: Component3,
            url: 'telemetriaveiculos'
        },
        {
            path: Component4,
            url: 'visaocomputacional'
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
                    // cardVantagens.map((x) => (
                    //     <a href={x.url} target="_blank" key={x.path}>
                    //         <img src={x.path} alt="" />
                    //     </a>
                    // ))
                    cardVantagens.map((x) => (
                        <NavLink to={`catalogos/${x.url}`} target="_blank">
                            <img src={x.path} alt="" />
                        </NavLink>
                    ))
                }
            </CardsContainer>
            <NavLink to={'/examples'}>
                <ImgPlataform src={buttonPlataform} alt="" />
            </NavLink>

        </HomeContainer>
    )
}