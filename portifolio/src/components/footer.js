
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

    function handleSubmit (e) {
        
        e.preventDefault(); 

        if (!name) {
            alert('Nome não preenchido corretamente.');
            return; 
        }; 

        if (!email) {
            alert('Email não preenchido corretamente.'); 
            return; 
        };

        if (!bio) {
            alert('A caixa de texto não pode estar vazia.'); 
            return; 
        }; 

        //reset input values; 
        setName('');
        setEmail('');  
        setBio(''); 
    
        //change confirmSubmit and form classes
        setConfirmClass(true);
        setFormContentClass(true); 

    }; 

    return (

        <div className='footer-container'>

            <div className={noOpacity}>

                <h1 className='footer-title'>Fale comigo!</h1>
                <p>Dúvidas sobre projeto, contratação e assuntos correlatos.</p>

                <form className='form' onSubmit={handleSubmit}>

                <input type="text" name="name" placeholder="Nome:" className='nameInput' value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="email" name="email" placeholder="Email:" className='emailInput' value={email} onChange={(e) => {setEmail(e.target.value)}}/><br /><br />
                <textarea name="bio" placeholder='Deixe a sua mensagem:' className='bioInput' value={bio} onChange={(e) => {setBio(e.target.value)}}></textarea><br />

                <button type='submit' className='btn'>Enviar Informações</button>

                </form>

            </div>

            <div className={visible}>

                <h1>Mensagem enviada com sucesso!</h1>
                <button onClick={() => {

                    setConfirmClass(false);
                    setFormContentClass(false); 

                }}><img src='./x-btn.png'></img></button>

            </div>

        </div>

    )
}; 

export default Footer;