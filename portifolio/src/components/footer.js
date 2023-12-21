
import './footer.css';

import { useState } from 'react';

function Footer () {

    //states form
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState(''); 

    //states confirm form
    const [confirmClass, setConfirmClass] = useState(false); 
    const visible = confirmClass ? 'confirmSubmit confirmSubmit-visible' : 'confirmSubmit'; 

    //change opacity's form
    const [formContentClass, setFormContentClass] = useState(false); 
    const noOpacity = formContentClass ? 'form-content no-opacity' : 'form-content'; 

    async function handleSubmit (e) {

        e.preventDefault(); 
    
        //change confirmSubmit and form classes
        setConfirmClass(true);
        setFormContentClass(true); 

        const form = document.querySelector('.form'); 
            setTimeout(() => {form.submit()}, 1000); 

    }; 

    return (

        <div className='footer-container'>

            <div className={noOpacity}>

                <h1 className='footer-title'>Fale comigo!</h1>
                <p>Dúvidas sobre projeto, contratação e assuntos correlatos.</p>

                <form className='form' onSubmit={handleSubmit} action='https://formsubmit.co/caiolopesfv@gmail.com' method='post'>

                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_next" value="https://portifolio-caio-magalhaes-s-projects.vercel.app"/>
                <input type="text" name="name" placeholder="Nome:" className='nameInput' value={name} onChange={(e) => {setName(e.target.value)}} required/>
                <input type="email" name="email" placeholder="Email:" className='emailInput' value={email} onChange={(e) => {setEmail(e.target.value)}} required/><br /><br />
                <textarea name="bio" placeholder='Deixe a sua mensagem:' className='bioInput' value={bio} onChange={(e) => {setBio(e.target.value)}} required></textarea><br />

                <button className='btn'>Enviar Informações</button>

                </form>

            </div>

            <div className={visible}><h1>Mensagem enviada com sucesso!</h1></div>  

        </div>

    )
}; 

export default Footer;