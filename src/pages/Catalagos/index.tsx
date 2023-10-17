import { NavLink, useParams } from "react-router-dom";
import { ContainerCatalagos, ImagemCatalogo,Container } from "./styles"

import img1geo from "../../assets/geo.jpeg"
import img2geo from "../../assets/geo 2.jpeg"
import img3geo from "../../assets/geo 3.jpeg"
import img4geo from "../../assets/geo 4.jpeg"
import img5geo from "../../assets/geo 5.jpeg"

import img1intel from "../../../public/pdfs-plataforma/telemetria-eficiencia/telemetriaeficienciaindustrial.jpeg"
import img2intel from "../../../public/pdfs-plataforma/telemetria-eficiencia/telemetriaeficienciaindustrial 2.jpeg"
import img3intel from "../../../public/pdfs-plataforma/telemetria-eficiencia/telemetriaeficienciaindustrial 3.jpeg"
import img4intel from "../../../public/pdfs-plataforma/telemetria-eficiencia/telemetriaeficienciaindustrial 4.jpeg"
import img5intel from "../../../public/pdfs-plataforma/telemetria-eficiencia/telemetriaeficienciaindustrial 5.jpeg"

import img1veitel from "../../../public/pdfs-plataforma/telemetria-veiculos/telemetriaveiculos.jpeg"
import img2veitel from "../../../public/pdfs-plataforma/telemetria-veiculos/telemetriaveiculos 2.jpeg"
import img3veitel from "../../../public/pdfs-plataforma/telemetria-veiculos/telemetriaveiculos 3.jpeg"
import img4veitel from "../../../public/pdfs-plataforma/telemetria-veiculos/telemetriaveiculos 4.jpeg"
import img5veitel from "../../../public/pdfs-plataforma/telemetria-veiculos/telemetriaveiculos 5.jpeg"

import img1vis from "../../../public/pdfs-plataforma/visao-computacional/visaocomputacional.jpeg"
import img2vis from "../../../public/pdfs-plataforma/visao-computacional/visaocomputacional 2.jpeg"
import img3vis from "../../../public/pdfs-plataforma/visao-computacional/visaocomputacional 3.jpeg"
import img4vis from "../../../public/pdfs-plataforma/visao-computacional/visaocomputacional 4.jpeg"
import img5vis from "../../../public/pdfs-plataforma/visao-computacional/visaocomputacional 5.jpeg"

import { KeyReturn } from "phosphor-react";

export function Catalagos() {

    const { id } = useParams();

    let imagens: any = []

    if (id == "geo") {
        imagens = [
            {
                img: img1geo
            },
            {
                img: img2geo
            },
            {
                img: img3geo
            },
            {
                img: img4geo
            },
            {
                img: img5geo
            }
        ]
    }
    else if (id == "telemetriaeficienciaindustrial") {
        imagens = [
            {
                img: img1intel
            },
            {
                img: img2intel
            },
            {
                img: img3intel
            },
            {
                img: img4intel
            },
            {
                img: img5intel
            }
        ]
    }
    else if (id == "telemetriaveiculos") {
        imagens = [
            {
                img: img1veitel
            },
            {
                img: img2veitel
            },
            {
                img: img3veitel
            },
            {
                img: img4veitel
            },
            {
                img: img5veitel
            }
        ]
    }
    else if (id == "visaocomputacional") {
        imagens = [
            {
                img: img1vis
            },
            {
                img: img2vis
            },
            {
                img: img3vis
            },
            {
                img: img4vis
            },
            {
                img: img5vis
            }
        ]
    }
    return (
        <Container>
            <NavLink to={'/'}>
                <KeyReturn size={50} />
            </NavLink>
            <ContainerCatalagos>
                {
                    imagens.map((i: any) => (
                        <ImagemCatalogo src={i.img} alt="" />
                    ))
                }
            </ContainerCatalagos>
        </Container>
    )
}