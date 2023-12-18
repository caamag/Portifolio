
//Style
import './mainProjects.css';

import { useState } from 'react';

function MainProjects () {

    const [bannerClass, setBannerClass] = useState('banner'); 

    //Animation scroll:
    function handleScrollY () {

        const currentScrollY = window.scrollY; 

        if (currentScrollY >= 900) {
            setBannerClass('banner banner-visible'); 
        }

    }; 

    window.addEventListener('scroll', handleScrollY); 

    return (

        <div className='main-projects-container'>

            <h1 className='main-projects-title'>Projeto em destaque:</h1>

            <div className={bannerClass}>

                <div className='mobile'>

                    <img src='./site-puma-mobile.png' alt='site pume mobile'></img>

                </div>

                <div className='project-puma-content'>

                    <h1>Central de ajuda <span>PUMA</span></h1>
                    <h2>Descrição:</h2>

                    <p>O Portal de Atendimento PUMA é um projeto dedicado a 
                    aprimorar a interação entre a marca PUMA e seus clientes, 
                    oferecendo um ambiente intuitivo e eficiente para atender 
                    às demandas e esclarecer dúvidas dos consumidores.</p>
                    <p>Desenvolvido utilizando tecnologias modernas, o site 
                    incorpora uma combinação 
                    de CSS, Handlebars, JavaScript e a biblioteca Axios. 
                    A integração com a API do Zendesk Guide permite uma experiência 
                    dinâmica ao puxar informações em tempo<br /> real, garantindo que os usuários 
                    tenham acesso às respostas mais recentes.
                    </p>

                    <button><a href='https://puma6491.zendesk.com/hc/pt-br' target='blank_'>Visitar site</a></button>

                </div>

            </div>

        </div>

    ); 
}; 

export default MainProjects; 