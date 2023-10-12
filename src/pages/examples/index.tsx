import img1 from "../../assets/Telas-plataformas-OEE/1.png"
import img2 from "../../assets/Telas-plataformas-OEE/2.png"
import img3 from "../../assets/Telas-plataformas-OEE/3.png"
import img4 from "../../assets/Telas-plataformas-OEE/4.png"
import img5 from "../../assets/Telas-plataformas-OEE/5.png"
import img6 from "../../assets/Telas-plataformas-OEE/6.png"
import img7 from "../../assets/Telas-plataformas-OEE/7.png"
import img8 from "../../assets/Telas-plataformas-OEE/8.png"
import img9 from "../../assets/Telas-plataformas-OEE/9.png"
import img10 from "../../assets/Telas-plataformas-OEE/10.png"
import img11 from "../../assets/Telas-plataformas-OEE/11.png"

import { ImgContainer, ImgExamples } from "./styles"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export function Examples() {
    const examples = [
        {
            path: img1,
            active: true
        },
        {
            path: img2,
            active: false
        },
        {
            path: img3,
            active: false
        },
        {
            path: img4,
            active: false
        },
        {
            path: img5,
            active: false
        },
        {
            path: img6,
            active: false
        },
        {
            path: img7,
            active: false
        },
        {
            path: img8,
            active: false
        },
        {
            path: img9,
            active: false
        },
        {
            path: img10,
            active: false
        },
        {
            path: img11,
            active: false
        }
    ]

    const [imgSelected, setImage] = useState(img1)
    const navigate = useNavigate();

    function handleChangeImg(){
        const selectedIndex = examples.findIndex(example => example.path === imgSelected);
        const nextIndex = selectedIndex + 1; 
        console.log(nextIndex)
        console.log(examples.length)
        if(nextIndex == examples.length -1){
            navigate("/");
        }
        setImage(examples[nextIndex].path);
    }
    return (
        <ImgContainer>
            <a onClick={handleChangeImg}>
                <ImgExamples src={imgSelected} />
            </a>
        </ImgContainer>
    )
}