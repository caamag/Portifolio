
import './about.css'; 

import { useState } from 'react';

function About () {

    const [aboutTxtClass, setAboutTxtClass] = useState('about-txt'); 

    //scroll animation
    function handleScroll () {

        const currentScrollY = window.scrollY; 

        if (currentScrollY >= 300) {
            setAboutTxtClass('about-txt about-txt-visible'); 
        }

    }

    window.addEventListener('scroll', handleScroll);     

    return (

        <div className="about-container">

            <div className={aboutTxtClass}>

                <h1>Sobre mim</h1><br />
                <p>Atualmente estagiário de desenvolvimento na BCR.CX focado no frontend, 
                apaixonado por criar experiências web. Ao longo do meu período de estágio, 
                aprimorei minhas habilidades em HTML, CSS e JavaScript, utilizando essas 
                tecnologias para desenvolver páginas web.</p>

                <p>Atualmente, estou imerso no universo dos frameworks JavaScript, 
                dedicando meu tempo ao estudo aprofundado de React e Node.js. 
                Essa jornada de aprendizado visa expandir minha capacidade de criar 
                aplicações mais robustas e eficientes.</p>

                <button><a href="./Currículo Caio Magalhães.pdf" target="blank_">CV</a></button>
                <button><a href="https://www.linkedin.com/in/caio-lopes-programador/" target="blank_">Linkedin</a></button>

            </div>

        </div>

    ); 

}; 

export default About; 